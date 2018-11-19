<template>
    <v-app dark>
		<c-head ref="head" :curentSystem='curentSystem' :showLeft="panelLeftDrawer" :showRight="panelRightDrawer"/>
		<v-content ref='content' >
			<v-navigation-drawer v-if="panelLeftDrawer" fixed v-model="panelLeftShowen" left :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelLeftClass" :width="panelLeftWidth">
				<slot name="panelLeft"/>
			</v-navigation-drawer>
			<v-navigation-drawer v-if="panelRightDrawer" fixed v-model="panelRightShowen" right :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelRightClass" :width="panelRightWidth">
				<slot name="panelRight"/>
			</v-navigation-drawer>
			<slot />
		</v-content>		
		<c-footer />
		<c-msg-list />
		
		<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
    </v-app>
</template>

<script>
/*			<Layout	:edit="panelsEditable"	:resize="panelsResizable"	:splits="panelsSplitable">
				<Pane :title="getFormsTitles[0]" :style="getFormsStyles[0]">
					
				</Pane>
				<Pane :title="getFormsTitles[1]" :style="getFormsStyles[1]">
					<slot name='secondPanel'/>
				</Pane>
				<Pane :title="getFormsTitles[2]" :style="getFormsStyles[2]">
					<slot name='thirdPanel'/>
				</Pane>
				<Pane :title="getFormsTitles[3]" :style="getFormsStyles[3]">
					<slot name='fourthPanel'/>
				</Pane>
				<Pane :title="getFormsTitles[4]" :style="getFormsStyles[4]">
					<slot name='fifthPanel'/>
				</Pane>
			</Layout>*/
			
	import XStore from '../mixins/x-store'
	import XDialog from '../mixins/x-dialog'
    import CHead from '../components/c-head'
	import CFooter from '../components/c-footer'
    import CMsgList from '../components/c-msg-list'
	import {Layout,Pane} from 'vue-split-layout'
    export default {
		data:() => ({
			dialogsConfig: {
				auth:{id: getNewId(),  module:'m-input-fields',  name:"auth-login", title:"$vuetify.texts.modals.auth.title", 	params:{ socetHref:"/login", socetEvent:"auth.login"}, }
			},
			panelLeftShowen: false,
			panelRightShowen: false,
			isMounted:false,
			tmpRes:[{display:'none',},{display:'none',},{display:'none',},{display:'none',},{display:'none',},{display:'none',},{display:'none',},{display:'none',},{display:'none',},],
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
			panelsEditable: {type:  Boolean,  default: false},
			panelsResizable: {type:  Boolean,  default: false},
			panelsSplitable: {type:  Boolean,  default: false},
		},
		computed:{
			getFormsTitles(){
				let vm=this,
					res=this.tmpRes.slice()
				return res.map( (row,i)=>{
					if(vm.formsProps.length>=i+1)
						return vm.formsProps[i]
					else 
						return ''
				})
			},
			getFormsStyles(){
				let vm=this,
					res=this.tmpRes.slice()
				//if(!vm.isMounted)
					return res
				/*return res.map( (row,i)=>{
					if(i==0)
						return row
					return 
				})

					overflowY='hidden'
				if(vm.type=='DATETIME_RANGE' && vm.isNarrowDialog || height+48>vm.$vuetify.breakpoint.height *0.9 || vm.type=='TEXT' || vm.isNeedTab){
					height = vm.getDialogMainDivHeight
					overflowY=vm.type=='TEXT'|| vm.isNeedTab?'auto':'scroll'
				}
				return {
					height: height + 'px' ,
					overflowY: overflowY,
				}*/
			},
		},
        components: {
			CHead, CFooter,CMsgList,Layout,Pane,
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
		},
		mixins: [
			XStore,XDialog,
		],
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
		mounted(){
			let vm=this
        	vm.isMounted = true;
    	},
    }
</script>