<template>
    <v-toolbar class='z-index--4 transparent elevation-0 mt-2 no-clcik'    fixed       app   >
        <v-toolbar-side-icon @click="toolbarClicked('Left')"  v-if="showLeft" color='accent' class='get-clcik'  />
        <v-toolbar-title v-if="$vuetify.breakpoint.name!='xs'" class='get-clcik' color='accent'>{{curentSystem}}</v-toolbar-title>
        <v-spacer/>
        <c-profile class='get-clcik'/>
        <v-icon color='accent' class='get-clcik'>search</v-icon>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <v-icon color='accent' class='get-clcik'>more_vert</v-icon>
        <v-toolbar-side-icon @click="toolbarClicked('Right')"  v-if="showRight" class='get-clcik'/>
    </v-toolbar>
</template>

<script>
    import CProfile from './c-profile';
    export default {
        name:'c-head',

        data: () => ({            
        }),
        props: {
            curentSystem:{type: String,  default: '' },
            showLeft:{type: Boolean,  default: false },
			showRight:{type: Boolean,  default: false },
        },
       components: {
            CProfile,
        },
        methods:{
            toolbarClicked(side){
                this.$root.$emit('headDrawer'+side+'Click');
            }
        }
    }
</script>
<style>
    .z-index--4		{ z-index: 4; }
    .no-clcik       {pointer-events: none;}
    .get-clcik      {pointer-events: auto;}
</style>