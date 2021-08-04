<template>
  <div>
    <div class="contain">
      <div class="loginleft">
        <div class="left">车间总览</div>
        <div
          class="left"
          :style="{ height: '400px', left: '-70px', width: '100%' }"
          ref="myEchart"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
import '../../node_modules/echarts/map/js/china.js'; // 引入中国地图数据f
import { HomePage } from '@/api/api.js';
import { mapGetters } from 'vuex';
import { typeJudge } from '@/utils/validate.js';

// 主模块
// let echarts = require('echarts/lib/echarts')
export default {
  // name: 'china',
  name: 'echarts',
  data() {
    return {
      chart: null,

      // 超市家数
      supermarketNum: '',
      // 供应商家数
      supplierNum: '',
      // 商品数据
      salesNum: [],
      orderLists: [],
      ranks: [{ rank: 1 }, { rank: 2 }, { rank: 3 }, { rank: 4 }, { rank: 5 }], //销量排行
      today: [],
      turnover: '',
      avgMoney: '',
      userId: '',
    };
  },
  //获取数据
  created() {
    this.userId = this.$store.getters.userId;
    HomePage(this.userId).then((data) => {
      this.supermarketNum = data.data.data.supermarketNum;
      this.supplierNum = data.data.data.supplierNum;
      // 将获取的数据赋给空数组salesNum
      this.salesNum = data.data.data.goodsList;
      this.today = data.data.data.orderList;
      this.turnover = data.data.data.orderList[0].turnover;
      this.avgMoney = data.data.data.avgMoney;
    });
  },
  mounted() {
    this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  computed: {
    ...mapGetters(['userId']),
  },
  methods: {
    chinaConfigure() {
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        backgroundColor: '',
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.name + ' : ' + params.value[2];
          },
        }, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['orangered', 'yellow', 'lightskyblue'],
        },
        // 标题
        title: {
          text: '',
          left: 'center',
          textStyle: {
            color: '#fff',
          },
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 'bottom',
          data: ['文化遗产', '混合遗产'],
          textStyle: {
            color: '#fff',
          },
        },
        geo: {
          // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: false, // 是否显示对应地名
              textStyle: {
                color: 'rgba(0,0,0,0.8)',
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)',
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      });
      // this.$store.commit('openLoading')
      // this.$store.dispatch('fetchHeatChinaRealData', myChart)
      // setInterval(() => {
      // 	this.$store.dispatch('fetchHeatChinaRealData', myChart)
      // }, 1000)
    },
    todays() {
      this.$http.get('/data/index').then(({ data }) => {
        // console.log(data, 999);
        this.today = data.data.orderList;
      });
    },
    yesterdays() {
      //   console.log('yesterday');
    },
    weeks() {
      //   console.log('week');
    },
    months() {
      //   console.log('month');
    },
    typeJudgeSpringboard(value) {
      //内容是否为空 判断函数跳转
      if (typeJudge(value)) {
        return 0;
      } else {
        return value;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 1000px) {
  .left {
    margin-left: 2% !important;
  }

  .loginimg {
    margin-left: 2% !important;
  }
}

.orderNum, .chaos, .loginimg {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.orderNum {
  margin-left: -5px;
}

.money {
  width: 55px;
  height: 55px;
  margin-left: 18.5%;
}

.orderNum {
  width: 60px;
  height: 60px;
}

.loginzou, .loginyou, .loginzoul, .loginzour {
  border-bottom: solid 1px #999999;
}

page {
  margin: 0px 20px;
  padding: 0;
  border: 0;
}

.contain {
  /* background-color: red; */
  width: 100%;
  height: 100%;
  margin-top: 9px;
}

.login {
  background-color: #2298DE;
  padding: 4px;
  width: 70px;
  text-align: center;
  height: 14px;
  display: flex;
  justify-content: center;
  line-height: 14px;
  color: white;
}

@media screen and (max-width: 833px) {
  .left {
    width: 0% !important;
  }
}

.left {
  display: flex;
  margin-left: 4%;
  width: 100%;
}

.hh {
  width: 50%;
  float: left;
  /* background-color: #2298DE; */
  height: 100%;
  display: flex;
  margin-top: 2%;
  flex-direction: column;
}

.loginleft {
  width: 50%;
  float: left;
  /* background-color: #2298DE; */
  height: 100%;
  /* display: flex; */
  margin-top: 2%;
}

.loginimg {
  display: flex;
  margin-left: 22%;
}

.loginchao {
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
}

.loginright {
  width: 50%;
  float: left;
  /* background-color: rgb(162, 205, 230); */
  height: 100%;
}

.right {
  display: flex;
}

.rights {
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  margin-bottom: 4%;
  margin-top: -2%;
}

.rightsing {
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  margin-bottom: 2%;
}

// 商品销量排行
.item-rank, .item-commodity, .item-turnoverNum, .item-moneyNum {
  border-bottom: solid 1px #e3e3e3;
  padding: 10px 0;
  border-right: 0;
  border-left: 0;
}

.item-commodity {
  text-align: center;
  padding-left: 0;
}

.loginbiao {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 6px 0px;
}

.loginzou {
  width: 10%;
  text-align: center;
}

.zoutext {
  text-align: center;
}

.loginyou {
  width: 57%;
  // padding-left: 5%;
}

.loginzoul {
  width: 15%;
  // margin-left: 15px;
  text-align: center;
}

.loginzour {
  width: 13%;
  margin-right: 1%;
  text-align: center;
}

.righted {
  margin-top: 5%;
  display: flex;
}

.today {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e3e3e3;
  padding: 4px 0px;
  margin-left: 3px;
}

.today, .yesterday, .week, .month {
  // border: solid red 1px;
}

.righthou {
  margin-top: 2%;
  display: flex;
}

.today div {
  padding: 0px 10px;
}

.shunum {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
  padding: 16px 0px;
  text-align: center;
  /* margin-left: -7%; */
}

.shunums {
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid #e3e3e3; */
  padding: 16px 0px;
  text-align: center;
}

.shunum div {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.shunums div {
  display: flex;
  flex-direction: column;
  width: 90%;
}
</style>
