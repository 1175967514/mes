<template>
  <div class="commodtem">
    <div class="title">
      <div class="go-back" @click="goBack">
        <i class="el-icon-arrow-left"></i>
      </div>
      工艺模版详情
    </div>
    <el-form class="form" :model="form" label-width="84px">
      <el-form-item label="工序：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="线体：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="设备类型：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="创建人：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="创建时间：">
        <div class="content">组织</div>
      </el-form-item>
    </el-form>
    <div class="btn-list">
      <div>
        <span class="label">｜细纱工序STM129设备参数模版V1.0</span>
      </div>
    </div>
    <div class="detail-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{ background: 'rgb(245,245,245)', color: '#333' }"
      >
        <el-table-column
          label="序号"
          width="80"
          :resizable="false"
          align="center"
        >
          <template slot-scope="{ $index }">
            {{ $index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          label="项目类型"
          prop="project"
          min-width="20%"
          :resizable="false"
          align="center"
        ></el-table-column>
        <el-table-column
          label="项目"
          min-width="20%"
          :resizable="false"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="参数值"
          min-width="20%"
          :resizable="false"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="备注"
          min-width="10%"
          :resizable="false"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ project: '项目1', change: '', changed: '' }]
    };
  },
  created() {},
  methods: {
    goBack() {
      this.$router.push('/Commodtem');
    },
    addRow() {
      this.tableData.push({ project: '', change: '', changed: '' });
    },
    minusRow() {
      this.tableData.splice(this.tableData.length - 1, 1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.btn-list{
  margin:20px 0 10px 0
  display:flex
  justify-content:space-between
  .label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
  }
}
</style>
