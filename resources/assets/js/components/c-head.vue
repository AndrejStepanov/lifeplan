<template>
	<v-toolbar class='z-index--4 transparent elevation-0 mt-2 no-clcik'    fixed       app   >
		<v-toolbar-side-icon @click="toolbarClicked('Left')"  v-if="showLeft" color='accent' class='get-clcik'  />
		<v-toolbar-title v-if="$vuetify.breakpoint.name!='xs'" class="white--text">{{curentSystem}}</v-toolbar-title>
		<v-spacer/>
		<v-icon v-if="profileUserName()!='' && neeedSearch" color='accent' class='get-clcik' @click="searchClick">search</v-icon>
		 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<c-profile class='get-clcik'/>
		<v-toolbar-side-icon @click="toolbarClicked('Right')"  v-if="showRight" class='get-clcik'/>
	</v-toolbar>
</template>

<script>
	import CProfile from './c-profile'
	import XStore from '../mixins/x-store'
	export default {
		name:'c-head',

		data: () => ({            
		}),
		props: {
			curentSystem:{type: String,  default: '' },
			showLeft:{type: Boolean,  default: false },
			showRight:{type: Boolean,  default: false },
		},
		computed: {
			neeedSearch(){return top.location.pathname!='/search'}
		},
		components: {
			CProfile,
		},
		mixins: [
			XStore,
		],
		methods:{
			toolbarClicked(side){
				this.$root.$emit('headDrawer'+side+'Click')
			},
			searchClick(){
				let vm=this
				window.location.href = "\\search"
			},
		}
	}
</script>
<style>
	.z-index--4		{ z-index: 4; }
	.no-clcik       {pointer-events: none;}
	.get-clcik      {pointer-events: auto;}
</style>