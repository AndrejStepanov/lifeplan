<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.serch.name')" :panelLeft="{show:true}">
		
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import CInputCols from '../components/c-input-cols'
	import CLoading from '../components/c-loading'
	export default {
		data: () => ({
			inputsValid:false,
			dialogId:getNewId(),
			paramForm:'search',
		}),
		computed: {
			dataLoading(){return false},
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
		},
		components: {
			CInputCols,CLoading,
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
		},
		created: function (){
			let vm=this
			vm.paramInit( {num: vm.paramForm })
			vm.$root.$on('dialog'+vm.paramForm+'Send', ()=>{
				vm.formSave()
			});
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