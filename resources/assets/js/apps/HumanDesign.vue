<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.humanDesign.name')" :panelLeft="{show:true}">
		<v-timeline align-top dense dark class="ma-3">
			<v-timeline-item color="red" fill-dot>
				<span	class="headline font-weight-bold white--text"
						slot="opposite"
				>Ваш Тип</span>
				<v-card
						color="red"
						dark
				>
					<v-card-title class="title">Манифестирующий генератор</v-card-title>
					<v-card-text class="white text--primary">
						Тип является одним из ключевых понятий дизайна человека. Каждый генетический тип имеет свою уникальную стратегию в жизни.
					</v-card-text>
				</v-card>
			</v-timeline-item>

			<v-timeline-item color="green" fill-dot>
				<span	class="headline font-weight-bold white--text"
						slot="opposite"
				>Ваш Профиль</span>
				<v-card
						color="green"
						dark
				>
					<v-card-title class="title">1/3 Исследователь - Мученик</v-card-title>
					<v-card-text class="white text--primary">
						Погружённый в себя персонаж. Учится методом проб и ошибок. Всё узнаёт на собственном опыте. И таким образом находит прочное основание в жизни. Вы один из тех, кто пришел в этот мир учиться. Все ваши открытия — следствия экспериментов, которые полны взлетов и падений. Но такова ваша стезя — искать, исследовать новое, для вас неизведанное — будь то люди, ощущения или проекты. Правда, про вас верно и то, что вы любитель наступать на одни и те же грабли. Вы из тех, кто устремляется в новое с головой, а уж потом только думает: «А оно мне надо было?!». Несмотря на легкость в общении и установлении контактов, вы не любитель каких бы то ни было обязательств. Правда, контакты с вами устанавливаются сложно, ведь прозондировать почву в начале общения для вас крайне важно. Вы боитесь всего, что вас привлекает, ведь оно может оказаться ненадежным, в любой момент может обвалиться. Это толкает вас исследовать новые пути, пробуя и ошибаясь.
					</v-card-text>
				</v-card>
			</v-timeline-item>

			<v-timeline-item color="orange" fill-dot>
				<span	class="headline font-weight-bold white--text"
						 slot="opposite"
				>Персональная карта</span>
				<v-card
						color="orange"
						dark
				>
					<v-card-title class="title">Ваш Бодиграф</v-card-title>
					<v-card-text class="white text--primary">
						<v-img
								src="https://jovianarchive.com/content/charts/626777388000000000_.png"
								lazy-src=""
								max-width="800"
								class="white"
						></v-img>
					</v-card-text>
				</v-card>
			</v-timeline-item>

		</v-timeline>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
    import axios from 'axios'

	export default {
		data: () => ({

		}),
		mixins: [
			XApp,
		],
		methods: {
            saveAnsw(res){
                if (res!=""){
                    axios.post('setTestRate', {todo:res}).then(response => {
                    }).catch(e => {
                        console.log(e)
                    })
				}
			}
		},
		created: function (){
			let vm=this
		},
	}
</script>
<style>
</style>