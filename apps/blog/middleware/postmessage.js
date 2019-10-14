// LIBRARY FOR CROSS ORIGIN COOKIES
const CrossOriginCookies = function(currentWindow, iframe, allowedOrigins, onMessage) {
	this.allowedOrigins = allowedOrigins;

	let childWindow;
	try {
		childWindow = iframe.contentWindow;
	} catch(e) {
		childWindow = iframe.contentWindow;
	}

	currentWindow.onmessage = (event) => {
		if (!this.isAllowedOrigin(event.origin)) {
			return;
		}

		return onMessage(JSON.parse(event.data), event);
	};

	this.isAllowedOrigin = (origin) => {
		return this.allowedOrigins.includes(origin);
	}

	this.getData = (key) => {
		const messageData = {
			key: key,
			method: 'get',
		}
		this.postMessage(messageData);
	}

	this.setData = (key, data) => {
		const messageData = {
			key: key,
			method: 'set',
			data: data,
		}
		this.postMessage(messageData);
	}

	this.postMessage = (messageData) => {
		childWindow.postMessage(JSON.stringify(messageData), '*');
	}
};
// END OF - LIBRARY FOR CROSS ORIGIN COOKIES

const allowedOrigins = [
	'http://account.test:3000', 
	'http://blog.test:3001',
]

const sessionIframe = 'http://account.test:3000/session/iframe'

const iframe = document.createElement('iframe')
iframe.src = sessionIframe
iframe.style.display = 'none'
document.body.appendChild(iframe)

export default function ({ $auth }) {
	window.onload = () => {
		const onMessage = (payload, event) => {
			const data = payload.data
			if (payload.method === 'storage#get') {
				$auth.setToken('local', data || false)
			} else {
				console.error('Unknown method "' + payload.method + '"', payload)
			}
		}

		const cross = new CrossOriginCookies(window, iframe, allowedOrigins, onMessage)
		cross.getData('auth._token.local')
	}
}
