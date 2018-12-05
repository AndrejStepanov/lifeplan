<template>
	<v-footer dark	height="auto"  class='secondary'>
		<v-layout	justify-center	row	wrap>
			<v-btn dark	v-for="link in links"	:key="link.title"	color='accent' :href="link.href"><v-icon  dark>{{link.icon}}</v-icon>&nbsp;	{{ $vuetify.breakpoint.xsOnly?'':$vuetify.t(link.title+'.name') }}	</v-btn>
			<v-flex	 secondary	py-1	text-xs-center		xs12		>	
				{{$vuetify.t('$vuetify.texts.footerPage.footer') }}		
			</v-flex>
		</v-layout>
	</v-footer>
</template>

<script>

export default {
	name:'c-footer',
	data: () => ({
		links: [
				{ title: '$vuetify.texts.main.links.demandProf', 		icon: 'trending_up', 		href:'\\user' },
				{ title: '$vuetify.texts.main.links.topEdu', 			icon: 'account_balance', 	href:'\\user'  },
                { title: '$vuetify.texts.main.links.topProf', 			icon: 'favorite', 			href:'\\user'  },
                { title: '$vuetify.texts.main.links.catalogProf', 		icon: 'view_module', 		href:'\\user'  },
		],
	}),
	props:{		
		fixed: {type:  Boolean,  default: false},
	},
}
</script>