<template>
  <div class="homeWrap">
    <el-container style="height: 100vh">
      <!-- 侧边栏区域 -->
      <el-aside width="220px" style="height: 100vh">
        <div class="logo"><img src="@/assets/logo.png" />纺织云平台</div>
        <!-- 侧边栏菜单区域 -->
        <el-scrollbar style="height:100%">
          <el-menu
            router
            default-active="/"
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#292B3D"
            active-text-color="#2A62AA"
          >
            <el-submenu index="1">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="jiankong" class-name="custom-class" />
                </span>
                <span>监控中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="index"> 车间总览</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Deliver"> 车台数据</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Returngood"> 实时开台</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Systemshop"> 生产看板</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="tongji" class-name="custom-class" />
                </span>
                <span>生产统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Systemetem"> 历史数据查询</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Systemenal"> 历史轨迹曲线</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Systemeuser"> 参数修改记录</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Systemmechan"> 用工历史记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="baojing" class-name="custom-class" />
                </span>
                <span>告警管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Systemtion"> 告警设置</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Systemrole"> 告警明细</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Basicperson"> 告警监控</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Basicment"> 告警统计</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="nengyuan" class-name="custom-class" />
                </span>
                <span>能源管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Basicbud"> 实时查询</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Basicware"> 历史数据</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="huanjing" class-name="custom-class" />
                </span>
                <span>环境管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Basicmember"> 实时查询</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Basicsuper"> 历史数据</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="order" class-name="custom-class" />
                </span>
                <span>生产订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Basiclier"> 订单管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Salesreturn"> 订单跟踪</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="jihua" class-name="custom-class" />
                </span>
                <span>生产计划管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Salesoutlet">
                  预排计划管理管理</el-menu-item
                >
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Salesorder"> 日计划管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Commodhao"> 定额表管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Commodunit"> 工艺单管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Commodinfor"> 工艺单变更管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="diaodu" class-name="custom-class" />
                </span>
                <span>生产调度管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Commodcate"> 工单管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Financome"> 排班管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Finanbill"> 班次管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Salesta"> 班组管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="PurorderSee"> 轮班管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="Socialsignin">
              <span class="svg-container">
                <svg-icon icon-class="gongdan" class-name="custom-class" />
              </span>
              <span slot="title">工单执行反馈</span>
            </el-menu-item>
            <el-menu-item index="TableMan">
              <span class="svg-container">
                <svg-icon icon-class="baojia" class-name="custom-class" />
              </span>
              <span slot="title">报表管理</span>
            </el-menu-item>
            <el-submenu index="11">
              <template slot="title">
                <span class="svg-container">
                  <svg-icon icon-class="gongzi" class-name="custom-class" />
                </span>
                <span>工资管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Purchase"> 品种单价设定</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Purware">
                  <span class="svg-container">
                    <svg-icon
                      icon-class="tongji"
                      class-name="custom-class"
                    /> </span
                  >品种单价设定添加</el-menu-item
                >
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/Purorder">
                  <span class="svg-container">
                    <svg-icon
                      icon-class="tongji"
                      class-name="custom-class"
                    /> </span
                  >计件工资算法管理</el-menu-item
                >
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="shopAdd">
                  <span class="svg-container">
                    <svg-icon
                      icon-class="tongji"
                      class-name="custom-class"
                    /> </span
                  >计件工资算法添加前纺清联</el-menu-item
                >
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Loans">
                  <span class="svg-container">
                    <svg-icon
                      icon-class="tongji"
                      class-name="custom-class"
                    /> </span
                  >计件工资日度核算管理</el-menu-item
                >
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Payment">
                  <span class="svg-container">
                    <svg-icon
                      icon-class="tongji"
                      class-name="custom-class"
                    /> </span
                  >计件工资月度核算管理</el-menu-item
                >
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="Authredirect">
                  <span class="svg-container">
                    <svg-icon
                      icon-class="tongji"
                      class-name="custom-class"
                    /> </span
                  >计件工资数据修正</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <div class="headerbutton">
            <el-menu
              v-if="false"
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#fff"
              text-color="#292B3D"
              style="mid"
              active-text-color="#ffd04b"
            >
              <el-menu-item style="padding-right: 30px" index="1"
                >模块一</el-menu-item
              >
              <el-menu-item style="padding-right: 30px" index="2"
                >模块二</el-menu-item
              >
              <el-menu-item style="padding-right: 30px" index="3"
                >模块三</el-menu-item
              >
              <el-menu-item style="margin-right: 30px" index="4"
                >模块四</el-menu-item
              >
            </el-menu>
          </div>
          <div class="user-info">
            <el-button type="text" class="logout" @click="logout">
              <svg-icon icon-class="exit" class-name="custom-class" />
              退出</el-button
            >
          </div>
        </el-header>
        <div
          v-if="false"
          style="
          height: 100vh;
          padding: 0;
          margin: 0;
          overflow-x: hidden;
          overflow-y: hidden;
        "
        >
          <iframe
            name="nfrm"
            src="http://112.51.247.76/case09/index.html"
            class="iframeStyle"
          ></iframe>
        </div>
        <!-- 右侧主体区域 -->
        <el-main>
          <div class="main-wrapper">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <div class="boxPassword">
        <el-tag>修改密码</el-tag>
      </div>
      <div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户ID" prop="id">
            {{ ruleForm.id }}
            <!-- <el-input
              type="text"
              :value="ruleForm.id"
              autocomplete="off"
            ></el-input> -->
          </el-form-item>
          <el-form-item label="原密码" prop="oldPwd">
            <el-input
              type="password"
              v-model="ruleForm.oldPwd"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPwd">
            <el-input
              type="password"
              v-model="ruleForm.newPwd"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { setSession } from '@/utils/auth.js';
