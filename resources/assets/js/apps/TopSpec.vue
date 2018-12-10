<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.topProf.name')" :panelLeft="{show:true}">
		<v-card>
			<v-card-title>
				Специальности, которые Вам подходят:
				<v-spacer></v-spacer>
				<v-text-field
						v-model="search"
						append-icon="search"
						label="Поиск"
						single-line
						hide-details
				></v-text-field>
			</v-card-title>
			<v-data-table
					:headers="headers"
					:items="desserts"
					:search="search"
					:pagination.sync="confData"
					:loading="isLoadTable"
					:no-data-text="emptyTableText"
					item-key="specID"
			>
				<template slot="items" slot-scope="props">
					<tr @click="props.expanded = !props.expanded">
						<td>{{ props.item.specName }}</td>
						<td>{{ props.item.specGroup }}</td>
						<td class="text-xs-right">{{ props.item.rate }}</td>
						<td class="text-xs-right">{{ props.item.uniCnt }}</td>
						<td class="text-xs-right">{{ props.item.prCnt }}</td>
						<td class="text-xs-right">{{ props.item.proc }}</td>
						<td class="text-xs-center"><v-rating v-model="props.item.userRate"></v-rating></td>
					</tr>
				</template>
				<v-alert slot="no-results" :value="true" color="error" icon="warning">
					Your search for "{{ search }}" found no results.
				</v-alert>
				<template slot="expand" slot-scope="props">
					<v-card flat>
						<v-card-text>
							<span class="grey--text">{{ props.item.specDesc }}</span>
							</br><span class="grey--text"><i>Кем работать:</i></span></br>
							<span class="grey--text">{{ props.item.whoWork }}</span>
						</v-card-text>
					</v-card>
				</template>
				<template slot="progress">
					<v-progress-circular class="ma-4"
							:size="80"
							color="secondary"
							indeterminate
					></v-progress-circular>
				</template>

			</v-data-table>
		</v-card>
	</c-app>
</template>

<script>
    import axios from 'axios'
	import XApp from '../mixins/x-app'

	export default {
		data: () => ({
            search: '',
            emptyTableText:'Идёт загрузка данных ...',
            isLoadTable:true,
            confData: {
                page: 1,
				sortBy: 'proc',
				descending: true,
                rowsPerPage: 25
            },
            headers: [
                { text: 'Название специальности', align: 'left', sortable:false, value: 'specName' },
                { text: 'Категория', align: 'left', value: 'specGroup' },
                { text: 'Рейтинг', value: 'rate', align: 'right' },
                { text: 'ВУЗов', value: 'uniCnt', align: 'right' },
                { text: 'Программ', value: 'prCnt', align: 'right' },
                { text: 'Степень соответствия (%)', value: 'proc', align: 'right' },
                { text: 'Оценка пользователя', value: 'userRate', align: 'center' }
            ],
            desserts: []
		}),
		computed: {

		},
		mixins: [
			XApp
		],
		methods: {
            getData(){
                this.getSpecInfo()
            },
            getSpecInfo(){
                let vm=this;
                axios.get('getSpec').then(response => {
                    vm.desserts = response.data;
					vm.isLoadTable=false;
                    vm.emptyTableText="Отсутствуют данные";
                }).catch(e => {
                    console.log(e)
                })
            },
		},
		created: function (){
            this.getData()
		},
		mounted(){

    	},
	}
</script>
<style>
.fix-padding,
.fix-padding>div {padding: 0px 34px 0px 34px;}
.no-height {width:50px;}
.no-padding,
.no-padding>div {padding: 0px;}
div.v-content__wrap{margin:10px;}
</style>