<template>
  <div>
    <table  v-for="(item,index) in arr" :key = index  border="1" cellspacing="0" align="center" width="1200px" height="50px">
        <tr>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
        </tr>

    </table>
    <button @click="getAge">点击</button>
    <button @click="toTable2">去table2</button>
  </div>
   
 
</template>
<script>
export default {
 data(){
   return {
      arr : [
          {name:'张三',sex:'男',age:''},
          {name:'李四',sex:'女',age:''}
        ],
      objToTable2:{} ,
   }

 },
 beforeRouteLeave (to, from, next) {
 if(to.name === 'table2'){
   from.query.obj = this.objToTable2
  //  console.log(from);
   
 }
//  console.log(to);
 
   next()
 },
 methods: {
   toTable2(){ 
    // //  const query = this.objToTable2
    //  const view = {name:'table2',query}
    //  this.$router.push(view)
    this.$router.push('/table2')
   },

  //  __________________________________________________________________________
  //  getNewArr(arr,obj){
  //    let count = 0
  //   arr.map((item,index)=>{
  //     if(count == index) {
  //       item[Object.keys(obj)[count]] = obj[Object.keys(obj)[count]]
  //       count ++
  //       // break
  //     }
  //   })
  //   return arr
  //  },
   getAge(){
     let obj ={
      age1: 18,
      age2: 12
      }
    this.objToTable2 = obj
    let count = 0
    // this.arr.map((item,index)=>{
    //   if(count == index) {
    //     item[Object.keys(obj)[count]] = obj[Object.keys(obj)[count]]
    //     count ++
    //     // break
    //   }
    // })
   
    // console.log(this.arr)
    
   this.$set(
      this.arr.map((item,index)=>{
      if(count == index) {
        item.age = obj[Object.keys(obj)[count]]
        count ++
        // break
      }
    })
   )
   }
 },
 
}
</script>
<style>
 
 table {
    margin-bottom: 20px;
 }
 
</style>