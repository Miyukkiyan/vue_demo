<template>
    <div>
      <el-table :data="excelData" tooltip-effect="dark">
        <el-table-column label="名称" prop="name" show-overflow-tooltip></el-table-column>
        <el-table-column label="分量" prop="size" show-overflow-tooltip></el-table-column>
        <el-table-column label="口味" prop="taste" show-overflow-tooltip></el-table-column>
        <el-table-column label="单价(元)" prop="price" show-overflow-tooltip></el-table-column>
        <el-table-column label="剩余(份)" prop="remain" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
 
</template>
<script>
import { get } from 'https'
export default {
    props:{
        excelData: {
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            // excelData: []
        }
    } ,
    
    mounted(){
        this.getExcelData()
    },

    methods:{
         getExcelData(){
             this.$emit('getExcelData')

        //  this. excelData = [  // 测试数据
        //   {
        //     name: '红烧鱼x', size: '大', taste: '微辣', price: '40', remain: '100'
        //   },
        //   {
        //     name: '麻辣小龙虾c', size: '大', taste: '麻辣', price: '138', remain: '200'
        //   },
        //   {
        //     name: '清蒸小龙虾v', size: '大', taste: '清淡', price: '138', remain: '200'
        //   },
          
        // ]
     }
    }
 
}
</script>
<style>
 
 
</style>