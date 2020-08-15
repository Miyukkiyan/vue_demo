<template>
  <section>
    <div style="margin-bottom:20px" v-for="(item,index) in detail" :key=index>
      <el-checkbox v-model="checked[index]" style="margin-bottom:10px"></el-checkbox>
      <editor-bar v-model="detail[index]" @change="change"></editor-bar>
    </div>
    <!-- <div style="margin-bottom:20px">
      <el-checkbox v-model="checked[1]" style="margin-bottom:10px"></el-checkbox>
      <editor-bar v-model="detail[1]" @change="change"></editor-bar>
    </div> -->
    <el-button @click="submit">提交</el-button>
  </section>
</template>
<script>
import EditorBar from './wangedit'

export default {
  components: { EditorBar },
  data () {
    return {
    // 编辑器
    // isClear: false,
      detail: ['<h1>Example</h1>', '<h2>I am Example</h2>'],

      checked: [false, false],
      editData: []
    }
  },
  mounted () {

  },
  methods: {
    change (val) {
      console.log(val)
    },
    submit () {
      console.log(this.detail)
      console.log(this.checked)
    }

  }

}
</script>
<style>

</style>
