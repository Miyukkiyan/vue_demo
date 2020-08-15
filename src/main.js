// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 无限滚动
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 打印功能
import Print from 'vue-print-nb'
Vue.use(Print); //注册

// 打印pdf
import htmlToPdf from '@/utils/html2pdf'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

  // 6.引入富文本编辑器
  import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

// 富文本编辑器2
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
