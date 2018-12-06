<template>
	<v-footer dark	height="auto"  color="blue darken-4">
		<v-layout justify-center row	wrap>
			<v-btn flat	color="white" v-for="link in links"	:key="link.title" :href="link.href"><v-icon>{{link.icon}}</v-icon>&nbsp;	{{ $vuetify.breakpoint.xsOnly?'':$vuetify.t(link.title+'.name') }}	</v-btn>
			<v-flex	orange	py-1 text-xs-center	xs12 white--text>
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