import { outLogin } from '@/api/api.js';
import { updatePassword } from '@/api/api.js';
import axios from 'axios';
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        id: '',
        oldPwd: '',
        newPwd: '',
        checkPass: ''
      },
      rules: {
        newPwd: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      },
      drawer: false,
      //链接
      iframeBool: false,
      //侧边栏
      sideBool: true,
      //初始化
      createBool: false,
      //订单宝
      payManagement: true,
      //供应链
      supplyChain: true,
      //集采
      shopBool: true,
      activeIndex2: '1',
      purchasingManagement: false, //采购管理
      salesManagement: false, //销售管理
      systemManagement: false, //系统管理
      reqData: {
        useId: ''
      }
    };
  },
  created: function() {
    this.ruleForm.id = this.$store.getters.userId;
    if (this.$store.getters.role == '1') {
      this.purchasingManagement = true;
      this.salesManagement = true;
      this.systemManagement = true;
    } else if (this.$store.getters.role == '2') {
      this.purchasingManagement = false;
      this.salesManagement = true;
      this.systemManagement = false;
    } else if (this.$store.getters.role == '3') {
      this.purchasingManagement = true;
      this.salesManagement = false;
      this.systemManagement = false;
    }
  },
  computed: {
    ...mapGetters(['userName', 'realName'])
  },
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      // if (valid) {
      let ruldata = {
        id: this.ruleForm.id,
        oldPwd: this.ruleForm.oldPwd,
        newPwd: this.ruleForm.newPwd
      };

      updatePassword(this.ruldata)
        .then(res => {
          // console.log(res);
          if (res.data.code === 20000) {
            this.$message({
              message: '密码修改成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: '返回值错误',
              type: 'error'
            });
          }
        })
        .catch(error => {
          this.$message({
            message: '数据请求失败',
            type: 'error'
          });
        });
      // } else {
      //   this.$message({
      //     message: '数据请求失败',
      //     type: 'error'
      //   });
      //   return false;
      // }
      // });
    },
    resetForm(formName) {
      this.ruleForm.oldPwd = '';
      this.ruleForm.newPwd = '';
      this.ruleForm.checkPass = '';
    },
    handleCommand(command) {
      this.reqData.userId = this.$store.getters.userId;
      if (command == 'a') {
        outLogin(this.reqData.userId)
          .then(res => {
            if (res.data.code === 20000) {
              this.$router.push('/Login');
              localStorage.clear(); //清空所有本地缓存
              sessionStorage.clear();
            } else {
              this.$message({
                message: '返回值错误',
                type: 'error'
              });
            }
          })
          .catch(error => {
            this.$message({
              message: '数据请求失败',
              type: 'error'
            });
          });
      } else if (command == 'b') {
        this.drawer = true;
      }
    },
    handleSelect(key, keyPath) {
      if (key == '1') {
        this.payManagement = false;
      } else {
        this.payManagement = true;
      }
      if (key == '2') {
        this.supplyChain = false;
        this.createBool = true;
      } else {
        this.supplyChain = true;
      }
      if (key == '3') {
        this.shopBool = false;
        this.createBool = true;
      } else {
        this.shopBool = true;
      }
      if (key == '4') {
        this.iframeBool = true;
        this.sideBool = false;
      } else {
        this.sideBool = true;
        this.iframeBool = false;
      }
    },
    logout() {
      this.$router.push('/Login');
    }
  }
};
</script>

