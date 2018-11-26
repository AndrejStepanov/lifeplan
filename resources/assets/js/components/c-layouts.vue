<template>
	<c-layout class="custom-resizer" layout="vertical">
		<div class="pane">
			<h6 class="title is-6"  >Pane 1</h6>
			wjehfvblw fblawejva 
			<slot :name="slotNames[0]" />
		</div>
		<multipane-resizer></multipane-resizer>
		<div class="pane">
			<h6 class="title is-6">Pane 2</h6>
			wjehfvblw fblawejv 
			<slot :name="slotNames[1]" />
		</div>
		<multipane-resizer></multipane-resizer>
		<div class="pane" :style="{ flexGrow: 1 }">
			<multipane class="custom-resizer" layout="horizontal">
				<div class="pane">
					<h6 class="title is-6">Pane 1</h6>
					wjehfvblw fblawejv 
					
				</div>
				<multipane-resizer></multipane-resizer>
				<div class="pane">
					<h6 class="title is-6">Pane 2</h6>
					wjehfvblw fblawejv 
				</div>
				<multipane-resizer></multipane-resizer>
				<div class="pane" :style="{ flexGrow: 1 }">
					<h6 class="title is-6">Pane 3</h6>
					wjehfvblw fblawejv 
				</div>
			</multipane>
		</div>
	</c-layout>
</template>

<script>
			
	import CLayout from './c-layout'
    export default {
		name:'c-layouts',
		data:() => ({
		}),
		props:{
			panelsConfig: {type:  Array,  default: () =>[{  name: 'first',   width:'50%',	height:'100%',  type: 'horizontal' , data:[]}]},
		},
		computed:{
		},
        components: {
			CLayout,
		},
		methods: {
		},
		created: function (){
			let vm=this			
		},
    }
</script>

<style lang="scss">
.custom-resizer {  width: 100%;  height: 100%;}

.custom-resizer > .pane {  text-align: center;  margin: 10px;  overflow: auto;}

.custom-resizer.layout-v > .multipane-resizer {  margin: 0; left: 0;  position: relative;  border-style: solid; border-width: 0 thin 0 0; border-image: repeating-linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;}
.custom-resizer.layout-h > .multipane-resizer {  margin: 0; left: 0;  position: relative;  border-style: solid; border-width: thin 0 0; border-image: repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;}
</style>