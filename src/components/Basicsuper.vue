<template>
  <div class="common-wrapper">
    <div class="common-title">温湿度历史数据查询</div>
    <div class="common-main">
      <el-form class="common-search" :inline="true">
        <el-form-item label="工序">
          <el-select
            v-model="search.gx"
            placeholder="选择工序"
            size="medium"
            clearable
          >
            <el-option
              v-for="(item, index) in gxOption"
              :key="index"
              :label="item.gongxu"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车台">
          <el-select
            v-model="search.workShop"
            placeholder="选择车台"
            size="medium"
            clearable
          ></el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-select
            v-model="search.time"
            placeholder="选择时间"
            size="medium"
            clearable
          ></el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" @click="getTableData"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%" class="common-table">
        <el-table-column
          prop="date"
          label="工序"
          min-width="20%"
          align="center"
        />
        <el-table-column
          prop="date"
          label="车台"
          min-width="20%"
          align="center"
        />
        <el-table-column
          prop="date"
          label="时间"
          min-width="20%"
          align="center"
        />
        <el-table-column
          prop="date"
          label="温度"
          min-width="20%"
          align="center"
        >
          <template slot-scope="{ row }">
            <span style="color:#23B899">{{ row.temp }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="湿度"
          min-width="20%"
          align="center"
        >
          <template slot-scope="{ row }">
            <span style="color:#387DFF">{{ row.temp }}%</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAllProcedure } from '@/api/common';
export default {
  data() {
    return {
      search: {
        gx: '',
        workShop: '',
        time: ''
      },
      gxOption: [],
      tableData: [{ temp: 20 }]
    };
  },
  created() {
    this.getProcedure();
  },
  methods: {
    // 下拉框部分
    async getProcedure() {
      try {
        const res = await getAllProcedure();
        this.gxOption = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    getTableData() {}
  }
};
</script>

<style lang="stylus" scoped>
.common-wrapper{
  height 100%
}
</style>
