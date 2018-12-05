<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.modals.auth.title')">
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
						<v-toolbar :height="80" >
							<v-bottom-nav :active.sync="bottomNav" :color="colorForm"	:value="true" absolute shift :height="80" >
								<v-btn dark large >	<span>{{$vuetify.t('$vuetify.texts.simple.labels.auth')}}</span>			<v-icon large >account_circle</v-icon>		</v-btn>
								<v-divider vertical/>
								<v-btn dark large >	<span>{{$vuetify.t('$vuetify.texts.simple.labels.registration')}}</span>	<v-icon large > person_add</v-icon>			</v-btn>
							</v-bottom-nav>
						</v-toolbar>
						<v-card-text>
							<v-form v-model="inputsValid" :ref="paramForm" > 
								<c-input-cols  :inputs="inputs" :dialogId="dialogId"  :paramForm="paramForm" :maxInputCountInCol="10" />
							</v-form>
							<v-divider style='padding-bottom: 10px;'/>
							Войти через социальные сети:
							<v-layout row wrap justify-center class="my-1">
								<div @click.capture.stop>	<share-vkontakte has_icon button_design="gradient" 		:href="'/login/vk?hrefBack='+hrefBack"/> </div>
								<div @click.capture.stop>	<share-facebook has_icon button_design="gradient" 		:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>	
								<div @click.capture.stop>	<share-linked-in has_icon button_design="gradient" 		:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>
								<div @click.capture.stop>	<share-moi-mir has_icon button_design="gradient" 		:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>								
								<div @click.capture.stop>	<share-odnoklassniki has_icon button_design="gradient"	:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>								
								<div @click.capture.stop>	<share-tumblr has_icon button_design="gradient" 		:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>																
								<div @click.capture.stop>	<share-twitter has_icon button_design="gradient" 		:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>																
								<div @click.capture.stop>	<share-viber has_icon button_design="gradient" 			:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>																
								<div @click.capture.stop>	<share-whats-app has_icon button_design="gradient" 		:href="'/login/vk?hrefBack='+hrefBack" class='disable-social'/> </div>																
							</v-layout>
						</v-card-text>
						<v-layout row justify-center :color="colorForm" >
							<v-flex xs12>
								<v-toolbar slot='header' dense  :color="colorForm" >		
									<v-spacer/>
									<v-btn :class="classForm" @click="dialogSave"  :disabled="!inputsValid"><v-icon>input</v-icon>&nbsp;{{$vuetify.t(acceptFormTitle)}}</v-btn>
								</v-toolbar>
							</v-flex>
						</v-layout>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import CInputCols from '../components/c-input-cols'
	import ShareFacebook from "vue-goodshare/src/providers/Facebook.vue"
	import ShareVkontakte from "vue-goodshare/src/providers/vkontakte.vue"
	import ShareLinkedIn from "vue-goodshare/src/providers/linkedin.vue"
	import ShareMoiMir from "vue-goodshare/src/providers/MoiMir.vue"
	import ShareOdnoklassniki from "vue-goodshare/src/providers/Odnoklassniki.vue"
	import ShareTumblr from "vue-goodshare/src/providers/Tumblr.vue"
	import ShareTwitter from "vue-goodshare/src/providers/Twitter.vue"
	import ShareViber from "vue-goodshare/src/providers/Viber.vue"
	import ShareWhatsApp from "vue-goodshare/src/providers/WhatsApp.vue"
    export default {
        data: () => ({
			 bottomNav: 0,
			 inputsValid: false,
			 dialogId:getNewId(),
		}),
		computed: {
			colorForm () {return !this.bottomNav? 'primary': 'accent' },
			classForm () {return [ !this.bottomNav? 'accent': 'primary']},
			paramForm () {return !this.bottomNav? 'auth-login': 'auth-registration'},		
			acceptFormTitle () {return !this.bottomNav? '$vuetify.texts.simple.actions.auth': '$vuetify.texts.simple.actions.registration'},
			hrefBack(){return nvl(getLocationParam('auth_href_back','')) },
			inputs() {
				let vm=this
				let data= [		
					{id:1, form:'auth-login', 			code:'_login', 		name:'Электронный адресс', 		placeholder:'Электронный адресс', 				type:'INPUT', 		nullable:0, column_size:30, sort_seq:1, mask_fin:'^.+@.+$', error:'$vuetify.texts.errors.withMailFormat.text' },
					{id:2, form:'auth-login', 			code:'_password',	name:'Пароль', 					placeholder:'Пароль пользователя', 				type:'PASSWORD', 	nullable:0, column_size:30, sort_seq:2,  },
					{id:3, form:'auth-login', 			code:'remember',	name:'Запомнить мои данные', 	placeholder:'Запомнить данные пользователя', 	type:'BOOL',		nullable:1, column_size:30, sort_seq:3,  },	
					
					{id:21, form:'auth-registration', 	code:'login', 		value:'root@root.ru',	name:'Электронный адресс', 		placeholder:'Электронный адресс пользователя', 	type:'INPUT', 		nullable:0, column_size:30, sort_seq:1, mask_fin:'^.+@.+\\..+$', error:'$vuetify.texts.errors.withMailFormat.text'  },
					{id:22, form:'auth-registration', 	code:'firstname', 	value:'root',			name:'Имя', 					placeholder:'Имя пользователя', 				type:'INPUT', 		nullable:0, column_size:30, sort_seq:1,  },
					{id:23, form:'auth-registration', 	code:'lastname', 	value:'root',			name:'Фамилия', 				placeholder:'Фамилия пользователя', 			type:'INPUT', 		nullable:0, column_size:30, sort_seq:1,  },
					{id:25, form:'auth-registration', 	code:'password',	value:'!rootpwd',		name:'Пароль пользователя', 	placeholder:'Пароль пользователя', 				type:'PASSWORD', 	nullable:0, column_size:30, sort_seq:2,  mask_fin:'^......+$', error:'$vuetify.texts.errors.withPasswordLen.text', 
						after_edit_script:""+
							"if(nvlo(nvlo(vm.$parent.$refs.password_confirmation)[0]).value!=undefined)if( vm.$parent.$refs.password_confirmation[0].value!=vm.value){"+
								"vm.$parent.$refs.password_confirmation[0].inputErrorState=true;vm.$parent.$refs.password_confirmation[0].inputErrorText='"+vm.$vuetify.t('$vuetify.texts.errors.withPasswordConf.text') +"';"+
							"} else{ "+
								"vm.$parent.$refs.password_confirmation[0].inputErrorState=false;vm.$parent.$refs.password_confirmation[0].inputErrorText='';"+
							"}", }, 
					{id:26, form:'auth-registration', 	code:'password_confirmation', value:'!rootpwd',	 name:'Повторите пароль', 		placeholder:'Повторите пароль пользователя', 	type:'PASSWORD', 	nullable:0, column_size:30, sort_seq:2,  
						after_edit_script:""+
							"if(nvlo(nvlo(vm.$parent.$refs.password)[0]).value!=undefined )if(  vm.$parent.$refs.password[0].value!=vm.value){"+
								"vm.inputErrorState=true;vm.inputErrorText='"+vm.$vuetify.t('$vuetify.texts.errors.withPasswordConf.text') +"';"+
							"} else{ "+
								"vm.inputErrorState=false;vm.inputErrorText='';"+
							"}",},
					{id:27, form:'auth-registration', 	code:'accept',	value:'true',		name:'Я подтверждаю согласие на обработку персональных данных', 				placeholder:'Запомнить данные пользователя', 	type:'BOOL',		nullable:0, column_size:30, sort_seq:3,  },
				]
				return data.filter(row =>  row.form == vm.paramForm ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
		},
		components: {
			CInputCols,ShareFacebook,ShareVkontakte,ShareLinkedIn,ShareMoiMir,ShareOdnoklassniki,ShareTumblr,ShareTwitter,ShareViber,ShareWhatsApp,
		},
		mixins: [
			XApp,XStore,
		],
		methods: {
			dialogSave(){
				let vm=this,tmp={},todo={}
				if (!vm.$refs[vm.paramForm].validate())
					return;
				todo={...vm.paramTodo(vm.paramForm)}
				for (name in todo)
					if(!this.bottomNav && ['_login','_password'].indexOf(name)!=-1 )
						tmp[name.slice(1)]= todo[name].value
					else 
						tmp[name]= todo[name].value
				todo=tmp
				if(!vm.bottomNav)
					sendRequest({href:"/login", type:"auth.login", data:todo, default: getErrDesc('withLogIn') })
				else
					sendRequest({href:"/register", type:"register", needSucess:"Y", data:todo, default: getErrDesc('withRegistration') })
			},
		},
		created: function (){
			let vm=this
			vm.paramInit( {num: 'auth-login' })
			vm.paramInit( {num: 'auth-registration' })
			vm.$root.$on('dialog'+vm.paramForm+'Send', ()=>{
				vm.dialogSave();
			});
		},
		mounted(){
			let vm=this
        	vm.isMounted = true;
    	},
    }
</script>

<style>
	.disable-social {background-image: linear-gradient(to bottom, #bdbdbd, #bdbdbd) !important;}
</style>
