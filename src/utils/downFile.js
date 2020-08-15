// https://www.jianshu.com/p/8ef2c7b8b46c
// https://www.cnblogs.com/ljwsyt/p/10485010.html

import { html2canvas } from 'html2canvas'
import Vuex from '../store'

function downFile (fileName, content) {
  const a = document.createElement('a')
  // const blob = new Blob([data]);
  const blob = base64ToBlob(content)
  const blobUrl = window.URL.createObjectURL(blob)

  const evn = document.createEvent('HTMLEvents')
  evn.initEvent('click', true, true) // 事件冒泡  阻止默认事件
  a.download = '<文件名>'
  a.href = blobUrl
  a.click()
}

// https://blog.csdn.net/return_js/article/details/95893182
function base64ToBlob (val) {
  var arr = val.split(';base64,')
  var contentType = arr[0].split(':')[1]
  var raw = window.atob(arr[1])
  var rawLength = raw.length
  var u8arr = new Uint8Array(rawLength)
  for (let i = 0; i < rawLength; ++i) {
    u8arr[i] = raw.charCodeAt(i)
  }
  return new Blob([u8arr], {
    type: contentType
  })
}

// https://www.cnblogs.com/padding1015/p/8947062.html
// https://www.cnblogs.com/padding1015/p/9225517.html
export default function screenShotClick (id) {
  Vuex.commit('setLoadingBox', true)
  var box = document.querySelector(`#${id}`)
  if (box) {
    setTimeout(() => {
      html2canvas(box, {logging: false, allowTaint: true}).then(res => {
        Vuex.commit('setLoadingBox', false)
        downFile('file.jpg', res.toDataURL())
      })
    }, 500)
  }
}
