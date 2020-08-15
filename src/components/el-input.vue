<template>
 
 <div>

     <!-- <el-input  placeholder="请输入内容" class="aa">

     </el-input> -->
     <!-- <el-input  placeholder="请输入内容" class="aa"></el-input> -->
     <!-- <el-button v-if="collapse" @click='first'>展开</el-button>
     <template v-if="!collapse">
         <el-input  placeholder="请输入内容" class="aa"></el-input>
        <el-input  placeholder="请输入内容" class="aa"></el-input>
     </template>
     <el-button v-if="!collapse" @click='first'>收起</el-button> -->

       <el-select v-model="taskId" popper-class="selectJob" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            <div style="text-align: center">
                <span class="text" @click.stop="prevePage">上一页</span>
                <span class="text" style="padding-left: 30px" v-show="selectPage !== pageCount" @click.stop="nextPage">下一页</span>
            </div>
        </el-select>


 </div>
 
  
</template>
<script>
export default {
 data(){
     return {
         input:'',
         collapse:true,
         taskId:'',

          total: null, // 获取总数据量
          pageCount: null, // 获取总页数
          selectPage: 1, // 当前页数
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
     }

 },
 methods: {
    first(){
        this.collapse = !this.collapse
    },
    getSelectList(){
      let obj = Object.assign({}, 
     {currentPage:this.selectPage,pageSize: 20}, form);
      restoreList(obj).then(res => {
        if (res.data.data && !res.data.data.hasOwnProperty('list')) { this.restoreTable = []; return; };
        this.restoreTable = res.data.data.list;
        this.total = (res.data.data && res.data.data.totalSize); // 数据总数量
        this.pageCount = Math.ceil(this.total / 20); // 因为我每次只请求20条， 所以算出总页数
        this.taskId = this.restoreTable[0].id; // 因为每次都选取第一条数据;
      });
    },
     prevePage () {
      --this.selectPage;
      if (this.selectPage < 1) { // 判断点击的页数是否小于1
        this.selectPage = 1;
      };
      this.getTableList();
    },
    nextPage () {
      if (this.selectPage < this.pageCount) { // 判断点击的页数是否小于总页数;
        ++this.selectPage;
        this.getTableList();
      }
    }
},
 
}
</script>
<style scoped>
    .aa {
        width: 400px
    }
    .selectJob 
        span {
            width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }
    .selectJob .text {
            padding-left: 10px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            color: cornflowerblue 

    }
   
</style>