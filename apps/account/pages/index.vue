<template>
	<b-container class="py-4">
		<h1 class="mb-4">This is account page</h1>
		<p>
			<nuxt-link to="/login" v-if="!$auth.$state.loggedIn">Login</nuxt-link> 
			<a href="javascript:;" @click="$auth.logout()" v-else>Logout</a> 
			| 
			<nuxt-link to="/secure">Secure page</nuxt-link>
		</p>
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
		head() {
			return {
				title: 'Home'
			}
		}
	}
</script>