<template>
    <v-app light >
		<c-head ref="head" :curentSystem='curentSystem' :showLeft="panelLeftDrawer" :showRight="panelRightDrawer"/>
		<v-navigation-drawer dark v-if="panelLeftDrawer" fixed app v-model="panelLeftShowen" left   :class="panelLeft.class" :width="panelLeftWidth">
			<slot name="panelLeft">
				<v-list dense>
					<v-list-tile avatar >
						<v-list-tile-avatar>
							<img :src="currentAvatar">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>{{profileUserName()==''?$vuetify.t('$vuetify.texts.simple.labels.guest'):profileUserName()}}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile class="pt-2" v-for="item in authItems" :key="item.title" :title="$vuetify.t(item.link+'.title')"  :href="item.href" >
						<v-list-tile-action>
							<v-icon large>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{$vuetify.t(item.link+'.name') }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile class="pt-2" @click="authChange" >
						<v-list-tile-action>
							<v-icon large>{{ authAva }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{profileUserName()==''?$vuetify.t('$vuetify.texts.simple.actions.auth'):$vuetify.t('$vuetify.texts.simple.actions.authEnd')}}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
				<v-divider style='padding-bottom: 10px;'/>
				<v-list dense>
					<v-divider/>
					<v-list-tile class="pt-2" v-for="item in items" :key="item.title" :title="$vuetify.t(item.link+'.title')"  :href="item.href" >
						<v-list-tile-action>
							<v-icon large>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{$vuetify.t(item.link+'.name') }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</slot>
		</v-navigation-drawer>
		<v-navigation-drawer dark v-if="panelRightDrawer" fixed app v-model="panelRightShowen" right   :class="panelRight.class" :width="panelRightWidth">
			<slot name="panelRight"/>
		</v-navigation-drawer>
		<v-content ref='content' :style="getContentStyles">
			<slot v-if="!mainPanelReq" />
			<c-layouts v-else :config="mainPanelConfig">
				<div  v-for="(slotName, index) in slotNames" :key="index"   :slot="slotName" >
					<slot :name="slotName" />
				</div>
			</c-layouts>
		</v-content>
		<c-footer v-if="needFooter"/>
		<c-msg-list />
		<slot name="dialogs" />
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
            items: [
                { link: '$vuetify.texts.main.links.headPage', 			icon: 'home', 				href:'\\' },
				{ link: '$vuetify.texts.main.links.demandProf', 		icon: 'trending_up', 		href:'\\top_prof' },
				{ link: '$vuetify.texts.main.links.topEdu', 			icon: 'account_balance', 	href:'\\top_edu'  },
                { link: '$vuetify.texts.main.links.topProf', 			icon: 'favorite', 			href:'\\top_spec'  },
                { link: '$vuetify.texts.main.links.catalogProf', 		icon: 'view_module', 		href:'\\catalog_prof'  },
				{ link: '$vuetify.texts.main.links.serch', 				icon: 'search', 			href:'\\search'  }
            ], 
		}),
		props:{
			curentSystem: {type:  String, default: ''},	
			needFooter: {type:  Boolean, default: true},	
			panelLeft:{type: Object,  default: () => {return{ drawer:true, show:false, class:'', width:270, filter:false,} }}	,
			panelRight:{type: Object,  default: () => {return{ drawer:false, show:false, class:'', width:300, filter:false,} }}	,
			mainPanelConfig: {type: Object,  default: () => {return null/*{ //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;  Последнему слою выставлять размер бессмысленно
				name: 'first',   width:'100%',	height:'100%',  layout: 'vertical', resizable:false , data:[
					{  name: 'second',   width:'50%',	height:'100%',  layout: 'horizontal'},
					{  name: 'third',   width:'100%',	height:'100%',  layout: 'horizontal'},
				]}*/}
			}, 
		},
		computed:{
			slotNames(){
				let vm=this
				if(vm.mainPanelConfig==null)
					return[]
				vm.calcSlotNames(vm.mainPanelConfig)
				return vm.slotNamesCalc
			},
			currentAvatar(){
				let vm=this
				return nvl(vm.profileAvatar(),"https://randomuser.me/api/portraits/men/85.jpg")
			},
			getContentStyles(){
				let vm=this//финт ушами, что бы основная область не прокручивалась
				return vm.oneScreen? {height: '100px' ,}:{  }
			},
			panelLeftDrawer(){ return this.panelLeft.drawer || this.panelLeft.show || this.panelLeft.filter	},
			panelRightDrawer(){ return this.panelRight.drawer || this.panelRight.show || this.panelLeft.filter	},
			panelLeftWidth(){ return this.panelLeft.filter? 358 : nvl(this.panelLeft.width,270)  },
			panelRightWidth(){ return this.panelRight.filter? 358 : nvl(this.panelRight.width,300)  },
			mainPanelReq(){ return this.mainPanelConfig!=null},
			authAva () {return this.profileUserName()==''?'account_circle':'launch'},
			authItems(){
					return this.profileUserName()==''?null: [
					{ link: '$vuetify.texts.main.links.mainPage', 			icon: 'home', 				href:'\\user' },
					{ link: '$vuetify.texts.main.links.psyhTests', 			icon: 'library_books', 		href:'\\test'  },
				]
			},
		},
        components: {
			CHead, CFooter,CMsgList, 
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
			CLayouts: (resolve) => require(['./c-layouts.vue'], resolve),
		},
		mixins: [
			XStore,XDialog,
		],
		methods: {
			authChange(){
				let vm=this
				if (vm.profileUserName()=='')
					vm.$root.$emit('systemLogin')
				else
					vm.$root.$emit('systemLogout')
			},
			calcSlotNames(obj){
				let vm=this
				vm.slotNamesCalc.push(obj.name)
				if(obj.data!=undefined && obj.data.length )
					obj.data.forEach(row => {
						vm.calcSlotNames(row)
					});
			},
		},
		created: function (){
			let vm=this
			vm.panelLeftShowen=nvl(vm.panelLeft.show,false)
			vm.panelRightShowen=nvl(vm.panelRight.show,false)
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