<style lang="stylus" scoped>
.boxPassword {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iframeStyle {
  width: 100%;
  height: 100%;
}

.el-dropdown-link {
  cursor: pointer;
  color: #FFFFFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

body {
  margin: 0;
}

.mid {
  margin-left: 30%;
}

.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.headerbutton {
  position: absolute;
  left: 15%;
}

// .headerbutton el-menu-item{
// padding:0px 15px
// }
.home-container {
  height: 100%;
}

.el-header {
  color: #292B3D;
  padding-left: 0 30px;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  position: relative;
  >div {
    display: flex;
    align-content: center;
  }
  .user-info{

  }
  .logout{
    color #48556A
  }
}

.admin {
  font-size: 13px;
}

.el-aside {
  background-color: #fff;
  box-shadow: 2px 0px 6px 0px rgba(206, 219, 225, 0.3);
  overflow hidden
  .logo{
    height 60px
    font-weight 600
    font-size 18px
    padding-left 20px
    line-height 60px
    box-shadow 0px 1px 6px 0px rgba(206, 219, 225, 0.3)
    margin 0 2px 4px 0
    display flex
    align-items center
    img{
      width 40px
      height 36px
      margin-right 10px
    }
  }
  .el-menu{
    padding:0 14px
    border-right none
    ::v-deep .el-submenu__title,.el-menu-item{
      border-radius 10px
    }
    ::v-deep .el-submenu__title:hover,.el-menu-item:hover{
      background-color:#E6EFF8!important;
      color:#2A62AA!important;
      i{
        color:#2A62AA!important;
      }
    }
    ::v-deep .el-menu-item-group__title{
      padding 0
    }
  }
}
.svg-container {
  vertical-align: middle;
  width: 15px;
  margin-right:10px;
  display: inline-block;
}
.el-main {
  background-color: #F6F9FC;
  width: 100%;
  height: calc(100% - 60px);
  padding:14px;
  .main-wrapper{
    height:100%;
    background:#fff;
    overflow-y:auto;
  }
}

.el-submenu .el-menu-item {
  // background-color: #f5f5f5;
}

.el-menu-item {
  height: 50px;
  line-height: 50px;
}

.el-menu-item-group div {
  padding: 0 !important;
}

.el-menu-vertical-demo {
  overflow: hidden;
}

.el-submenu__title {
  padding: 0 !important;
}
</style>
<style lang="stylus">
// 页面通用样式
.common-wrapper{
  box-sizing border-box
  padding:14px 20px
}
.common-title{
  color #292B3D
  padding-left 10px
  font-weight 500
  position relative
  &:before{
    display block
    content ""
    width 4px
    height 12px
    background #0163AE
    position absolute
    top 5px
    left 0
  }
}
//全局滚动条样式
::-webkit-scrollbar {
  width: 6px;
  height: 3px;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(144,147,153,.3);
}
::-webkit-scrollbar-track {
  background: #fff;
}
</style>
