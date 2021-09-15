<template>
  <div class="common-wrapper">
    <div class="common-title">温湿度实时查询</div>
    <div class="common-main">
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            prop="date"
            label="温湿度表"
            min-width="36%"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="date"
            label="温度"
            min-width="32%"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="date"
            label="湿度"
            min-width="32%"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>
      <div ref="chart" class="chart"></div>
    </div>
  </div>
</template>

<script>
import { getAllEquipment } from '@/api/envAndEnergy';
export default {
  data() {
    return {
      tableData: [],
      myChart: null
    };
  },
  created() {
    let now = new Date();
    let form = {
      startTime: now,
      endTime: now,
      now: true
    };
    this.getData(form);
  },
  mounted() {
    this.getChartData();
  },
  methods: {
    async getData(query) {
      try {
        const data = await getAllEquipment(query);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    getChartData() {
      let options = this.setOptions();
      this.chartInit(options);
    },
    chartInit(options) {
      if (this.myChart == null) {
        this.myChart = this.$echarts.init(this.$refs.chart);
      } else {
        this.myChart.clear();
      }
      this.myChart.setOption(options);
    },
    setOptions() {
      let temp = [30, 28, 38, 26, 28];
      let hum = [42, 18, 13, 14, 20];
      let tempMax = this.getMaxData(Math.max(...temp));
      let humMax = this.getMaxData(Math.max(...hum));
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: 10,
          data: ['温度', '湿度'],
          icon: 'circle'
        },
        grid: {
          // left: '3%',
          // right: '4%',
          // bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: ['7:00', '8:00', '9:00', '10:00', '11:00'],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#292B3D',
            fontSize: 13
          },
          axisLine: {
            lineStyle: { color: '#EAEBF0' }
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: tempMax,
            splitNumber: 5,
            interval: tempMax / 5,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
              show: true,
              fontSize: 13,
              textStyle: {
                color: '#292B3D'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#EAEBF0',
                type: 'dotted'
              }
            }
          },
          {
            type: 'value',
            name: '湿度',
            min: 0,
            max: humMax,
            splitNumber: 5,
            interval: humMax / 5,
            nameLocation: 'end',
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: {
              show: true,
              fontSize: 13,
              textStyle: {
                color: '#292B3D'
              },
              formatter: '{value}%'
            }
          }
        ],
        series: [
          {
            name: '温度',
            color: '#23B899',
            type: 'line',
            yAxisIndex: 0,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              borderWidth: 2,
              borderColor: '#fff'
            },
            // areaStyle: {
            //   color: {
            //     type: 'linear',
            //     x: 1,
            //     y: 1,
            //     x2: 1,
            //     y2: 0,
            //     colorStops: [
            //       {
            //         offset: 0,
            //         color: '#fff' // 0% 处的颜色
            //       },
            //       {
            //         offset: 1,
            //         color: 'rgba(35,184,153,0.05)' // 100% 处的颜色
            //       }
            //     ],
            //     global: false // 缺省为 false
            //   }
            // },
            data: temp
          },
          {
            name: '湿度',
            color: '#387DFF',
            type: 'line',
            yAxisIndex: 1,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              borderWidth: 2,
              borderColor: '#fff'
            },
            data: hum
          }
        ]
      };
      return option;
    },
    getMaxData(data) {
      if (data % 5 == 0) {
        return data;
      } else {
        let remainder = data % 5;
        return data + (5 - remainder);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.common-wrapper{
  height 100%
}
.table{
  width 30%
  height 100%
  overflow-y auto
}
.common-main{
  display flex
}
.chart{
  width 70%
  height 100%
}
::v-deep.table .el-table th{
  background #F8F9FB
  color #292B3D
  font-size 14px
  font-weight normal
}
</style>
