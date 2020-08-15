<template>
  <el-card>
      <el-form-item
        label='上传图片:'>
        <el-input
          placeholder="请上传文件"
          v-model="file"
          :disabled="true">
          <el-button
            slot='append'
            @click="() => $refs['upload'].click()">
            <input ref="upload" v-show="false" type="file">
          </el-button>
        </el-input>

      </el-form-item>


  </el-card>
 
</template>
<script>
export default {
 data: () => {
     file:''
 }
 
}
</script>
<style>
 
 
</style>