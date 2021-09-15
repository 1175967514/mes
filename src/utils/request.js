import axios from 'axios';

import { Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';
// import store from '../store/index'
// create an axios instance
// 获取token,不包括拉取菜单树的token，拉取菜单树 @/api/login
const userToken = getToken();
let token = '';
if (userToken) {
  token = userToken;
} else {
  // console.log("token获取错误")
  token = 'Basic bWFsbC1hZG1pbjphZG1pbg==';
}
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://39.108.91.47:8010/'
      : '/api', // 开发模式下的代理
  timeout: 30000, // request timeout
  headers: {
    Authorization: token,
    token: token
  }
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // const userToken = getToken()
    if (token) {
      if (config.url.indexOf('/oauth/token') < 0) {
        config.headers.Authorization = userToken;
      }
    }
    /* if (store.getters.token) {
		  // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
		  config.headers['X-Token'] = getToken()
		}*/
    return config;
  },
  error => {
    // Do something with request error

    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    if (res.code !== 1) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      });
      // // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // 请自行在引入 MessageBox
      //   // import { Message, MessageBox } from 'element-ui'
      //   MessageBox.confirm(
      //     '你已被登出，可以取消继续留在该页面，或者重新登录',
      //     '确定登出',
      //     {
      //       confirmButtonText: '重新登录',
      //       cancelButtonText: '取消',
      //       type: 'warning'
      //     }
      //   ).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload(); // 为了重新实例化vue-router对象 避免bug
      //     });
      //   });
      // }
      return Promise.reject('error');
    } else {
      return res;
    }
  },
  error => {
    if (error.response.data.code === 101) {
      store.dispatch('FedLogOut').then(() => {
        Message.error('账号在其它地方登录');
        location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
      });
    }
    const err = JSON.parse(error.response.request.response);
    if (err.error_description === 'Bad credentials') {
      Message.error('密码错误,请重新输入');
    } else if (err.error_description.indexOf('不存在') > 0) {
      Message.error('账户未被注册');
    }
    return Promise.reject(error);
  }
);

export default service;
