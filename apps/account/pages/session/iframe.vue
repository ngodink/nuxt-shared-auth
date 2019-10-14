<template>
	<div>Hello, I'm session iframe</div>
</template>

<script>
	const allowedOrigins = [
		'http://account.test:3000', 
		'http://blog.test:3001',
	]

	function getCookie(cname) {
		const name = cname + '='
		const decodedCookie = decodeURIComponent(document.cookie)
		const ca = decodedCookie.split(';')
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) === ' ') {
				c = c.substring(1)
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length)
			}
		}
		return ''
	}

	window.onmessage = (e) => {
		if (!allowedOrigins.includes(e.origin)) {
			return
		}
		const payload = JSON.parse(e.data)
		if (payload.method === 'set') {
			document.cookie = payload.key + '=' + JSON.stringify(payload.data) + ';'
		} else if (payload.method === 'get') {
			const parent = window.parent
			const data = getCookie(payload.key)
			const returnPayload = {
				method: 'storage#get',
				data
			}
			parent.postMessage(JSON.stringify(returnPayload), '*')
		} else if (payload.method === 'get') {
			document.cookie = payload.key + '=' + false + ';'
		}
	}

	export default {
		auth: false
	}
</script>
