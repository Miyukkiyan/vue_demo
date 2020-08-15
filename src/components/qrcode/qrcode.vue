// https://blog.csdn.net/weixin_42890953/article/details/82776760

<template>
  <div>
    <el-popover
      placement="top"
      trigger="click">
      <canvas
      v-if="this.url"
      ref="qrcode"
      width="400"
      height="400"
      ></canvas>
      <el-button slot="reference" @click="e=>getQrcode(e)">click 激活</el-button>
    </el-popover>
  </div>
</template>
<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  methods: {
    getQrcode (e) {
      const getUrl = async () => {
        if (this.url) {
          return this.url
        }
        // 掉接口获取url
        // const res = await this.$http.
        return this.url
      }
      const jobs = [
        import(
          'qrcode'
        ),
        getUrl()
      ]
      const [Qrcode,url] = await Promise.all(jobs)
      if(!url) {
        // 提示无效链接  return
      }
      Qrcode.toCanvas(
        this.$refs['qrcode'],
        url,
        {
          width:200,
          margin:0
        },
        (err) => {
          // 提示错误信息
        }
      )
    }
  }
}
</script>
<style>

</style>
