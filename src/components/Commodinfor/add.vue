<template>
  <div class="commodinfor">
    <div class="title">
      <div class="go-back" @click="goBack">
        <i class="el-icon-arrow-left"></i>
      </div>
      工艺变更通知单录入
    </div>
    <el-form class="form" :model="form" label-width="70px">
      <el-form-item label="组织">
        <el-select clearable></el-select>
      </el-form-item>
      <el-form-item label="工序">
        <el-select clearable></el-select>
      </el-form-item>
      <el-form-item label="车间">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="设备类型">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="通知时间">
        <el-date-picker value-format="yyyy-MM-dd" clearable></el-date-picker>
      </el-form-item>
      <el-form-item label="审核人">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item label="送达部门">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item label="实验室">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" :rows="3"></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-list">
      <div>
        <span class="label">设备机台</span
        ><el-select size="medium" placeholder="选择机台"></el-select>
      </div>
      <div>
        <el-button size="medium" type="info" @click="addRow">增行</el-button>
        <el-button size="medium" type="info" @click="minusRow">减行</el-button>
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
          align="center"
        >
          <template slot-scope="{ row }">
            <el-select v-model="row.project" clearable> </el-select>
          </template>
        </el-table-column>
        <el-table-column min-width="30%" :resizable="false" align="center">
          <template slot="header">
            <span style="color:#f56c6c">*</span>
            <span style="font-weight:normal">变更前： </span>
            <el-select size="medium" placeholder="请选择品种名称"></el-select>
          </template>
          <template slot-scope="{ row }">{{ row.change }}</template>
        </el-table-column>
        <el-table-column min-width="30%" :resizable="false" align="center">
          <template slot="header">
            <span style="color:#f56c6c">*</span>
            <span style="font-weight:normal">变更后： </span>
            <el-select size="medium" placeholder="请选择品种名称"></el-select>
          </template>
          <template slot-scope="{ row }">{{ row.changed }}</template>
        </el-table-column>
      </el-table>
    </div>
    <div class="operate-btn">
      <el-button size="medium">复制新增</el-button>
      <el-button size="medium">取消</el-button>
      <el-button size="medium">保存</el-button>
      <el-button size="medium" type="primary">提交</el-button>
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
