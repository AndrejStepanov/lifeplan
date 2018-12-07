<template>
	<c-app  :needBgIm="false">
		<section>
			<v-parallax src="storage/bg.jpg" height="720">
				<v-layout	column	align-center	justify-center	class="white--text" >
					<img class="bg_2" src="storage/bg2.jpg" alt="lifeplan" height="603">
					<div class="bg_div">
						<img class="logo" src="storage/logo2.png" alt="lifeplan">
						<span  class="hidden-xs-only">{{$vuetify.t('$vuetify.texts.mainPage.logoTxt1') }}<br>{{$vuetify.t('$vuetify.texts.mainPage.logoTxt2') }} </span>
					</div>
				</v-layout>
			</v-parallax>
		</section>

		<section>
			<v-layout column wrap class="my-4" align-center >
				<v-flex xs12 sm4 class="my-2">
					<div class="text-xs-center">
						<h2 class="headline"> {{$vuetify.t('$vuetify.texts.mainPage.headerTxt') }}</h2>
						<span class="subheading">{{$vuetify.t('$vuetify.texts.mainPage.headerTxt2') }}</span>
					</div>
				</v-flex>
				<v-flex xs12>
					<v-container grid-list-xl>
						<v-layout row wrap align-center>
							<v-flex xs12 md4>
								<v-card class="elevation-0 transparent">
									<v-card-text class="text-xs-center">
										<v-icon x-large class="accent-color">{{$vuetify.t('$vuetify.texts.mainPage.dopI1') }}</v-icon>
									</v-card-text>
									<v-card-title primary-title class="layout justify-center">
										<div class="headline text-xs-center">{{$vuetify.t('$vuetify.texts.mainPage.dopH1') }}</div>
									</v-card-title>
									<v-card-text>{{$vuetify.t('$vuetify.texts.mainPage.dopT1') }}</v-card-text>
								</v-card>
							</v-flex>
							<v-flex xs12 md4>
								<v-card class="elevation-0 transparent">
									<v-card-text class="text-xs-center">
										<v-icon x-large class="accent-color">{{$vuetify.t('$vuetify.texts.mainPage.dopI2') }}</v-icon>
									</v-card-text>
									<v-card-title primary-title class="layout justify-center">
										<div class="headline">{{$vuetify.t('$vuetify.texts.mainPage.dopH2') }}</div>
									</v-card-title>
									<v-card-text>{{$vuetify.t('$vuetify.texts.mainPage.dopT2') }}</v-card-text>
								</v-card>
							</v-flex>
							<v-flex xs12 md4>
								<v-card class="elevation-0 transparent">
									<v-card-text class="text-xs-center">
										<v-icon x-large class="accent-color">{{$vuetify.t('$vuetify.texts.mainPage.dopI3') }}</v-icon>
									</v-card-text>
									<v-card-title primary-title class="layout justify-center">
										<div class="headline text-xs-center">{{$vuetify.t('$vuetify.texts.mainPage.dopH3') }}</div>
									</v-card-title>
									<v-card-text>{{$vuetify.t('$vuetify.texts.mainPage.dopT3') }}</v-card-text>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
		</section>

		<section>
			<v-parallax src="storage/bg.jpg" height="380">
				<v-layout column align-center justify-center>
					<div class="headline white--text mb-3 text-xs-center">{{$vuetify.t('$vuetify.texts.mainPage.header2Txt') }}</div>
					<em>{{$vuetify.t('$vuetify.texts.mainPage.header2Txt2') }} </em>
					<v-btn	class="mt-5"	dark	large	color="accent" >{{$vuetify.t('$vuetify.texts.mainPage.buttonTxt2') }} <v-icon right>search</v-icon> </v-btn>
				</v-layout>
			</v-parallax>
		</section>

		<section>
			<v-container grid-list-xl>
				<v-layout row wrap justify-center class="my-1">
					<v-flex xs12 sm4>
						<v-card class="elevation-0 transparent">
							<v-card-title primary-title class="layout justify-center">
								<div class="headline">{{$vuetify.t('$vuetify.texts.mainPage.aboutProjectH') }}</div>
							</v-card-title>
							<v-card-text>
								{{$vuetify.t('$vuetify.texts.mainPage.aboutProject') }}
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs12 sm4 offset-sm1>
						<v-card class="elevation-0 transparent">
							<v-card-title primary-title class="layout justify-center">
								<div class="headline"> {{$vuetify.t('$vuetify.texts.mainPage.contacts') }} </div>
							</v-card-title>
							<v-card-text>{{$vuetify.t('$vuetify.texts.mainPage.contacts2') }}  </v-card-text>
							<v-list class="transparent">
								<v-list-tile>
									<v-list-tile-action>
										<v-icon class="primary-color text--lighten-2">phone</v-icon>
									</v-list-tile-action>
									<v-list-tile-content>
										<v-list-tile-title>{{$vuetify.t('$vuetify.texts.mainPage.phone') }}</v-list-tile-title>
									</v-list-tile-content>
								</v-list-tile>
								<v-list-tile>
									<v-list-tile-action>
										<v-icon class="primary-color text--lighten-2">email</v-icon>
									</v-list-tile-action>
									<v-list-tile-content>
										<v-list-tile-title>{{$vuetify.t('$vuetify.texts.mainPage.email') }}</v-list-tile-title>
									</v-list-tile-content>
								</v-list-tile>
							</v-list>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</section>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	export default {
		data: () => ({
		}),
		mixins: [
			XApp,
		],
		methods: {
		},
		created: function (){
			let vm=this
		},
	}
</script>
<style>
    img.bg_2{	position:absolute;	z-index:0;    }
    div.bg_div{	background:#FFFFFF;	z-index:1;	width:90%;	margin-top: -10px;	min-height:120px;	padding-top:25px;	padding-left:10%;	font-size:22px;	color:#ff6600;	text-align:left;    }
    img.logo{	float:left;	margin-right:20px;	height:70px;    }
	div.v-parallax__image-container, div.v-parallax__content{padding:0px;    }
	.v-content {padding: 0px !important;}
</style>