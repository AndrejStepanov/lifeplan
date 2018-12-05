<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.mainPage.name')" :panelLeft="{show:true}">
		<v-layout align-center justify-center >
			<v-flex xs12  >
				<v-card class="elevation-12">
					<v-toolbar :height="80" >
						<v-bottom-nav  :active.sync="tabSelected" :color="colorForm"	:value="true" absolute shift :height="80" >
							<v-btn  large v-for="link in links" :key="link.id" class='primary-color'  >	<span>{{$vuetify.t(link.title )}}</span>			<v-icon large >{{link.icon}}</v-icon>		</v-btn>
						</v-bottom-nav>
					</v-toolbar>
				</v-card>
				<v-card class="elevation-12 ">
					<v-card-text >
						<c-loading v-if="dataLoading" />
						<v-form v-else v-model="inputsValid" :ref="paramForm"  > 
							<c-input-cols  :inputs="inputs" :dialogId="dialogId"  :paramsForm="paramForm" :maxInputCountInCol="2"  />
							<c-input-cols  :inputs="inputsBio" :dialogId="dialogId"  :paramsForm="paramForm" :maxInputCountInCol="1"  />
						</v-form>						
					</v-card-text>
				</v-card>
				<v-toolbar slot='header' dense  >		
					<v-spacer/>
					<v-btn class='accent' @click="formSave"  :disabled="!inputsValid"><v-icon>done</v-icon>&nbsp;{{$vuetify.t('$vuetify.texts.simple.actions.save')}}</v-btn>
				</v-toolbar>
			</v-flex>
		</v-layout>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import CInputCols from '../components/c-input-cols'
	import CLoading from '../components/c-loading'
	export default {
		data: () => ({
			 tabSelected: 0,
			 inputsValid:false,
			 dialogId:getNewId(),
			 links:[
				 {id:1, title:'$vuetify.texts.userPage.links.aboutMe', 			icon:'info', 			},
				 {id:2, title:'$vuetify.texts.userPage.links.whereStudy', 		icon:'language', 		},
				 {id:3, title:'$vuetify.texts.userPage.links.howEge', 			icon:'offline_pin', 	},
				 {id:4, title:'$vuetify.texts.userPage.links.wantStady', 		icon:'loyalty', 		},
			 ],
			 colors:['white', 'white', 'white', 'white'],
			 forms:['aboutMe', 'whereStudy', 'howEge', 'wantStady'],
			 socetUserInfo:{href:"/socet_command", event:"user.info.by.id",},
			 socetCity:{href:"/socet_command", event:"city.list", },
			 userDataLoaded:false,
			 cityDataLoaded:false,
			 userInfo:{},
			 cityData:[],
		}),
		computed: {
			dataLoading(){return !(this.userDataLoaded && this.cityDataLoaded)},
			colorForm () {return this.colors[this.tabSelected]},
			paramForm () {return this.dataLoading?'':this.forms[this.tabSelected]},
			inputs() {
				let vm=this
				let data= [	
					{id:1, form:'aboutMe', 	code:'firstName', 		name:'Имя', 			value:nvl(vm.userInfo.firstName,null),			type:'INPUT', 	nullable:0, column_size:30, sort_seq:1, mask_fin:'^[A-Za-zА-Яа-я]+$', error:'$vuetify.texts.errors.onlyLetters.text' },
					{id:2, form:'aboutMe', 	code:'lastName', 		name:'Фамилия', 		value:nvl(vm.userInfo.lastName,null),			type:'INPUT', 	nullable:0, column_size:30, sort_seq:2, mask_fin:'^[A-Za-zА-Яа-я]+$', error:'$vuetify.texts.errors.onlyLetters.text' },
					{id:3, form:'aboutMe', 	code:'birthDate', 		name:'Дата рождения', 	value:nvl(vm.userInfo.birthDate,null),			type:'DATE', 	nullable:0, column_size:30, sort_seq:3, max:(new Date().toISOString().substr(0, 10)),   min:"1950-01-01", isBirthDate:true,},
					{id:4, form:'aboutMe', 	code:'residenceCity', 	name:'Проживаю в',	 	value_arr:nvl(vm.userInfo.residenceCity,null)==null?null:[vm.userInfo.residenceCity],				type:'LIST', 	nullable:0, column_size:30, sort_seq:4, table_values:vm.cityData, },
				]
				return data.filter(row =>  row.form == vm.paramForm ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
			inputsBio() {
				let vm=this
				let data= [
					{id:1, form:'aboutMe', 	code:'bio', 			name:'Обо мне', 		value:nvl(vm.userInfo.bio,null),				type:'TEXT', 	nullable:1, column_size:2000, sort_seq:1, },
				]
				return data.filter(row =>  row.form == vm.paramForm ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
		},
		components: {
			CInputCols,CLoading,
		},
		mixins: [
			XApp,XStore
		],
		methods: {
			formSave(){
				let vm=this,tmp={},todo={}
				if (!vm.$refs[vm.paramForm].validate())
					return;
				sendRequest({href:"/data_command", type:"user.info.save", data:{ todo:vm.paramTodo(vm.paramForm), }, default: getErrDesc('requestFaild'), handler:()=>showMsg({...getMsgDesc('saveDoing')}),  })
			},
			getData(){
				let vm=this
				vm.getUserInfo() 
				vm.getCityInfo()
			},
			getUserInfo(){
				let vm=this
				sendRequest({href:vm.socetUserInfo.href, type:vm.socetUserInfo.event, data:{userId: vm.profileUserId()}, handler:(response) => {
					Object.assign(vm.userInfo, response.data[0])
					vm.userDataLoaded=true
				}})
			},
			getCityInfo(){
				let vm=this
				sendRequest({href:vm.socetCity.href, type:vm.socetCity.event, handler:(response) => {
					vm.cityData= response.data
					vm.cityDataLoaded=true
				}})
			},
		},
		created: function (){
			let vm=this
			vm.paramInit( {num: 'aboutMe' })
			vm.paramInit( {num: 'whereStudy' })
			vm.paramInit( {num: 'howEge' })
			vm.paramInit( {num: 'wantStady' })
			vm.$root.$on('dialog'+vm.paramsForm+'Send', ()=>{
				vm.formSave()
			});
			setTimeout(vm.getData,100);//что бы параметры успели подгрузится			
		},
		mounted(){
			let vm=this
        	vm.isMounted = true;
    	},
	}
</script>
<style>
</style>