// 引入vue和vuex
import Vue from 'vue';
import Vuex, {
	Store
} from 'vuex';
// 引入axios
import axios from 'axios';
import {getSession} from '@/utils/auth.js';
// import vuexAlong from 'vuex-along';
// import './common/stylus/index.styl'	// 添加./避免编译器认为是别名

// 安装
Vue.use(Vuex);
export default new Vuex.Store({
	// 状态管理数据存放
	state: {
		userName: '',//用户名称
		realName:'',//用户权限名称
		userId:'',//用户id
		token:'',
		role:''

	},
	// 同步消息--	状态管理修改方法
	mutations: {
		// 更新数据的方法
		setStateUser(state, userName) {
			// 更新数据
			state.userName = userName;
		},
		userId(state, userId){//用户id更新
			state.userId = userId;
		},
		realName(state, realName){//用户id更新
			state.realName = realName;
		},
		token(state, token){
			state.token = token;
		},
		role(state, role){
			state.role = role;
		},
		
	},
	
	// 状态管理数据获取
	getters: {
		getState(state) {
			return state;
		},
		userName(state){
			let flag = getSession('userName')
			if(flag){ 
				return flag
			}
			return state.userName
		},
		token(state){
			let flag = getSession('token')
			if(flag){ 
				return flag
			}
			return state.token
		},
		role(state){
			let flag = getSession('role')
			if(flag){ 
				return flag
			}
			return state.role
		},
		
		
		realName(state){
			let flag = getSession('realName')
			if(flag){ 
				return flag
			}
			return state.realName
		},
		userId(state){
			let flag = getSession('userId')
			if(flag){ 
				return flag
			}
			return state.userId
		},
	},
	// plugins:[vuexAlong],
	// 状态管理修改请求
	actions: {
		setStateUsername(context, username) {
			context.commit("SETSTATE", username);
		},
		// 获取用户信息
		userinfo(store) {
			//发送请求
			axios.get('/admin/userinfo')
				.then(({
					data
				}) => {
					if (data.errno === 0) {
						// 存储数据
						store.commit(data.data)
					}
				})
		}
	},
	
})
