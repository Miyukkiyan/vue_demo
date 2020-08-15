<template>
 
 <!-- <label>发出省市</label> -->
<el-cascader v-model="sendAddress" :options="provenceArray" 
  @active-item-change="handleItemChange" :props="props">
</el-cascader>
</template>
<script>
export default {
 // data
provenceArray: [],    
props:{
    label: 'areaName',
    value: 'areaId',
    children: 'cities'
},



// ajax 获取省, 同时修改数组对象，每一项添加一个属性cities,并设置为空数组
getProvence() {
  $api.searchAreaInfo({
    parentId: 0
  }).then((res) => {
    this.provenceArray = res && res.data && res.data.data || []
    this.provenceArray.forEach((item,index)=>{
      this.provenceArray[index].cities = [] // 视图未更新
      // this.$set(this.provenceArray[index], 'cities', []) // right
    })
  })
},

// 利用active-item-change事件，可以在用户点击某个省份时拉取该省份下的城市数据
handleItemChange(val) {
  let value = val[0]
  $api.searchAreaInfo({
    parentId: value
  }).then((res) => {
    let cities = res && res.data && res.data.data || []
    for(let i = 0; i < this.provenceArray.length; i++) {
      if(this.provenceArray[i].areaId === value) {
        this.provenceArray[index].cities = cities // 视图未更新
        // this.$set(this.provenceArray[i], 'cities', cities) // right
        break;
      }
    }
  })
}


 
}
</script>
<style>
 
 
</style>