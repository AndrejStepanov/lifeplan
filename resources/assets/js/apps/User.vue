<template>
	<c-app  >
		
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	export default {
		data: () => ({
		}),
		mixins: [
			XApp,XStore
		],
		methods: {
		},
		created: function (){
			let vm=this
		},
	}
</script>
<style>
</style>