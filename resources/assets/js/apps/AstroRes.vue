<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.astroRes.name')" :panelLeft="{show:true}">
<v-card>
      <v-container	fluid	grid-list-lg >
        <v-layout row wrap>

			<c-loading v-if="dataLoading" />

			<v-flex v-else-if="noDataForUser" xs12>
				<v-card color="red darken-2" class="white--text">
					<v-layout>
						<v-flex xs12>
							<v-card-title primary-title>
								<div>
									<div class="headline"> {{$vuetify.t('$vuetify.texts.astroRes.noInitDataTitle')}}  </div>
									<div>{{$vuetify.t('$vuetify.texts.astroRes.noInitDataText')}} </div>
								</div>
							</v-card-title>
						</v-flex>
					</v-layout>
					<v-divider light/>
					<v-card-actions class="pa-3">	<v-btn  class="secondary"	href='\user'> 	<v-icon large>home</v-icon>	&nbsp;{{$vuetify.t('$vuetify.texts.main.links.mainPage.title')}}&nbsp; </v-btn>		</v-card-actions>
				</v-card>
			</v-flex>

			<template v-else>
				<v-flex v-for="res in data.data" :key="res.id" xs12 >
					<v-card :color="(res.rate>0?'green':'red')+' darken-2'" class="white--text">
						<template v-if="['xs','sm'].indexOf($vuetify.breakpoint.name)==-1">
							<v-layout>
								<v-flex xs4 class='text-xs-center'>
									<div class="headline">
										<template v-if="res.rate>0">+</template> {{res.rate}}&nbsp;{{res.name}}&nbsp; <v-icon large>{{astroIcins[res.rec_id-1]}}</v-icon>
									</div>
								</v-flex>
								<v-flex xs8>
									<v-card-title primary-title>
										<div>{{res.description}}</div>
									</v-card-title>
								</v-flex>
							</v-layout>
						</template>
						<template v-else>
							<v-layout>
								<v-flex  class='text-xs-center'>
									<div class="headline text-xs-center">
										<template v-if="res.rate>0">+</template> {{res.rate}}&nbsp;{{res.name}}&nbsp; <v-icon large>{{astroIcins[res.rec_id-1]}}</v-icon>
									</div>
								</v-flex>
							</v-layout>
							<v-layout>
								<v-flex >
									<v-card-title primary-title>
										<div>{{res.description}}</div>
									</v-card-title>
								</v-flex>
							</v-layout>
						</template>
						<v-divider light/>
						<v-card-actions class="pa-3">
							<div>	
								{{$vuetify.t('$vuetify.texts.astroRes.ruleOnProf')}}<br>
								<template v-for="profId in astro2ProfValues[res.rec_id]">
									<v-btn class="ma-1" color="accent" :href="'/profSpec/' +profId"  :key="profId" >{{prof.data[profId].text}} </v-btn>
								</template>
							</div>
						</v-card-actions>
					</v-card>
				</v-flex>
			</template>

        </v-layout>
      </v-container>
    </v-card>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import CLoading from '../components/c-loading'
	export default {
		data: () => ({
			data:{href:"/socet_command", event:"astro.res.list", data:[], loaded:false},
			astro2prof:{href:"/socet_command", event:"astro.astro2prof.list", data:[], loaded:false},
			prof:{href:"/socet_command", event:"profs.list.obj", data:{}, loaded:false},	
			astroIcins:['face','gavel','event_seat','translate','business_center','wb_sunny','speaker','color_lens'],		
		}),
		computed: {
			dataLoading(){return !( this.data.loaded && this.astro2prof.loaded && this.prof.loaded)},
			noDataForUser(){return this.data.data.lenght },
			astro2ProfValues(){
				let vm=this, res={}
				if(vm.dataLoading)
					return res
				vm.data.data.forEach(row=>{
					res[row.rec_id]=[]
				})
				vm.astro2prof.data.forEach(row=>{
					if(!nvl(res[row.astro_id]))
						return
					res[row.astro_id].push( row.prof_id )
				})
				return res
			},
		},
		components: {
			CLoading,
		},
		mixins: [
			XApp,XStore
		],
		methods: {
			getData(){
				let vm=this
				vm.getAstroInfo()
				vm.getAstro2ProfInfo()
				vm.getProfInfo()
			},
			getAstroInfo(){
				let vm=this
				sendRequest({href:vm.data.href, type:vm.data.event, handler:(response) => {
					vm.data.data= response.data
					vm.data.loaded=true
				}})
			},
			getAstro2ProfInfo(){
				let vm=this
				sendRequest({href:vm.astro2prof.href, type:vm.astro2prof.event, handler:(response) => {
					vm.astro2prof.data= response.data
					vm.astro2prof.loaded=true
				}})
			},
			getProfInfo(){
				let vm=this
				sendRequest({href:vm.prof.href, type:vm.prof.event, handler:(response) => {
					vm.prof = Object.assign({}, vm.prof, {data:response.data})
					vm.prof.loaded=true
				}})
			},
		},
		created: function (){
			let vm=this
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