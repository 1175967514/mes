import Vue from 'vue';
import VueRouter from 'vue-router';
// import axios from 'axios';
// 登录页面
import Index from '../components/Index';
import Socialsignin from '../components/Socialsignin';
import Authredirect from '../components/Authredirect';
import Family from '../components/Family.vue'
import Payment from '../components/Payment.vue'
import Loans from '../components/Loans.vue'
import Deliver from '../components/Deliver.vue'
import Login from '../components/Login.vue'
import Returngood from '../components/Returngood.vue'
import Purorder from '../components/Purorder.vue'
import shopAdd from '../components/shopAdd.vue'
import Purware from '../components/Purware.vue'
import PurorderSee from '../components/PurorderSee.vue'
import Purchase from '../components/Purchase.vue'
import Salesta from '../components/Salesta.vue'
import Financome from '../components/Financome.vue'
import Finanbill from '../components/Finanbill.vue'
import Commodcate from '../components/Commodcate.vue'
import Commodunit from '../components/Commodunit.vue'
import Commodhao from '../components/Commodhao.vue'
import Salesorder from '../components/Salesorder.vue'
import Salesoutlet from '../components/Salesoutlet.vue'
import Salesreturn from '../components/Salesreturn.vue'
import Basiclier from '../components/Basiclier.vue'
import Basicsuper from '../components/Basicsuper.vue'
import Basicmember from '../components/Basicmember.vue'
import Basicware from '../components/Basicware.vue'
import Basicbud from '../components/Basicbud.vue'
import Basicment from '../components/Basicment.vue'
import Basicperson from '../components/Basicperson.vue'
import Systemrole from '../components/Systemrole.vue'
import Systemtion from '../components/Systemtion.vue'
import Systemmechan from '../components/Systemmechan.vue'
import Systemeuser from '../components/Systemeuser.vue'
import Systemenal from '../components/Systemenal.vue'
import Systemetem from '../components/Systemetem.vue'
import Systemshop from '../components/Systemshop.vue'
import TableMan from '../components/TableMan.vue'
// about
import Commodinfor from '../components/Commodinfor'
import CommodinforAdd from '../components/Commodinfor/add.vue'
import CommodinforDetail from '../components/Commodinfor/detail.vue'
Vue.use(VueRouter)

const routes = [

  // 项目启动后默认显示登录界面
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    // 登录成功后进入管理页面的首页
    path: '/Family',
    name: 'Family',
    component: Family,

    children: [
      // 工艺单变更管理
      {
        path: '/Commodinfor',
        component: Commodinfor
      },
      {
        path: '/Commodinfor/Add',
        component: CommodinforAdd
      }, {
        path: '/Commodinfor/Detail',
        component: CommodinforDetail
      },
      // 登录
      {
        path: '/Login',
        component: Login
      },
      // 车间总览
      {
        path: '/Index',
        component: Index
      },
      // 车台数据
      {
        path: '/Deliver',
        component: Deliver
      },
      // 实时开台
      {
        path: '/Returngood',
        component: Returngood
      },
      // 生产看板
      {
        path: '/Systemshop',
        component: Systemshop
      },
      // 历史数据查询
      {
        path: '/Systemetem',
        component: Systemetem
      },
      // 历史轨迹曲线
      {
        path: '/Systemenal',
        component: Systemenal
      },
      // 参数修改记录
      {
        path: '/Systemeuser',
        component: Systemeuser
      },
      // 用工历史记录
      {
        path: '/Systemmechan',
        component: Systemmechan
      },
      // 告警设置
      {
        path: '/Systemtion',
        component: Systemtion
      },
      // 告警明细
      {
        path: '/Systemrole',
        component: Systemrole
      },
      // 告警监控
      {
        path: '/Basicperson',
        component: Basicperson
      },
      // 告警统计
      {
        path: '/Basicment',
        component: Basicment
      },
      // 实时查询
      {
        path: '/Basicbud',
        component: Basicbud
      },
      // 历史数据
      {
        path: '/Basicware',
        component: Basicware
      },
      // 环境实时查询
      {
        path: '/Basicmember',
        component: Basicmember
      },
      // 环境历史数据
      {
        path: '/Basicsuper',
        component: Basicsuper
      },
      // 订单管理
      {
        path: '/Basiclier',
        component: Basiclier
      },
      // 订单跟踪
      {
        path: '/Salesreturn',
        component: Salesreturn
      },
      // 预排计划管理管理
      {
        path: '/Salesoutlet',
        component: Salesoutlet
      },
      // 日计划管理
      {
        path: '/Salesorder',
        component: Salesorder
      },
      // 定额表管理
      {
        path: '/Commodhao',
        component: Commodhao
      },
      // 工艺单管理
      {
        path: '/Commodunit',
        component: Commodunit
      },
      // 工单管理
      {
        path: '/Commodcate',
        component: Commodcate
      },
      // 排班管理
      {
        path: '/Financome',
        component: Financome
      },
      // 班次管理
      {
        path: '/Finanbill',
        component: Finanbill
      },
      // 班组管理
      {
        path: '/Salesta',
        component: Salesta
      },
      // 轮班管理
      {
        path: '/PurorderSee',
        component: PurorderSee
      },
      // 工单执行反馈
      {
        path: '/Socialsignin',
        component: Socialsignin
      },
      // 报表管理
      {
        path: '/TableMan',
        component: TableMan
      },
      // 品种单价设定
      {
        path: '/Purchase',
        component: Purchase
      },
      // 品种单价设定添加
      {
        path: '/Purware',
        component: Purware
      },
      // 计件工资算法管理
      {
        path: '/Purorder',
        component: Purorder
      },
      // 计件工资算法添加前纺清联
      {
        path: '/shopAdd',
        component: shopAdd
      },
      // 计件工资日度核算管理
      {
        path: '/Loans',
        component: Loans
      },
      // 计件工资月度核算管理
      {
        path: '/Payment',
        component: Payment
      },
      // 计件工资数据修正
      {
        path: '/Authredirect',
        component: Authredirect
      },

    ]
  },


]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router