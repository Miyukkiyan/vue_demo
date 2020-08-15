<template>
      <el-date-picker
    v-model="exCheckDate"
    type="date"
    :picker-options="pickerOptions"
    value-format="yyyy-MM-dd"
    placeholder="Please select">
  </el-date-picker>

</template>

<script>
export default {
    // picker-options的值是一个对象,他的disabledDate属性可以设置禁用日期,有一个参数是当前选择的日期
  // data () {
  //   return {
  //     exCheckDate:''  ,
  //   //   pickerOptions: {}, // 日期设置对象  方法一

  //   //  方法二
  //     pickerOptions: {
  //       // disabledDate是一个函数,参数是当前选中的日期值,这个函数需要返回一个Boolean值,
  //       disabledDate: (time) => {
  //         // 如果函数处理比较简单,可以直接在这里写逻辑方法
  //       //   return time.getTime() < Date.now() - 8.64e7

  //         // 如果函数里处理的数据比较麻烦,也可以单独放在一个函数里,避免data数据太臃肿
  //         return this.dealDisabledDate(time)
  //       }
  //     }, // 日期设置对象
    
  //   }
  // },

//   methods: {
//     // 单独处理时间的函数
//     dealDisabledDate (time) {
// //       // 这里算出一个月的毫秒数,这里使用30的平均值,实际中应根据具体的每个月有多少天计算
// //       let day = 30 * 24 * 3600 * 1000
// //       let dateRegion = curDate + day
// //       return time.getTime() < Date.now() - 8.64e7 || time.getTime() > dateRegion

// //       // 设置选择的日期小于当前的日期,小于返回true,日期不可选
// //       // return time.getTime() < Date.now() - 8.64e7
// //     }
//   }

}

</script>

<style>
body {
  
}
</style>
