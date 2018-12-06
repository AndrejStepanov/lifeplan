<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.catalogPage.HeadTxt')" :panelLeft="{show:true}">
		<div class="back" style="background:url('storage/bg.jpg')"></div>
		<v-container grid-list-md>
			<v-layout row wrap>
				<v-flex  xs12 md6 lg4>
					<v-card class="pa-2">
						<v-img class="white--text" height="200px" src="https://legkopolezno.ru/wp-content/uploads/2016/09/it-professii_1.jpg"
							   gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.8)">
							<v-container fill-height fluid pa-2>
								<v-layout fill-height>
									<v-flex xs12 align-start flexbox>
										<span class="headline white--text">asdas asd asda dasd</span>
									</v-flex>
								</v-layout>
							</v-container>
						</v-img>
						<v-card-title primary-title>Whitsunday Island, Whitsunday Islands Whitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday Islands</v-card-title>
						<v-card-actions>
							<v-btn flat color="orange">Подробнее</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>


			</v-layout>
		</v-container>
	</c-app>
</template>

<script>
    import axios from 'axios'
	import XApp from '../mixins/x-app'
	export default {
		data: () => ({
            profs:[]
		}),
		mixins: [
			XApp,
		],
		methods: {
		    getData(){
                this.getProfInfo();
       		},
            getProfInfo(){
                let vm=this;
                axios.get(`api/getProfs`)
                    .then(response => {
                        vm.profs = response.data
                    }).catch(e => {
                    	console.log(e);
                    });
            },
		},
		created: function (){
			this.getData();
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
footer, div.flex{
	z-index: 1;
}
</style>