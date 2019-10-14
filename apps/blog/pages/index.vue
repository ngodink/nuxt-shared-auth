<template>
	<b-container class="py-4">
		<h1 class="mb-4">This is blog page</h1>
		<p>Just reload this page if you make change of <code>$auth.$state</code> from <a href="http://account.test:3000/">http://account.test:3000/</a></p>
		<b-card title="State">
			<pre>
				{{ $auth.$state }}
			</pre>
		</b-card>
	</b-container>
</template>

<script>
	export default {
		auth: false,
		middleware: ['postmessage'],
		head() {
			return {
				title: 'Home'
			}
		}
	}
</script>