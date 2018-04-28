<template>
	<div class="login">
		<v-form v-model="valid" ref="form" lazy-validation>
			<v-text-field
			  label="Name"
			  v-model="name"
			  :rules="nameRules"
			  :counter="12"
			  required
			></v-text-field>
			<router-link to="/dashboard">
			  	<v-btn 
			  		:disabled="!valid" 
			  		:class="{ hide: !valid }"
			  		@click="authUser()"
			  	>submit
			  	</v-btn>
			</router-link>
		</v-form>
	</div>
</template>

<script>
	import axios from 'axios'

	var id;

	export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 12) || 'Name must be less than 12 characters'
      ]
    }),
    methods: {
    	authUser() {
		  	this.$store.dispatch('initUser', {name: this.name})
		  	
    		localStorage.setItem('name', this.name)
    	}
    }
  }
</script>