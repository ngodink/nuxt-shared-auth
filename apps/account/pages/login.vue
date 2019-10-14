<template>
	<b-container class="py-4">
		<h1 class="mb-4">This is login page</h1>
		<p>
			<nuxt-link to="/">Home</nuxt-link> 
			| 
			<nuxt-link to="/secure">Secure page</nuxt-link>
		</p>
		<hr>
		<p>Login API using <a href="https://reqres.in/">https://reqres.in/</a></p>
		<b-row>
			<b-col sm="6" md="4">
				<b-alert variant="danger" :show="!!error">{{ error }}</b-alert>
				<form @submit.prevent="login">
					<b-form-group>
						<b-form-input v-model="form.username" placeholder="Username" :disabled="loading"></b-form-input>
					</b-form-group>
					<b-form-group>
						<b-form-input type="password" v-model="form.password" placeholder="Password" :disabled="loading"></b-form-input>
					</b-form-group>
					<b-form-group>
						<b-button type="submit" variant="primary" :disabled="loading">
							<span v-if="loading">Loading ...</span>
							<span v-else>Login</span>
						</b-button>
						<b-button to="/">Back</b-button>
					</b-form-group>
				</form>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Login'
			}
		},
		data() {
			return {
				error: false,
				loading: false,
				form: {
					username: 'eve.holt@reqres.in',
					password: 'cityslicka'
				}
			}
		},
		methods: {
			async login() {
				this.error = false
				this.loading = true
				await this.$auth.loginWith('local', {
						data: this.form
					})
					.then(() => {
						if(this.$route.query.next) {
							this.$router.go(this.$route.query.next)
						}
					})
					.catch(e => {
						this.error = e.response.data.error
					})
					.finally(() => {
						this.loading = false
					})
			}
		}
	}
</script>