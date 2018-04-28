<template>
	<div class="container-note">
		<h1>{{ title }}</h1>
		<p v-html="text"></p>
		<time>
			<b> {{ time }} </b>
		</time>
	</div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

	export default {
		data: function() {
			return {
				title: '',
				text: '',
				created: ''
			}
		},
		computed: {
			time: function() {
				let date = moment(this.created);
				moment.locale('ru');
				return date.format('LLLL');
			}
		},
		created: function() {
			let id = this.$route.params.id;

			axios.get(`http://localhost/api/notes/${id}`)
		  	.then(response => {
		  		this.title = response.data.title
		  		this.text = response.data.text
		  		this.created = response.data.created_at
		  	})
		}
	}
</script>