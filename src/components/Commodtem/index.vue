<template>
  <div class="commodtem">
    <div class="title">工艺模版管理</div>
    <el-form class="search" :model="search" inline>
      <el-form-item prop="name" label="模版名称">
        <el-input v-model="search.name" />
      </el-form-item>
      <el-form-item prop="zz" label="工序">
        <el-select v-model="search.gx" clearable
          ><el-option
            v-for="(item, index) in procedureList"
            :key="index"
            :label="item.pd"
            :value="item.id"
          ></el-option
        ></el-select>
      </el-form-item>
      <el-form-item prop="type" label="设备类型">
        <el-select v-model="search.type" clearable
          ><el-option
            v-for="(item, index) in equipList"
            :key="index"
            :label="item.equipment"
            :value="item.id"
          ></el-option
        ></el-select>
      </el-form-item>
      <el-form-item prop="time" label="时间">
        <el-date-picker
          v-model="search.time"
          placeholder="请选择时间"
          value-format="yyyy-MM-dd"
          clearable
        ></el-date-picker>
      </el-form-item>
      <el-form-item style="margin-left:20px">
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="btn-list">
      <el-button size="medium" type="info" @click="handleRemove"
        >删除工艺模板</el-button
      >
      <el-button size="medium" type="info" @click="importVis = true"
        >导入工艺模板</el-button
      >
      <el-button
        size="medium"
        type="info"
        @click="$router.push('/Commodtem/Add')"
        >新增工艺模板</el-button
      >
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        ref="commodtemTable"
        style="width: 100%"
        border
        :header-cell-style="{ background: 'rgb(245,245,245)', color: '#333' }"
      >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column
          label="模板名称"
          prop="name"
          min-width="20%"
        ></el-table-column>
        <el-table-column
          label="版本号"
          prop="version"
          min-width="10%"
        ></el-table-column>
        <el-table-column
          label="工序"
          prop="gx"
          min-width="10%"
        ></el-table-column>
        <el-table-column
          label="线体"
          prop="xt"
          min-width="10%"
        ></el-table-column>
        <el-table-column
          label="设备类型"
          prop="type"
          min-width="12%"
        ></el-table-column>
        <el-table-column
          label="创建时间"
          prop="time"
          min-width="18%"
        ></el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="{ row }">
            <el-button type="text" @click="goDetail(row)">查看</el-button>
            <el-button type="text" @click="handleEdit(row)">修改</el-button>
            <el-button type="text" @click="removeData(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next, sizes, jumper"
        :page-size="search.pageSize"
        :current-page.sync="search.pageNum"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="导入通知单"
      :visible.sync="importVis"
      width="340px"
      top="30vh"
      center
    >
      <div class="center-dialog">
        <el-button icon="el-icon-upload2">默认按钮</el-button>
      </div>
      <div class="center-dialog">
        支持扩展名：.doc .xlsx <el-link type="primary">下载模板</el-link>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="importVis = false">取 消</el-button>
        <el-button size="small" type="primary" @click="importVis = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAllProcedure, getAllEquipment, getSheet } from '@/api/common';
export default {
  data() {
    return {
      importVis: false,
      search: {
        name: '',
        gx: '',
        type: '',
        time: '',
        pageNum: 1,
        pageSize: 10
      },
      procedureList: [],
      equipList: [],
      tableData: [
        {
          id: 1,
          name: '细纱工序STM129设备参数模版',
          version: 'V1',
          gx: '清花',
          type: 'JWF1009',
          xt: '一线',
          time: '2020/11/22 10:00:01'
        }
      ],
      total: 100
    };
  },
  created() {},
  mounted() {
    document.getElementsByClassName(
      'el-pagination__jump'
    )[0].childNodes[0].nodeValue = '跳至';
    this.getAllProcedure();
    this.getAllEquipment();
  },
  methods: {
    async getAllProcedure() {
      const { data } = await getAllProcedure();
      if (data.code == 1) {
        this.procedureList = data.data;
      } else {
        this.$message.error(data.msg);
      }
    },
    async getAllEquipment() {
      const { data } = await getAllEquipment();
      if (data.code == 1) {
        this.equipList = data.data;
      } else {
        this.$message.error(data.msg);
      }
    },
    getData() {},
    handleEdit(row) {
      this.$router.push({ path: '/Commodtem/Add', query: { id: row.id } });
    },
    removeData(id) {
      console.log(id);
    },
    handleRemove() {
      let selection = this.$refs.commodtemTable.selection;
      if (selection) {
        this.$confirm(
          '删除后该条通知单则不可找回，你还要继续吗?',
          '删除通知单',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            customClass: 'delete-dialog',
            center: true
          }
        )
          .then(() => {
            this.removeData(selection);
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      } else {
        this.$message({
          type: 'info',
          message: '请先选择一条数据！'
        });
      }
    },
    statusFormatter(row) {
      return row.status == 0 ? '新增' : '生效';
    },
    handleSizeChange(val) {
      this.search.pageNum = 1;
      this.search.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.search.pageNum = val;
      this.getData();
    },
    goDetail(row) {
      this.$router.push('/Commodtem/Detail');
    }
  }
};
</script>

<style lang="stylus" scoped>
.search{
  display:flex;
  .el-form-item{
    display:flex;
  }
}
.pagination{
  margin-top:20px;
}
</style>
<style lang="stylus">
.commodtem{
  height:100%;
  padding:20px;
  box-sizing:border-box;
  .title{
    color:#333;
    font-size:20px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
  }
  .go-back{
    display:inline-block;
    width:26px;
    height:26px;
    font-size:18px;
    border-radius:4px;
    border:1px solid #DCDFE6;
    line-height:26px;
    text-align:center;
    margin-right:8px;
    cursor:pointer;
  }
  .search{
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width:unset;
    }
    .el-form-item__label{
      white-space:nowrap;
      margin-left:10px;
    }
  }
  .btn-list{
    margin-bottom:20px;
    .el-button--info{
      background-color:rgb(127,127,127);
      border-color:rgb(127,127,127)
    }
  }
  .detail-table .el-table{
    tbody .cell .el-select .el-input__inner{
      border:none;
      background:transparent;
    }
  }
  .detail-table{
    min-height:260px;
  }
  .pagination .el-pagination{
    button.btn-prev,button.btn-next{
      border:1px solid #DCDFE6;
      border-radius:4px;
      background:#fff;
    }
    .el-pager{
      li{
        font-weight:normal;
        border:1px solid #DCDFE6;
        border-radius:4px;
        background:#fff;
      }
      .number.active{
        border-color:rgb(24,144,255)
      }
    }
    .el-pagination__sizes .el-input__inner{
      border-radius:4px;
      border:1px solid #DCDFE6;
    }
  }
  .el-form.form{
    display:flex;
    flex-wrap:wrap;
    .el-form-item{
      width:19%;
      margin-right 1%
      .el-select,.el-input{
        width:100%;
      }
    }
  }
  .operate-btn{
    margin-top:20px;
    display:flex;
    justify-content:center;
  }
}
.el-dialog.el-dialog--center .center-dialog{
    display:flex;
    justify-content:center;
    margin-bottom:20px;
    .el-link{
      margin-left:5px;
      text-decoration:underline
    }
    &:last-child{
      margin-bottom:0
    }
}
</style>
