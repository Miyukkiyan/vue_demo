<template>
  <div>
    <table  v-for="(item,index) in arr" :key = index  border="1" cellspacing="0" align="center" width="1200px" height="50px">
        <tr>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
        </tr>

    </table>
    <!-- <button @click="getAge">点击</button> -->
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
    objToTable2:{}
   }

 },
//  beforeRouteEnter (to, from, next) {
//     if(from.name === 'table'){
//         // console.log(from);
        
//         let obj = from.query.obj
//         console.log(obj);
//          let count = 0
//          console.log(this);
         
//         //   this.$set(
//         //    this.arr.map((item,index)=>{
//         //    if(count == index) {
//         //      item.age = obj[Object.keys(obj)[count]]
//         //      count ++
//         //      // break
//         //    }
//         //  })
//         // )
//         next()
//     }
//  },
mounted() {
    this.objToTable2 = this.$route.query
    this.getInitialData()
},
 methods: {

     getInitialData(){
         if(this.objToTable2){
             let count = 0
             this.$set(
               this.arr.map((item,index)=>{
               if(count == index) {
                 item.age = this.objToTable2[Object.keys(this.objToTable2)[count]]
                 count ++
                 // break
               }
             })
            )
         }
     }

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
//    getAge(){
//      let obj ={
//       age1: 18,
//       age2: 12
//       }
      
//     let count = 0
    // this.arr.map((item,index)=>{
    //   if(count == index) {
    //     item[Object.keys(obj)[count]] = obj[Object.keys(obj)[count]]
    //     count ++
    //     // break
    //   }
    // })
   
//     // console.log(this.arr)
    
//    this.$set(
//       this.arr.map((item,index)=>{
//       if(count == index) {
//         item.age = obj[Object.keys(obj)[count]]
//         count ++
//         // break
//       }
//     })
//    )
//    }
 },
 
}
</script>
<style>
 
 table {
    margin-bottom: 20px;
 }
 
</style>