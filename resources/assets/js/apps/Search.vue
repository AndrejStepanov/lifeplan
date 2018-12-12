<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.search.name')" :panelLeft="{show:true}">
		<c-table tableTitle="$vuetify.texts.searchPage.mainTableTitle"  :headers="tabHeader" :items="tabValues" ref="table" :noRowNum="true" :hide-actions="false" :dataLoading="dataLoading" :fiterButtonhNeed="true" :manBody="true" @fiterButtonClick="showFilter = true"  :rowsPerPageItems="[100, 50, 25, 2]" >
			<tr  slot="items" slot-scope="props" >
				<template v-if="['xs','sm'].indexOf($vuetify.breakpoint.name)==-1">
					<td class=" pt-4 text-nobr" style="align-items: center;"	>	
											<v-img :src="props.item.uniImg==''||props.item.uniImg==null?'https://cdn.vuetifyjs.com/images/parallax/material.jpg':props.item.uniImg" height="125" width="125" :aspect-ratio="16/9" /><br>
											<v-rating	:value="props.item.rate/200" readonly	background-color="lighten-3"	small color="red"	/>															</td>
					<td					>	
											<b>{{props.item.programmName}}</b><br>
											&nbsp;&nbsp;&nbsp;&nbsp;Учебная степень: <u><i>{{props.item.specGroup}}</i></u>,
											лет обучения: <u><i>{{props.item.qtyYears}}</i></u>, 
											стоимость обучения за год:<u><i>{{props.item.priceYear}}</i></u>,
											бюджетных мест:<u><i>{{props.item.qtyBudgets||'нет'}}</i></u>, <br>
											&nbsp;&nbsp;&nbsp;&nbsp;проходной бал:<u><i>{{props.item.totalBall}} ( {{listPrdemts(props.item)}} )</i></u>, <br>
											&nbsp;&nbsp;&nbsp;&nbsp;{{props.item.faculty}} - {{props.item.specName}}<br>
											&nbsp;&nbsp;&nbsp;&nbsp;<a :href="props.item.webSite" :title="props.item.uniName">{{props.item.uniName}}</a>														</td>
					<td					>	{{props.item.psyTest}}																																				</td>
					<td					>	{{props.item.astroTest}}																																			</td>
					<td					>	{{props.item.totalTest}}																																			</td>
				</template>
				<template v-else>
					<td class=" pt-4" style="align-items: center;"	>	
											<a :href="props.item.webSite" :title="props.item.uniName">
											<v-img :src="props.item.uniImg==''||props.item.uniImg==null?'https://cdn.vuetifyjs.com/images/parallax/material.jpg':props.item.uniImg" height="125" width="125" :aspect-ratio="16/9" />
											</a><br>
											<v-rating	:value="props.item.rate/200" readonly	background-color="lighten-3"	small color="red"	/><br><br>															
											<b>{{props.item.programmName}}</b><br>
											Учебная степень: <u><i>{{props.item.specGroup}}</i></u>,
											лет обучения: <u><i>{{props.item.qtyYears}}</i></u>, 
											стоимость обучения за год:<u><i>{{props.item.priceYear}}</i></u>,
											бюджетных мест:<u><i>{{props.item.qtyBudgets||'нет'}}</i></u>, <br>
											проходной бал:<u><i>{{props.item.totalBall}} ( {{listPrdemts(props.item)}} )</i></u>, <br>
											{{props.item.faculty}} - {{props.item.specName}}<br>
											Психотест: <u><i>{{props.item.psyTest}}</i></u>,
											Астропрогноз: <u><i>{{props.item.astroTest}}</i></u>,
											Совместимость: <u><i>{{props.item.totalTest}}</i></u>																												</td>
				</template>
			</tr>	
		</c-table>
		<v-dialog v-model="showFilter" fullscreen hide-overlay transition="dialog-bottom-transition" v-if="formInited">
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="showFilter = false">
						<v-icon>close</v-icon>
					</v-btn>
					<v-toolbar-title>{{$vuetify.t('$vuetify.texts.simple.labels.filter')}}</v-toolbar-title>
					<v-spacer/>
					<v-toolbar-items>
						<v-btn dark flat @click="formSave">{{$vuetify.t('$vuetify.texts.simple.actions.save')}}</v-btn>
					</v-toolbar-items>
				</v-toolbar>
				<v-form v-model="inputsValid" :ref="paramForm"  > 
					<v-list subheader class="height-auto">
						<v-subheader>{{$vuetify.t('$vuetify.texts.searchPage.education')}}</v-subheader>
						<v-list-tile avatar>
							<v-list-tile-content  >
								<c-input-cols :inputs="inputs('edu')" :dialogId="dialogId"  :paramsForm="paramForm"  :fixColCnt="getFilColCnt" :needCheckBox="true" />
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
					<v-divider/>
					<v-list  subheader class="height-auto">
						<v-subheader>{{$vuetify.t('$vuetify.texts.searchPage.locate')}}</v-subheader>
						<v-list-tile avatar>
							<v-list-tile-content >
								<c-input-cols :inputs="inputs('locate')" :dialogId="dialogId"  :paramsForm="paramForm" :fixColCnt="getFilColCnt" :needCheckBox="true" />
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
					<v-divider/>
					<v-list  subheader class="height-auto">
						<v-subheader>{{$vuetify.t('$vuetify.texts.searchPage.vuz')}}</v-subheader>
						<v-list-tile avatar>
							<v-list-tile-content>
								<c-input-cols :inputs="inputs('vuz')" :dialogId="dialogId"  :paramsForm="paramForm" :fixColCnt="getFilColCnt" :needCheckBox="true" />
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
				</v-form>
			</v-card>
		</v-dialog>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import CInputCols from '../components/c-input-cols'
	import CTable from '../components/c-table'
	export default {
		data: () => ({
			inputsValid:false,
			showFilter:false,
			dialogId:getNewId(),
			paramForm:'search',
			formInited:false,
			dataSearchLoaded:false,
			tabData:[],
			uni:{href:"/socet_command",  event:"search.universitys.list", data:{}, loaded:false},
			spec:{href:"/socet_command", event:"search.specialtys.list", data:{}, loaded:false},
			prog:{href:"/socet_command", event:"search.programs.list", data:{}, loaded:false},
			pred:{href:"/socet_command", event:"search.predmets.list", data:{}, loaded:false},
			city:{href:"/socet_command", event:"city.list", data:[], loaded:false},
		}),
		computed: {
			getFilColCnt(){
				let vm=this
				return ['xs'].indexOf(vm.$vuetify.breakpoint.name)!=-1 ? 1 :
					['sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1 ? 2 : 3
			},
			dataLoading(){return !( this.dataSearchLoaded && this.uni.loaded && this.spec.loaded && this.prog.loaded && this.city.loaded && this.pred.loaded )},
			dicLoading(){return !( this.uni.loaded && this.spec.loaded && this.prog.loaded && this.city.loaded && this.pred.loaded )},
			tabValues(){
				let vm=this
				if(vm.dataLoading)
					return[]
				return vm.tabData.map(res=>{
					let prog = vm.prog.data[res.rec_id]
					return	{...res, ...prog, ...vm.uni.data[prog.uni_id], ...vm.spec.data[prog.spec_id]	}
				})
			},
			tabHeader(){
				let vm = this
				if(['xs','sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1)
					return [{code:'ava',			text:'',					type:'img', 	 		},]
				else
					return [
						{code:'ava',			text:'',					type:'img', 	 		},
						{code:'program',		text:'Программа',			type:'text', 	 		},
						{code:'psyTest',		text:'Психотест',			type:'numeric', 	 	},
						{code:'astroTest',		text:'Астропрогноз',		type:'numeric', 	 	},
						{code:'totalTest',		text:'Совместимость',		type:'numeric', 	 	},
					]
			},
			specDic(){return createDictionary(this.spec.data,'spec_id', 'specName', true  )},
		},
		components: {
			CInputCols,CTable,
		},
		mixins: [
			XApp,XStore
		],
		methods: {
			listPrdemts(item){
				let vm=this
				return list([nvlo(vm.pred.data[item.req1]).text,nvlo(vm.pred.data[item.req2]).text,nvlo(vm.pred.data[item.req3]).text,nvlo(vm.pred.data[item.req4]).text,nvlo(vm.pred.data[item.req5]).text ])
			},
			formSave({noCheck}){
				let vm=this,tmp=[],tmp1={},todo={}
				noCheck=noCheck||false
				if (!noCheck && !vm.$refs[vm.paramForm].validate())
					return;
				vm.showFilter = false;
				vm.dataSearchLoaded=false;
				todo=vm.paramTodoChecked(vm.paramForm)
				sendRequest({href:"/socet_command", type:'search.results', data:{ todo, }, default: getErrDesc('requestFaild'), handler:(response) => {
					vm.tabData=response.data
					vm.dataSearchLoaded=true;
					vm.formInited=true
				}})
			},
			getData(){
				let vm=this
				vm.getUniInfo()
				vm.getSpecInfo()
				vm.getProgInfo()
				vm.getPredInfo()
				vm.getCityInfo()
				
				vm.formSave({noCheck:true})
			},
			getUniInfo(){
				let vm=this
				sendRequest({href:vm.uni.href, type:vm.uni.event, handler:(response) => {
					vm.uni = Object.assign({}, vm.uni, {data:response.data})
					vm.uni.loaded=true
				}})
			},
			getSpecInfo(){
				let vm=this
				sendRequest({href:vm.spec.href, type:vm.spec.event, handler:(response) => {
					vm.spec = Object.assign({}, vm.spec, {data:response.data})
					vm.spec.loaded=true
				}})
			},
			getProgInfo(){
				let vm=this
				sendRequest({href:vm.prog.href, type:vm.prog.event, handler:(response) => {
					vm.prog = Object.assign({}, vm.prog, {data:response.data})
					vm.prog.loaded=true
				}})
			},
			getPredInfo(){
				let vm=this
				sendRequest({href:vm.pred.href, type:vm.pred.event, handler:(response) => {
					vm.pred = Object.assign({}, vm.pred, {data:response.data})
					vm.pred.loaded=true
				}})
			},
			getCityInfo(){
				let vm=this
				sendRequest({href:vm.city.href, type:vm.city.event, handler:(response) => {
					vm.city.data= response.data
					vm.city.loaded=true
				}})
			},
			inputs(paramForm) {
				let vm=this
				if(vm.dicLoading)
					return[]
				let data= [	
					{id:1, form:'edu', 		code:'edSpecialty', 	name:'Специальности', 							type:'LIST', 		nullable:1, sort_seq:1, table_values:vm.specDic, multy:true},
					{id:2, form:'edu', 		code:'edForm', 			name:'Форма обучения', 							type:'LIST', 		nullable:1, sort_seq:2, table_values:[{value:'Очная'},{value:'Заочная'},{value:'Очно-заочная'},{value:'Дистанционная'},], multy:true},
					{id:8, form:'edu', 		code:'eduIsBudget', 	name:'Наличие бюджетных мест', 					type:'LIST', 		nullable:1, sort_seq:8, table_values:[{value:'1',text:'Да'},{value:'0',text:'Нет'},]},
					{id:3, form:'edu', 		code:'edCost', 			name:'Стоимость обучения, тыс. руб', 			type:'RANGE', 		nullable:1, sort_seq:3, min:50, max:250, step:10 },
					{id:4, form:'edu', 		code:'edSpecalisation', name:'Специализация', 							type:'LIST', 		nullable:1, sort_seq:4, table_values:[{value:'Бакалавриат'},{value:'Магистратура'},{value:'Специалитет'},], multy:true},
					//{id:5, form:'edu', 		code:'edTender', 		name:'Конкурс, чел. место',						type:'RANGE', 		nullable:1, sort_seq:5, min:1, max:100, step:5 },
					{id:6, form:'locate', 	code:'locCity', 		name:'Город', 									type:'LIST', 		nullable:1, sort_seq:6, table_values:vm.city.data,},
					{id:7, form:'locate', 	code:'locDist', 		name:'Радиус поиска, км', 						type:'SLIDER',  	nullable:1, sort_seq:7, min:0, max:500, step:50,},
					{id:9, form:'vuz', 		code:'vuzStudentQty', 	name:'Количество студентов в ВУЗе, тыс. чел.', 	type:'RANGE', 		nullable:1, sort_seq:9, min:10, max:70, step:5 },
					{id:10, form:'vuz', 	code:'vuzIsFilial', 	name:'Филиал', 									type:'LIST', 		nullable:1, sort_seq:10, table_values:[{value:'1',text:'Да'},{value:'0',text:'Нет'},]},
					{id:11, form:'vuz', 	code:'vuzAccrTime', 	name:'Срок аккредитации, лет', 					type:'RANGE', 		nullable:1, sort_seq:11, min:1, max:10, step:1 },
					{id:12, form:'vuz', 	code:'vuzIsGos', 		name:'Государственный', 						type:'LIST', 		nullable:1, sort_seq:12, table_values:[{value:'1',text:'Да'},{value:'0',text:'Нет'},]},
					{id:13, form:'vuz', 	code:'vuzMyl', 			name:'Военная кафедра', 						type:'LIST', 		nullable:1, sort_seq:13, table_values:[{value:'1',text:'Да'},{value:'0',text:'Нет'},]},
					{id:14, form:'vuz', 	code:'vuzHotel',		name:'Общежитие', 								type:'LIST', 		nullable:1, sort_seq:14, table_values:[{value:'1',text:'Да'},{value:'0',text:'Нет'},]},
					{id:16, form:'vuz', 	code:'vusPlace', 		name:'Место ВУЗа в рейтинге, топ ',				type:'RANGE', 		nullable:1, sort_seq:16, min:1, max:1000, step:100 },
					{id:17, form:'vuz', 	code:'vusRating', 		name:'Рейтинг ВУЗа по отзывам, баллы',			type:'RANGE', 		nullable:1, sort_seq:17, min:0, max:100, step:5 },
				]
				return data.filter(row =>  row.form == paramForm ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
		},
		created: function (){
			let vm=this
			vm.paramInit( {num: vm.paramForm })
			vm.$root.$on('dialog'+vm.paramForm+'Send', ()=>{
				vm.formSave()
			});
			setTimeout(vm.getData,100);//что бы параметры успели подгрузится	
		},
		mounted(){
			let vm=this
    	},
	}
</script>
<style>
.height-auto,
.height-auto>div>div.v-list__tile {height:auto;}
div.v-content__wrap{margin:10px;}
</style>