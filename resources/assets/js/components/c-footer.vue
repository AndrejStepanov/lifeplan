<template>
	<v-footer	height="auto"  class='primary'>
		<v-layout	justify-center	row	wrap>
			<v-btn	v-for="link in links"	:key="link"	color="white"	flat >	{{$vuetify.t(link) }}	</v-btn>
			<v-flex	accent	py-1	text-xs-center	white--text	xs12		>	
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
                '$vuetify.texts.footerPage.links.l1',
                '$vuetify.texts.footerPage.links.l2',
                '$vuetify.texts.footerPage.links.l3',
                '$vuetify.texts.footerPage.links.l4',
            ],
		}),
		props:{		
			fixed: {type:  Boolean,  default: false},
		},
    }
</script>