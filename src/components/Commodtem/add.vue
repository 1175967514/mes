<template>
  <div class="commodtem">
    <div class="title">
      <div class="go-back" @click="goBack">
        <i class="el-icon-arrow-left"></i>
      </div>
      工艺模版录入
    </div>
    <el-form class="form" :model="form" label-width="70px">
      <el-form-item label="工序">
        <el-select clearable></el-select>
      </el-form-item>
      <el-form-item label="线体">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="设备类型">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="创建人">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker value-format="yyyy-MM-dd" clearable></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="btn-list">
      <div>
        <span class="label">｜细纱工序STM129设备参数模版V1.0</span>
      </div>
      <div>
        <el-button size="medium" type="info">导入</el-button>
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
          label="项目类型"
          min-width="20%"
          :resizable="false"
          align="center"
        >
          <template slot-scope="{ row }">
            <el-select v-model="row.project" clearable> </el-select>
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
    <div class="operate-btn">
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
      id: '',
      tableData: [{ project: '项目1', change: '', changed: '' }]
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  watch: {
    $route: function(val) {
      this.id = val.query.id;
    }
  },
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
