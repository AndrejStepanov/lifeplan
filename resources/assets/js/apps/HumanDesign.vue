<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.humanDesign.name')" :panelLeft="{show:true}">
		
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
    import axios from 'axios'

	export default {
		data: () => ({

		}),
		mixins: [
			XApp,
		],
		methods: {
            saveAnsw(res){
                if (res!=""){
                    axios.post('setTestRate', {todo:res}).then(response => {
                    }).catch(e => {
                        console.log(e)
                    })
				}
			}
		},
		created: function (){
			let vm=this
		},
	}
</script>
<style>
</style>