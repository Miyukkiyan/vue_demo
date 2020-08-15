<template>
 <div>
    <el-select v-model="value" placeholder="请选择" @change = "change">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.id">
        </el-option>
  </el-select>

  <tableOne v-if = '1 === value' />
  <tableTwo v-if = " 2 === value" :excelData = excelData @getExcelData = 'getExcelData'/>

 </div>
 
</template>
<script>
import tableOne from './components/table'
import tableTwo from './components/tableTwo'

export default {
 components: {
     tableOne,
     tableTwo
 },
 data(){
     return {
        value:'',
        excelData:[],
        options:[
            {id:1,label:'表1'},
            {id:2,label:'表2'},
        ]  
     }
 },
 methods:{
     change(){
         console.log(this.value);
     },
      getExcelData(){
         this. excelData = [  // 测试数据
          {
            name: '红烧鱼x', size: '大', taste: '微辣', price: '40', remain: '100'
          },
          {
            name: '麻辣小龙虾c', size: '大', taste: '麻辣', price: '138', remain: '200'
          },
          {
            name: '清蒸小龙虾v', size: '大', taste: '清淡', price: '138', remain: '200'
          },
          
        ]
     }
 }
}
</script>
<style>
 
 
</style>