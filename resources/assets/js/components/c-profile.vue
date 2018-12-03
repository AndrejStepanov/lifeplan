<template>
	<v-speed-dial  v-model="fab"  direction="bottom" :open-on-hover="hover" transition="scale-transition" >
		<v-btn slot="activator" class="accent"  hover v-model="fab" @click='login'>		&nbsp;{{profileUserName()==''?$vuetify.t('$vuetify.texts.simple.labels.auth'):profileUserName()}}&nbsp;	<v-icon>account_circle</v-icon>		</v-btn>	
		<v-btn v-if="profileUserName()!=''" small class="secondary"	href='\user'> 		&nbsp;{{$vuetify.t('$vuetify.texts.main.links.mainPage.title')}}&nbsp; 									<v-icon>contacts</v-icon>			</v-btn>
		<v-btn v-if="profileUserName()!=''" small class="secondary"	@click='logout'>	&nbsp;{{$vuetify.t('$vuetify.texts.simple.actions.logOut')}} &nbsp;										<v-icon>power_settings_new</v-icon>	</v-btn>
	</v-speed-dial>
</template>

<script>
//
	import XStore from '../mixins/x-store'
	export default {
		name:'c-profile',
		data: () => ({
			fab: false,
			hover: false,//открывать при наведении
			userTicket:'',
		}),		
		mixins: [
			XStore,
		],
		methods: {
			login(){
				let vm=this,
				 	_hrefBack=getLocationParam('auth_href_back')
				if(vm.profileUserName()!='')
					return
				_hrefBack=_hrefBack!=null?_hrefBack:window.location.origin+'\\user'
				window.location.href = "\\auth?auth_href_back="+_hrefBack
			},			
			logout () {
				sendRequest({href:'/logout', type:'logout', needSucess:'Y', hrefBack:'/', def: getErrDesc('noLogOut') } )
			},
			subscribeTicket(newTicket){
				let vm=this,
				 	_hrefBack=getLocationParam('auth_href_back')
				if(vm.userTicket!='' )
					window.echo.connector.channels['channel.AuthChange.'+vm.userTicket].unsubscribe()
				vm.userTicket=newTicket
				window.echo.channel('channel.AuthChange.'+vm.userTicket )
				.listen('.session.open', (e) => {
					vm.profileLog({userName:e.data.name,userId:e.data.userId, isRoot:e.data.isRoot, avatar:e.data.avatar})
					vm.subscribeTicket(e.data.newTicket)
					showMsg({...getMsgDesc('loginSucsess'),   msgParams:[e.data.name],}	)
					if(_hrefBack!=null)
						window.location.href = decodeURIComponent(_hrefBack)
				})
				.listen('.session.close', (e) => {
					if(vm.profileUserId()!='' && vm.profileUserId()==e.data.userId)
						vm.profileLogout()
					vm.subscribeTicket(e.data.newTicket)
					showMsg(getMsgDesc('logoutSucsess') )
				});
			},
		},
	 	mounted: function (){	
			let vm=this
			let userInfo = window.userInfo||{}
			if(nvl(userInfo.name)!='')
				vm.profileLog({userName:userInfo.name, userId:userInfo.userId, isRoot:userInfo.isRoot, avatar:userInfo.avatar})
			else
				vm.profileLogout()
			vm.subscribeTicket(window.laravel.ticket)
		},
	}
</script>