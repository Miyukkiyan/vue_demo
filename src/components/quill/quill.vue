<template>
<div>
    <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                @change="onEditorChange($event)">
    </quill-editor>
  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
</div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
  data () {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        // some quill options
      },
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  mounted () {
    this.content = `<h2>I am Example</h2>
         <p>在有这么参考的情况下，我最终还是选择了 </p>`
  },
  // beforeDestroy(){
  //     this.editor = null;
  //     delete this.editor;
  // },
  methods: {
    // 准备富文本编辑器
    onEditorReady (editor) {},
    // 富文本编辑器 失去焦点事件
    onEditorBlur (editor) {},
    // 富文本编辑器 获得焦点事件
    onEditorFocus (editor) {},
    // 富文本编辑器 内容改变事件
    onEditorChange ({ quill, html, text }) {
      console.log(quill)
      console.log(html)
      console.log(text)
    }
  }
}
</script>
<style>
.ql-editor {
  /* height: 300px; */
}

</style>
