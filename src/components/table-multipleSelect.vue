<template>
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%">
    <el-table-column
      width="100">
    <template slot="header">
        <el-checkbox :indeterminate="isIndeterminate" v-model="selectAllStatus" @change="selectAllStatusFn"></el-checkbox>
    </template>
     <template v-slot="{row}">
        <el-checkbox :value='row.checked' @change="checkBoxFn(row)"></el-checkbox>
    </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
 
</template>
<script>
import { log } from 'util'
export default {
  data() {
      return {
        tableData: [{
          id : 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          checked:false
        }, {
          id : 2,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          checked:false
        }, {
          id : 3,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          checked:false
        }, {
          id : 4,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          checked:false
        }, {
          id : 5,
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          checked:false
        }, {
          id : 6,
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          checked:false
        }, {
          id : 7,
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          checked:false
        }],
        multipleSelection: [],
        selectAllStatus: false,
        isIndeterminate: false
      }
  },
   methods: {
    //  复选框点击操作
    checkBoxFn(row){
      const { id,checked } = row
      let validLen = 0
      let checkedLen = 0
      const list = [...this.tableData]
      list.forEach(item => {
        validLen ++
        if(item.id === id){
          item.checked = !checked
        }
        item.checked === false || checkedLen ++
      })
      this.tableData = list
      this.selectAllStatus = validLen === checkedLen
       console.log(this.selectAllStatus);
      this.isIndeterminate = checkedLen > 0 && checkedLen < validLen;
    },

  // 是否全选
  selectAllStatusFn( val ){
    const list = [...this.tableData]
      list.forEach(item => {
        item.checked = val
      })
      this.tableData = list
      this.selectAllStatus = val
      this.isIndeterminate = false
  },


// 与是否全选是一样的作用
  // selectAll( val ){
  //   this.tableData.forEach(item =>{
  //     res.checked = val.length > 0
  //   })
  // }


    //   toggleSelection(rows) {
    //     if (rows) {
    //       rows.forEach(row => {
    //         this.$refs.multipleTable.toggleRowSelection(row);
    //       });
    //     } else {
    //       this.$refs.multipleTable.clearSelection();
    //     }
    //   },
    //   handleSelectionChange(val) {
    //     this.multipleSelection = val;
    //   }
    }
}
</script>
<style>
 
 
</style>