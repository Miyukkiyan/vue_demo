<template>
    <section>

        <div class="editor" id="editor" ref="editor"></div>
        <el-button @click="tijiao">提交</el-button>
    </section>

</template>
<script>
import E from 'wangeditor'

export default {
  data () {
    return {
      editor: '',
      content: ''
    }
  },

  mounted () {
    // console.log(this);
    this.editor = new E('#editor')// new即可
    // 下面的为一些配置参数，默认全部都有，我们需要那些留下那些即可
    this.editor.customConfig.menus = [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      // 'link',  // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      // 'emoticon',  // 表情
      // 'image',  // 插入图片
      'table', // 表格
      // 'video',  // 插入视频
      // 'code',  // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ]
    // change事件，当富文本编辑器内容发生变化时便会触发此函数
    this.editor.customConfig.onchange = text => {
      console.log(this)
      this.content = text
      console.log(this.content)
    }
    this.editor.create()// 以上配置完成之后调用其create()方法进行创建
    this.editor.txt.html('<p>欢迎使用wangEditor编辑器</p> <h3>afzvs</h3>')// 创建完成之后的默认内容
  },
  methods: {
    // 点击事件，拿到富文本编辑器里面的值
    tijiao () {
      //  console.log(this.editor.txt.html());
      console.log(this.content)
    }
  }
}
</script>
<style>
  .editor{
    width: 100%;
    height: 300px;
    margin-bottom: 40px;
  }
   .a-btn{
    padding-bottom: 80px;
  }
  .a-btn a{
    display: block;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    width: 100px;
    text-align: center;
    float: right;
    background: dodgerblue;
  }

</style>
