<template>
	<c-app :curentSystem="$vuetify.t(getHeader)" :panelLeft="{show:true}">
		<v-container grid-list-md>
			<v-layout row wrap>
				<v-flex v-for="(prof,key) in profs" xs12 md6 lg4 :key="key">
					<v-card class="pa-2 ma-2">
						<v-img class="white--text" height="160px" src="http://bezformata.ru/content/Images/000/005/855/image5855940.jpg"
							   gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.8)">
							<v-container fill-height fluid pa-2>
								<v-layout fill-height>
									<v-flex xs12 align-start flexbox>
										<span class="headline white--text">{{prof.text}}</span>
									</v-flex>
								</v-layout>
							</v-container>
						</v-img>
						<v-card-title primary-title>
							<div>
								<span class="grey--text">{{prof.profGroup}}</span></br>
								<span>{{prof.about}}</span>
							</div>
						</v-card-title>
						<v-card-actions>
							<v-btn flat color="accent" :href="'/profSpec/' + prof.value" >{{$vuetify.t('$vuetify.texts.catalogPage.specBuProf') }}</v-btn>
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
		computed: {
			getHeader(){return top.location.pathname=="/topProf"?'$vuetify.texts.main.links.demandProf.name':'$vuetify.texts.main.links.catalogProf.name' },
		},
		mixins: [
			XApp,
		],
		methods: {
		    getData(){
                this.getProfInfo()
       		},
            getProfInfo(){
                let vm=this
                let href=top.location.pathname=="/topProf"?'getProfs2':'getProfs'
                axios.get(href).then(response => {
					vm.profs = response.data
				}).catch(e => {
					console.log(e)
				})
            },
		},
		created: function (){
			this.getData()
		},
	}
</script>
<style>
</style>