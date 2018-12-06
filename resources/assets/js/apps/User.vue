<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.mainPage.name')" :panelLeft="{show:true}">
		<div class="back" style="background:url('storage/bg.jpg')"></div>
		<v-layout align-center justify-center >
			<v-flex xs12 ma-2>
				<v-card class="elevation-12" >
					<v-toolbar :height="80" >
						<v-bottom-nav  :active.sync="tabSelected" :color="colorForm" :value="true" absolute shift :height="80" >
							<v-btn  large v-for="link in links" :key="link.id" class='primary-color'  >	<span>{{$vuetify.t(link.title )}}</span>			<v-icon large >{{link.icon}}</v-icon>		</v-btn>
						</v-bottom-nav>
					</v-toolbar>
				</v-card>
				<v-card class="elevation-12 ">
					<v-card-text >
						<c-loading v-if="dataLoading" />
						<v-form v-else v-model="inputsValid" :ref="paramForm"  > 
							<c-input-cols v-if="['aboutMe', 'howEge', 'wantStady'].indexOf(paramForm)!=-1" :inputs="inputs" :dialogId="dialogId"  :paramsForm="paramForm" :maxInputCountInCol="getMaxColumn"  />
							<c-input-cols v-if="['aboutMe'].indexOf(paramForm)!=-1"  :inputs="inputsBio" :dialogId="dialogId"  :paramsForm="paramForm" :maxInputCountInCol="1"  />
							<div  v-if="['whereStudy'].indexOf(paramForm)!=-1">
								<v-layout row v-for="sch in user.data.schls" :key="sch.id"  >
									<v-container :class="getClassForRow">
										<c-input-cols :inputs="getInputsForSch(sch)" :dialogId="dialogId"  :paramsForm="paramForm+'_'+sch.id" :maxInputCountInCol="1"  />
									</v-container>
									<v-container :class="getClassForRow+ ($vuetify.breakpoint.name=='xs'?' no-height':'')" style="flex: 0;">
										<v-btn fab dark small class='primary' @click="delSch(sch.id)">
											<v-icon dark>clear</v-icon>
										</v-btn>
									</v-container>
								</v-layout>
								<v-layout row  >
									<v-container :class="getClassForRow">
										<c-input-cols :inputs="getInputsForSch({})" :dialogId="dialogId"  :paramsForm="paramForm+'_'" :maxInputCountInCol="1"  />
									</v-container>
									<v-container :class="getClassForRow+ ($vuetify.breakpoint.name=='xs'?' no-height':'')" style="flex: 0;">
										<v-btn fab dark small class='accent' @click="addSch(sch.id)">
											<v-icon dark>add</v-icon>
										</v-btn>
									</v-container>
								</v-layout>
							</div>
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
			maxColumn:[2, 1, 6, 3],
			saveFormTypes:['user.info.save', 'user.sch.save', 'user.ege.save', 'user.wants.save', ],
			user:{href:"/socet_command", event:"user.info.by.id", data:{}, loaded:false},
			city:{href:"/socet_command", event:"city.list", data:[], loaded:false},
			sch:{href:"/socet_command", event:"school.list", data:[], loaded:false},
			pr:{href:"/socet_command", event:"predmets.list", data:[], loaded:false},
		}),
		computed: {
			dataLoading(){return !(this.user.loaded && this.city.loaded && this.sch.loaded && this.pr.loaded)},
			colorForm () {return this.colors[this.tabSelected]},
			paramForm () {return this.dataLoading?'':this.forms[this.tabSelected]},
			saveFormType () {return this.saveFormTypes[this.tabSelected]},
			getMaxColumn(){return  this.$vuetify.breakpoint.name=='xs'?100: this.maxColumn[this.tabSelected]},
			getClassForRow(){return  this.$vuetify.breakpoint.name=='xs'? 'no-padding': 'fix-padding'},
			inputs() {
				let vm=this
				let data= [	
					{id:1, form:'aboutMe', 	code:'firstName', 		name:'Имя', 			value:nvl(vm.user.data.firstName,null),			type:'INPUT', 	nullable:0, column_size:30, sort_seq:1, mask_fin:'^[A-Za-zА-Яа-я]+$', error:'$vuetify.texts.errors.onlyLetters.text' },
					{id:2, form:'aboutMe', 	code:'lastName', 		name:'Фамилия', 		value:nvl(vm.user.data.lastName,null),			type:'INPUT', 	nullable:0, column_size:30, sort_seq:2, mask_fin:'^[A-Za-zА-Яа-я]+$', error:'$vuetify.texts.errors.onlyLetters.text' },
					{id:3, form:'aboutMe', 	code:'birthDate', 		name:'Дата рождения', 	value:nvl(vm.user.data.birthDate,null),			type:'DATE', 	nullable:0, column_size:30, sort_seq:3, max:(new Date().toISOString().substr(0, 10)),   min:"1950-01-01", isBirthDate:true,},
					{id:4, form:'aboutMe', 	code:'residenceCity', 	name:'Проживаю в',	 	value_arr:nvl(vm.user.data.residenceCity,null)==null?null:[vm.user.data.residenceCity],				type:'LIST', 	nullable:0, column_size:30, sort_seq:4, table_values:vm.city.data, },
				]
				if(vm.paramForm=='howEge')
					vm.pr.data.forEach((pr,idx)=>{
						data.push(
							{id:data.length+1 , form:'howEge', 	code:'pr'+pr.value, 		name:pr.text.charAt(0).toUpperCase() + pr.text.slice(1), 		value:nvl(nvlo(vm.user.data.eges.find((ege)=>{return ege.prId==pr.value }) ).val,''),			type:'NUMBER', 	nullable:1, column_size:30, sort_seq:idx, min:0, max:100 },
						)
					})
				return data.filter(row =>  row.form == vm.paramForm ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
			inputsBio() {
				let vm=this
				let data= [
					{id:1, form:'aboutMe', 	code:'bio', 			name:'Обо мне', 		value:nvl(vm.user.data.bio,null),				type:'TEXT', 	nullable:1, column_size:2000, sort_seq:1, },
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
				let vm=this,tmp=[],todo={}
				if (!vm.$refs[vm.paramForm].validate())
					return;
				if(['aboutMe', 'howEge', 'wantStady'].indexOf(vm.paramForm)!=-1)
					todo=vm.paramTodo(vm.paramForm)
				else
					todo=vm.user.data.schls.map((row)=>{
						return vm.paramTodo(vm.paramForm+'_'+row.id)
					})
				if([ 'howEge'].indexOf(vm.paramForm)!=-1){
					for (name in todo)
						if(todo[name].value>0)
							tmp.push(todo[name])
					todo=tmp.map( row=> {return {prId: row.code.slice(2), val: row.value}})
				}
				if(vm.paramForm=='aboutMe'){
					vm.user.data.firstName = todo.firstName.value
					vm.user.data.lastName = todo.lastName.value
					vm.user.data.birthDate = todo.birthDate.value
					vm.user.data.residenceCity = todo.residenceCity.value
				}
				sendRequest({href:"/data_command", type:vm.saveFormType, data:{ todo, }, default: getErrDesc('requestFaild'), handler:()=>showMsg({...getMsgDesc('saveDoing')}),  })
			},
			getData(){
				let vm=this
				vm.getUserInfo() 
				vm.getCityInfo()
				vm.getSchInfo()
				vm.getPrInfo()
			},
			getUserInfo(){
				let vm=this
				sendRequest({href:vm.user.href, type:vm.user.event, data:{userId: vm.profileUserId()}, handler:(response) => {
					vm.user = Object.assign({}, vm.user, {data:response.data})
					vm.user.loaded=true
					vm.user.data.schls.forEach((row)=>{
						vm.paramInit( {num: 'whereStudy_'+row.id })
					})
				}})
			},
			getCityInfo(){
				let vm=this
				sendRequest({href:vm.city.href, type:vm.city.event, handler:(response) => {
					vm.city.data= response.data
					vm.city.loaded=true
				}})
			},
			getSchInfo(){
				let vm=this
				sendRequest({href:vm.sch.href, type:vm.sch.event, handler:(response) => {
					vm.sch.data= response.data
					vm.sch.loaded=true
				}})
			},
			getPrInfo(){
				let vm=this
				sendRequest({href:vm.pr.href, type:vm.pr.event, handler:(response) => {
					vm.pr.data= response.data
					vm.pr.loaded=true
				}})
			},
			getInputsForSch(sch){
				let vm=this
				return [	
					{id:1, code:'sch', 			name:'Школа', 				value:nvl(sch.schId),										type:'LIST', 								nullable:nvl(sch.id)==0, editable:nvl(sch.id)!=0, column_size:30, sort_seq:1, 
						table_values:vm.sch.data.map((sch)=>{return {
							value:sch.value, text: nvl(nvlo(vm.city.data.find((city)=>{return city.value==sch.cityId }) ).text,'')+' - '+sch.text
						}}),  },
					{id:2, code:'dates', 		name:'Период обучения', 	value_arr:sch=={}?undefined:[[sch.dateSt,sch.dateFn]],			type:nvl(sch.id)==0?'INPUT':'DATE_RANGE', 	nullable:nvl(sch.id)==0, editable:nvl(sch.id)!=0, column_size:30, sort_seq:2, },		
				]
			},
			addSch(){
				let vm=this
				vm.user.data.schls.push({id:vm.user.data.schls.length*-1-1, schId:null, dateSt:null, dateFn:null})
				vm.paramInit( {num: vm.paramForm+'_'+vm.user.data.schls.length*-1 })
			},
			delSch(id){
				let vm=this, tmp = 0 
				vm.user.data.schls.forEach((row,i)=>{if(row.id = id) tmp=i})
				vm.user.data.schls.splice(tmp,1)
			},
		},
		created: function (){
			let vm=this
			vm.paramInit( {num: 'aboutMe' })
			vm.paramInit( {num: 'howEge' })
			vm.paramInit( {num: 'whereStudy_' })
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
	div.back{
		position:fixed;
		z-index: 0;
		left:0;
		right: 0;
		top:0;
		bottom: 0;
	}
	footer, div.layout{
		z-index: 1;
	}
.fix-padding,
.fix-padding>div {padding: 0px 34px 0px 34px;}
.no-height {width:50px;}
.no-padding,
.no-padding>div {padding: 0px;}
</style>