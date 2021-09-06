<template>
  <div class="common-wrapper">
    <div class="common-title">温湿度实时查询</div>
    <div class="main">
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
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.common-wrapper{
  height 100%
}
.main{
  margin-top 20px
  height calc(100% - 60px)
  display flex
}
.table{
  width 30%
  height 100%
  overflow-y auto
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
