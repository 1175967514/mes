<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">纺织云平台</h3>
      </div>
      <el-form-item prop="username" class="display">
        <img src="../assets/user.png" alt="" class="img-user-png" />
        <!-- </div> -->
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="admin_account"
          type="text"
          auto-complete="off"
        />
      </el-form-item>
      <el-form-item prop="password" class="display">
        <img src="../assets/password.png" alt="" class="img-password-png" />
        <!-- </div> -->
        <el-input
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="admin_password"
          auto-complete="off"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <div class="btnBox">
        <el-button style="width: 48%; margin-bottom: 30px" @click="resetForm"
          >重置</el-button
        >

        <el-button
          :loading="loading"
          type="primary"
          style="width: 50%; margin-bottom: 30px"
          @click.native.prevent="handleLogin"
          >登录</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import { isvalidNull } from '../utils/validate.js';
import { Login } from '@/api/api.js';
import { setSession } from '@/utils/auth.js';
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidNull(value)) {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername },
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {},
  destroyed() {},
  methods: {
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
    },
    handleLogin() {
      let data = {
        userName: this.loginForm.username,
        password: this.loginForm.password,
      };
      Login(data)
        .then((res) => {
          let data = res.data;
          if (data.code === 20000) {
            if (res.data.data.role == '1') {
              this.$store.commit('role', '1');
              setSession('role', '1');
            } else if (res.data.data.role == '2') {
              this.$store.commit('role', '2');
              setSession('role', '2');
            } else if (res.data.data.role == '3') {
              this.$store.commit('role', '3');
              setSession('role', '3');
            }
            this.$store.commit('token', data.data.token);
            setSession('token', data.data.token);
            this.$store.commit('userId', data.data.userId);
            setSession('userId', data.data.userId);
            this.$store.commit('realName', data.data.realName);
            setSession('realName', data.data.realName);
            if (data.data.userName) {
              this.$store.commit('userName', data.data.userName);
              setSession('userName', data.data.userName);
            }

            this.$router.push('/Index');
            //刷新数据，不能删
            window.location.reload();
          } else {
            alert('用户名或者密码错误！');
          }
        })
        .catch((error) => {});

      // debugger;
      // this.loginForm.username;

      /* this.$http.get('/v1/user/login',{
			
		admin_account:this.loginForm.username,
		admin_password:this.loginForm.password
		})
			.then(reponse => {
				let res = reponse.data;
				console.log(res,999);
				if(res.state == 200){
					// 设置状态管理的user
					this.$store.dispatch('setStateUser',res.extra.token);
					//获取状态管理的user
					let adminToken = this.$store.getters.getState.user;
					// 设置Cookies
					this.setCookie({'username':this.loginForm.username,'adminToken':adminToken});
					//登录成功后通过编程式路由跳转
					this.$router.push('/family');
				}else{
					alert('用户名密码错误！')
				}
			})
			.catch(error => {
				console.log(error)
			}) */

      // this.$refs.loginForm.validate(valid => {
      // 	if (valid) {
      // 		// 解构数据
      // 		let { username, password } = this.data;
      // 		// 提交数据
      // 		this.$http
      // 			.post('/v1/user/login', { username, password })
      // 			// 监听数据返回
      // 			.then(({ data }) => {
      // 			// 如果成功
      // 			if (data.errno === 0) {
      // 			// 刷新页面重新登录
      // 			window.location.reload();
      // 			} else {
      // 			// 提示错误
      // 			this.$message.error(data.msg)
      // 			}
      // 			})
      // }
      // })
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({ path: '/family' })
      //     }).catch(res => {
      //       console.log(res)
      //       this.loading = false
      //       if (res.response.status === 400) {
      //         this.$message({
      //           type: 'warning',
      //           message: '用户名或密码错误'
      //         })
      //       } else {
      //         this.$message({
      //           type: 'warning',
      //           message: res.response.data.error_description
      //         })
      //       }
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    },
  },
};
</script>

<style type="text/scss" lang="css">
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-text-fill-color: #ededed !important;

  background-color: transparent;
  background-image: none;
  transition: background-color 50000s ease-in-out 0s;
}
input {
  background-color: transparent;
}
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

@supports (-webkit-mask: none) and (not (cater-color: #fff)) {
  .login-container .el-input input {
    color: #fff;
  }
  .login-container .el-input input::first-line {
    color: #eee;
  }
}
/* reset element-ui css */
.login-container .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}
.login-container .el-input input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eee;
  height: 47px;
  caret-color: #fff;
}
.login-container .el-input input:-webkit-autofill {
  /* -webkit-box-shadow: 0 0 0px 1000px #283443 inset !important; */
  -webkit-text-fill-color: #fff !important;
}
.login-container .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

/*# sourceMappingURL=index.css.map */
</style>

<style type="text/scss" lang="css" scoped>
.login-container {
  /* min-height: 100%; */
  height: 760px;
  /* height: 100%; */
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.login-container .login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
.login-container .tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}
.login-container .tips span:first-of-type {
  margin-right: 16px;
}
.login-container .svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
.login-container .title-container {
  position: relative;
}
.login-container .title-container .title {
  font-size: 26px;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.login-container .title-container .set-language {
  color: #fff;
  position: absolute;
  top: 3px;
  font-size: 18px;
  right: 0px;
  cursor: pointer;
}
.login-container .show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}
.login-container .thirdparty-button {
  position: absolute;
  right: 0;
  bottom: 6px;
}
.login-container .btnBox {
  display: flex;
  justify-content: center;
}

.svg-container {
  border: solid red 1px;
}
.el-form-item__content {
  display: flex !important;
  flex-wrap: nowrap;
}
.img-user-png,
.img-password-png {
  width: 24px;
  height: 24px;
  /* border:solid 1px green; */
  display: inline-block;
  position: relative;
  top: 6px;
  left: 10px;
}
/*# sourceMappingURL=index.css.map */
</style>
