import { get } from "https";

// https://blog.csdn.net/hani_wen/article/details/81952001   文件下载及上传

// 这里应该有获取fileName.filePath的方法

// const blob = await this.$http.request({
//     filePath,
//     method: "GET",
//     respons: 'blob'
// })

export function download(blob,fileName){
    if(!blob) {
        return
    }

    if(!blob instanceof Blob) {
        blob = new Blob(Array(blob))
    }

    if (window.navigator.msSaveOrOpenBlob) {
        // 兼容IE10
        navigator.msSaveBlob(blob, fileName)
      } else {
        //  chrome/firefox
        let aTag = document.createElement('a')
        aTag.download = fileName
        aTag.href = URL.createObjectURL(blob)
        aTag.click()
        URL.revokeObjectURL(aTag.href)
      }
}

// axios.post('/rest/inventory/oh_status/info/excel', {
//     site: this.selectedsite,
//     bu: this.selectedbu,
//     ohHealthStatus: this.selectedtitle,
//     ohHealthRootcause: this.selectedblock,
//     search: this.search,
//     sort: this.sort
//   }, {responseType: 'arraybuffer'}).then(this.ExportFile).catch(function (error) {
//     console.log(error)
//   })

//  this.content = content
//   this.filename = filename
//   const blob = new Blob([this.content])
// if (window.navigator.msSaveOrOpenBlob) {
//     // 兼容IE10
//     navigator.msSaveBlob(blob, this.filename)
//   } else {
//     //  chrome/firefox
//     let aTag = document.createElement('a')
//     aTag.download = this.filename
//     aTag.href = URL.createObjectURL(blob)
//     aTag.click()
//     URL.revokeObjectURL(aTag.href)
//   }
  