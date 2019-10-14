<template>
	<b-container class="py-4">
		<h1>This is secure account page</h1>
		<p>You only can access this page if you logged in</p>
		<p>
			<a href="javascript:;" @click="$auth.logout()">Logout</a> 
			| 
			<nuxt-link to="/">Home</nuxt-link>
		</p>
	</b-container>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Secure'
			}
		}
	}
</script>