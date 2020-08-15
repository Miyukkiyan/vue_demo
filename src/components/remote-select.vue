<template>
  <el-select v-model="value" placeholder="请选择" clearable
   remote
   reserve-keyword
   filterable
   :remote-method="remoteMethod"
   :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
 
</template>
<script>
import { log } from 'util'
 export default {
    data() {
      return {
        allOptions:[],
        options: [],
        loading: false,
        value: ''
      }
    },
    created() {
        this.getInitialData()
    },
    methods:{
        getInitialData(){
            this.allOptions = [
                {
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                },{
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                },
                 {
                  value: '选项6',
                  label: '黄糕'
                }, {
                  value: '选项7',
                  label: '皮奶'
                }, {
                  value: '选项8',
                  label: '仔煎'
                }, {
                  value: '选项9',
                  label: '须面'
                }, {
                  value: '选项10',
                  label: '北京鸭2'
                },
                 {
                  value: '选项11',
                  label: '北京鸭'
                }, {
                  value: '选项12',
                  label: '北京鸭3'
                }, {
                  value: '选项13',
                  label: '北京鸭4'
                },
                 {
                  value: '选项14',
                  label: '北京鸭5'
                },
                 {
                  value: '选项15',
                  label: '北京鸭6'
                },
                 {
                  value: '选项16',
                  label: '北京鸭7'
                },
                {
                  value: '选项17',
                  label: '双皮'
                }, 
            ]
            this.options = this.allOptions.slice(0,5)
        },
        remoteMethod(query){
                console.log(query);
               if (query !== '') {
                   this.loading = true
                   setTimeout(()=>{
                     this.loading = false
                     this.options = this.allOptions.filter(item => {
                      return item.label.indexOf(query) > -1
                    }).slice(0, 5) // 那么用户搜索的时候, 根据完整的列表来搜, 搜到的结果同样截取前50条, 不足50条忽略即可
                   },200)
                  } else {
                    this.options = this.allOptions.slice(0, 5) // 关键字为空的时候又将完整的列表数据截取前50条渲染回去
                  }
            }
    }
  }
</script>
<style>
  div {
    color: #fda468;
    color: #68a2fd
  }
 
</style>