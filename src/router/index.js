import Vue from 'vue'
import Router from 'vue-router'

import Vux1 from '../components/vux1.vue'
import InfiniteScroll from '../components/infiniteScroll.vue'

Vue.use(Router)
// import ElDate from '../components/el-date.vue'

export default new Router({
  routes: [
    {
      path: '/vux1',
      name: 'vux1',
      component: Vux1
    },
    {
      path: '/infiniteScroll',
      name: 'InfiniteScroll',
      component: InfiniteScroll
    },
    {
      path: '/el-date',
      name: 'ElDate',
      // component: ElDate
      component: () => import('../components/el-date.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/el-date2',
      name: 'ElDate2',
      // component: ElDate
      component: () => import('../components/el-date2.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/el-input',
      name: 'ElIput',
      // component: ElDate
      component: () => import('../components/el-input.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/print',
      name: 'Print',
      // component: ElDate
      component: () => import('../components/print.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/date',
      name: 'date',
      // component: ElDate
      component: () => import('../components/date.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/rememberPage',
      name: 'rememberPage',
      // component: ElDate
      component: () => import('../components/rememberPage.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/table',
      name: 'table',
      // component: ElDate
      component: () => import('../components/table.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/table2',
      name: 'table2',
      // component: ElDate
      component: () => import('../components/table2.vue') // 此种写法也要掌握,比上边的写法简单
    },
    {
      path: '/form',
      name: 'form',
      // component: ElDate
      component: () => import('../components/form.vue')
    },
    {
      path: '/table-multipleSelect',
      name: 'tableMultipleSelect',
      // component: ElDate
      component: () => import('../components/table-multipleSelect.vue')
    },
    {
      path: '/remote-select',
      name: 'remoteSelect',
      // component: ElDate
      component: () => import('../components/remote-select.vue')
    },
    {
      path: '/pdf',
      name: 'pdf',
      // component: ElDate
      component: () => import('../components/pdf/pdf.vue')
    },
    {
      path: '/exportExcel',
      name: 'exportExcel',
      // component: ElDate
      component: () => import('../components/export-excel/exportExcel.vue')
    },
    {
      path: '/report',
      name: 'report',
      // component: ElDate
      component: () => import('../components/report/report.vue')
    },
    {
      path: '/inputRelation',
      name: 'inputRelation',
      // component: ElDate
      component: () => import('../components/inputRelation.vue')
    },
    {
      path: '/quill',
      name: 'quill',
      // component: ElDate
      component: () => import('../components/quill/quill.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      // component: ElDate
      component: () => import('../components/upload/upload.vue')
    },
    {
      path: '/wangEdit',
      name: 'wangEdit',
      // component: ElDate
      component: () => import('../components/quill/wangEdit.vue')
    },
    {
      path: '/wangedit2',
      name: 'wangedit2',
      // component: ElDate
      component: () => import('../components/wangedit/wangedit2.vue')
    },
    {
      path: '/cascader',
      name: 'cascader',
      // component: ElDate
      component: () => import('../components/cascader.vue')
    },
    {
      path: '/el-table',
      name: 'el-table',
      // component: ElDate
      component: () => import('../components/el-table.vue')
    },
    {
      path: '/el-checkbox',
      name: 'checkbox',
      // component: ElDate
      component: () => import('../components/el-checkbox/el-checkbox.vue')
    }
  ]
})
