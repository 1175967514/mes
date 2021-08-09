<template>
  <div class="commodinfor">
    <div class="title">
      <div class="go-back" @click="goBack">
        <i class="el-icon-arrow-left"></i>
      </div>
      工艺变更通知单详情
      <div class="btn-list" style="margin-left:auto">
        <el-button size="medium" type="info">打印</el-button>
        <el-button size="medium" type="info">上一条</el-button>
        <el-button size="medium" type="info">下一条</el-button>
        <el-button size="medium" type="info">查询</el-button>
      </div>
    </div>
    <el-form class="form" :model="form" label-width="84px">
      <el-form-item label="组织：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="工序：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="车间：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="设备类型：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="通知时间：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="审核人：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="送达部门：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="实验室：">
        <div class="content">组织</div>
      </el-form-item>
      <el-form-item label="备注：">
        <div class="content"></div>
      </el-form-item>
    </el-form>
    <div class="btn-list">
      <div>
        <span class="label">设备机台</span
        ><el-select size="medium" placeholder="选择机台"></el-select>
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
          label="项目"
          min-width="20%"
          :resizable="false"
          xi
          align="center"
        >
        </el-table-column>
        <el-table-column min-width="30%" :resizable="false" align="center">
          <template slot="header">
            <span style="font-weight:normal">变更前： </span>
            <el-select size="medium" placeholder="请选择品种名称"></el-select>
          </template>
        </el-table-column>
        <el-table-column min-width="30%" :resizable="false" align="center">
          <template slot="header">
            <span style="font-weight:normal">变更后： </span>
            <el-select size="medium" placeholder="请选择品种名称"></el-select>
          </template>
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
      this.$router.push('/Commodinfor');
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
