<template>
  <div>
      <div id="pdfCentent">
         <!-- 要下载的HTML页面,页面是由后台返回 -->
        123456789000000000
      </div>
      
<el-button type="danger"
                   @click="ExportSavePdf(htmlTitle,nowTime)">导出PDF</el-button>
      <!-- <el-button type="primary" size="small" @click="getPdf('#pdfDom')">点击下载</el-button> -->

<br>

  <el-input v-model='text' class="myinput">
         
  </el-input>
  </div>
 
</template>
<script>
export default {
     data () {
      return {
       htmlTitle: "PDF名称",
          nowTime: "",
          text: 'svx d '
      }
  }
 
}
</script>
<style>
 .myinput {
   width: 200px;
   margin-top: 20px;
 }

 .myinput input {
   border: none
 }
 
</style>