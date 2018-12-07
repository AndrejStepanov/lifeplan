<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.search.name')" :panelLeft="{show:true}">
		<c-table tableTitle="$vuetify.texts.searchPage.mainTableTitle"  :headers="tabHeader" :items="tabValues" ref="table" :noRowNum="true" :hide-actions="false" :dataLoading="dataLoading" :fiterButtonhNeed="true" :manBody="true" >
			<tr  slot="items" slot-scope="props" >
				<td	v-for="header in tabHeads"	:key="header.code" 	v-if="header.visible"	:class="header.clsssCell"		>	{{props.item[header.code]}}			</td>
			</tr>	
		</c-table>
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
			dialogId:getNewId(),
			paramForm:'search',
			tabHeader:[
				{code:'ava',			text:'',					type:'img', 	 		},
				{code:'program',		text:'Программа',			type:'text', 	 		},
				{code:'totalBall',		text:'Проходной балл',		type:'numeric', 	 	},
				{code:'qtyBudgets',		text:'Бюджетных мест',		type:'numeric', 	 	},
				{code:'priceYear',		text:'Стоимость за год',	type:'numeric', 	 	},
				{code:'qtyYears',		text:'Срок обучения',		type:'numeric', 	 	},
				{code:'psyTest',		text:'Психотест',			type:'numeric', 	 	},
				{code:'astroTest',		text:'Астропрогноз',		type:'numeric', 	 	},
				{code:'totalTest',		text:'Совместимость',		type:'numeric', 	 	},
			],
			uni:{href:"/socet_command", event:"universitys.search.list", data:[], loaded:false},
			spec:{href:"/socet_command", event:"specialtys.search.list", data:[], loaded:false},
		}),
		computed: {
			dataLoading(){return !( this.uni.loaded)},
			inputs() {
				let vm=this
				let data= [	
					{id:1, form:'aboutMe', 		code:'firstName', 		name:'Имя', 						type:'INPUT', 		nullable:0, column_size:30, sort_seq:1, },
					{id:2, form:'aboutMe', 		code:'lastName', 		name:'Фамилия', 					type:'INPUT', 		nullable:0, column_size:30, sort_seq:2, },
					{id:3, form:'aboutMe', 		code:'residenceCity', 	name:'Проживаю в',	 				type:'LIST', 		nullable:0, column_size:30, sort_seq:3, },
					{id:4, form:'aboutMe', 		code:'birthDate', 		name:'Дата и время рождения', 		type:'DATETIME', 	nullable:0, column_size:30, sort_seq:4, },
					{id:5, form:'aboutMe', 		code:'birthCity', 		name:'Место рождения', 				type:'LIST', 		nullable:0, column_size:30, sort_seq:5, },
				]
				return data.filter(row =>  row.form == vm.paramForm ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
			tabValues(){return []},
		},
		components: {
			CInputCols,CTable,
		},
		mixins: [
			XApp,XStore
		],
		methods: {
			formSave(){
				let vm=this,tmp=[],tmp1={},todo={}
				if (!vm.$refs[vm.paramForm].validate())
					return;
				todo=vm.paramTodo(vm.paramForm)
				sendRequest({href:"/data_command", type:vm.saveFormType, data:{ todo, }, default: getErrDesc('requestFaild'), handler:()=>showMsg({...getMsgDesc('saveDoing')}),  })
			},
			getData(){
				let vm=this
				vm.getUniInfo()
				getSpecInfo()
			},
			getUniInfo(){
				let vm=this
				sendRequest({href:vm.uni.href, type:vm.uni.event, handler:(response) => {
					vm.uni.data= response.data
					vm.uni.loaded=true
				}})
			},
			getSpecInfo(){
				let vm=this
				sendRequest({href:vm.spec.href, type:vm.spec.event, handler:(response) => {
					vm.spec.data= response.data
					vm.spec.loaded=true
				}})
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
.fix-padding,
.fix-padding>div {padding: 0px 34px 0px 34px;}
.no-height {width:50px;}
.no-padding,
.no-padding>div {padding: 0px;}
</style>