export default {
	namespaced: true,
	state: {
		userName:'',
		userId:'',
		isRoot:'',
		avatar:'',
	},
	getters: { // computed properties
		getUserName: state => () => { return state.userName	},
		getUserId: state => () => {	return state.userId	},
		getIsRoot: state => () => {	return state.isRoot	},
		getAvatar: state => () => {	return state.avatar	},
	},
	actions:{
		doLog({commit},{userName,userId,  isRoot, avatar}){
			commit('infoSetting',{userName,userId,  isRoot,avatar})
		},
		doLogout({commit}){
			commit('infoClearing')
		},
	},
	mutations:{
		infoSetting(state, {userName,userId,  isRoot,avatar}){
			state.userName=userName
			state.userId=userId
			state.isRoot=isRoot
			state.avatar=avatar
		},
		infoClearing(state){
			state.userName=''
			state.userId=''
			state.isRoot=''
			state.avatar=''
		},
	},
}