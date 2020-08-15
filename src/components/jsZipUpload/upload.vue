<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="//fake-upload-url"
      :multiple="true"
      :auto-upload="false"
      :on-change="(_,fileList) => fileListElement = fileList">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="uploadFile">上传到服务器</el-button>
      <div slot="tip" :style="{color:hasReachFileSizeLimit? 'red' :''}">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fileListElement: [],
      fileId: '',
      hasReachFileSizeLimit: false
    }
  },
  computed: {
    hasReachFileSizeLimit () {
      return {
        (this.fileListElement || []) .reduce(
          (sum, file) => (sum += file.size),
          0
        ) > 5*1024*1024
      }
    }
  },
  methods: {
    async uploadFile () {
      // 1.判断是否选取文件以及文件大小是否满足条件 否则return
      try {
        // 2.
        const {JSZip} = await import('jszip')
        const zip = new JSZip()
        this.fileListElement.map(file => {
          zip.file(
            file.name,
            file.raw
          )
        })
        const content = await zip.generateAsync({type: 'blob'})
        const formData = new FormData()
        formData.append('name', 'file')
        formData.append('filename', 'xx.zip')
        formData.append('file', content)
        const res = await this.$http.request({
          method: 'POST',
          url: '', // 请求路径
          headers: {
            'content-type': 'multipart/form-data',
            'content-disposition': 'form-data'
          },
          data: formData
        })
        this.fileId = res
      } catch (e) {
      //  错误提示信息
      }
    }
  }
}
</script>
<style>

</style>
