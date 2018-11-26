<template>
    <v-app dark >
		<c-head ref="head" :curentSystem='curentSystem' :showLeft="panelLeftDrawer" :showRight="panelRightDrawer"/>
		<v-content ref='content' :style="getContentStyles">
			<v-navigation-drawer v-if="needMainPanels && panelLeftDrawer" fixed v-model="panelLeftShowen" left :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelLeftClass" :width="panelLeftWidth">
				<slot name="panelLeft"/>
			</v-navigation-drawer>
			<v-navigation-drawer v-if="needMainPanels && panelRightDrawer" fixed v-model="panelRightShowen" right :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelRightClass" :width="panelRightWidth">
				<slot name="panelRight"/>
			</v-navigation-drawer>
			<slot v-if="!needMainPanels" />
			<c-layouts v-else :config="panelsConfig">
				<div  v-for="(slotName, index) in slotNames" :key="index"   :slot="slotName" >
					<slot :name="slotName" />
				</div>				
			</c-layouts>
		</v-content>		
		<c-footer :fixed="oneScreen"/>
		<c-msg-list />
		<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
    </v-app>
</template>

<script>
			
	import XStore from '../mixins/x-store'
	import XDialog from '../mixins/x-dialog'
    import CHead from '../components/c-head'
	import CFooter from '../components/c-footer'
	import CMsgList from '../components/c-msg-list'
    export default {
		name:'c-app',
		data:() => ({
			dialogsConfig: {
				auth:{id: getNewId(),  module:'m-input-fields',  name:"auth-login", title:"$vuetify.texts.modals.auth.title", 	params:{ socetHref:"/login", socetEvent:"auth.login"}, }
			},
			panelLeftShowen: false,
			panelRightShowen: false,
			slotNamesCalc:[],
		}),
		props:{
			curentSystem: {type:  String, required: true},
			authHrefBack: {type:  String},			
			panelLeftDrawer: {type:  Boolean,  default: false},
			panelLeftShow: {type:  Boolean,  default: false},
			panelLeftClass: {type:  String,  default: ''},
			panelLeftWidth: {type:  Number | String,  default: 300},
			panelRightDrawer: {type:  Boolean,  default: false},
			panelRightShow: {type:  Boolean,  default: false},
			panelRightClass: {type:  String,  default: ''},
			panelRightWidth: {type:  Number | String,  default: 300},
			formsProps:{type:Array,default:()=>{ return []} },
			needMainPanels: {type:  Boolean,  default: false},
			oneScreen:{type:  Boolean,  default: true},
			panelsResizable: {type:  Boolean,  default: true},
			panelsConfig: {type:  Array,  default: () => {return [ //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;  Последнему слою выставлять размер бессмысленно
				{  name: 'first',   width:'100%',	height:'100%',  type: 'vertical' , data:[
					{  name: 'second',   width:'50%',	height:'100%',  type: 'horizontal'},
					{  name: 'third',   width:'100%',	height:'100%',  type: 'horizontal'},
				]}, 
			]}},
		},
		computed:{
			slotNames(){
				let vm=this
				vm.calcSlotNames(vm.panelsConfig)
				return vm.slotNamesCalc
			},
			getContentStyles(){
				let vm=this
				if(vm.oneScreen)//финт ушами, что бы основная область не прокручивалась
					return {height: '100px' ,}
				else	
					return {  }
			},
		},
        components: {
			CHead, CFooter,CMsgList, Multipane, MultipaneResizer,
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
			CLayouts: (resolve) => require(['./c-layouts.vue'], resolve),
		},
		mixins: [
			XStore,XDialog,
		],
		methods: {
			calcSlotNames(arr){
				let vm=this
				arr.forEach(row => {
					vm.slotNamesCalc.push(row.name)
					if(row.data!=undefined && row.data.length )
						vm.calcSlotNames(row.data)
				});
			},
		},
		created: function (){
			let vm=this
			vm.panelLeftShowen=vm.panelLeftShow
			vm.panelRightShowen=vm.panelRightShow
			vm.$root.$on('headDrawerLeftClick', (obj)=>{
				vm.panelLeftShowen=!vm.panelLeftShowen
			}); 
			vm.$root.$on('headDrawerRightClick', (obj)=>{
				vm.panelRightShowen=!vm.panelRightShowen
			});
			vm.$root.$on('openAuthDialog', (obj)=>{
				vm.dialogSelect(vm.dialogsConfig.auth.id)
				vm.dialogShowChange({name:"auth-login", isShow:true})
			});	
			
		},
    }
</script>

<style lang="scss">
</style>