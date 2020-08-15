<template>

 <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>

</template>

<script>
import date from 'date-php'

export default {
  data () {
    // 最大选择范围为1年
    const validatorDate = (rule, value, callback) => {
      if (!value || value === null || value.length === 1) {
        callback(new Error('请选择到账时间'))
      } else {
        let startDate = value[0]
        let endDate = value[1]
        let startYear = Number((startDate.split('-'))[0])
        let endYear = Number((startDate.split('-'))[0])
        let startMonth = Number((startDate.split('-'))[1])
        let endMonth = Number((startDate.split('-'))[1])
        let startDay = Number((startDate.split('-'))[2])
        let endDay = Number((startDate.split('-'))[2])
        let gap = endYear - 1
        if (startYear === endYear) {
          callback()
        } else if (startYear === gap) {
          if (startMonth === endMonth) {
            if (startDay >= endDay) {
              callback()
            } else {
              callback(new Error('最大选择范围为一年'))
            }
          } else if (startMonth > endMonth) {
            callback()
          } else {
            (
              callback(new Error('最大选择范围为一年'))
            )
          }
        } else {
          callback(new Error('最大选择范围为一年'))
        }
      }
    }
    return {
      formRules: {
        date: { required: true, validator: validatorDate, trigger: 'blur' }
      },

      pickerOptions: {
        onPick: value => {
          this.pickTime = value.minDate
        },
        disabledDate: time => {
          let resDate = new Date(time).getTime()
          let curDate = new Date(this.pickTime).getTime()
          let nowDate = new Date().getTime()
          if (curDate) {
            let Y = new Date(curDate).getFullYear()
            let m = new Date(curDate).getMonth()
            let d = new Date(curDate).getDate()

            const beginDate = new Date(Y, m - 1, d).getTime()
            let endDate = new Date(Y, m + 1, d).getTime()
            // 默认选择时间为用户点选日期前一个月或后后一个月 并且不能大于当前日期
            return !(resDate >= beginDate && resDate <= endDate && resDate < nowDate)
          } else {
            return resDate > nowDate
          }
        }
      },
      pickTime: '',

      pickerOptions () {
        let start = null
        const onPick = ({minDate}) => { start = minDate }
        const disabledDate = time => {
          const end = time.getTime()
          const reachFuture = end > Date.now()
          if (!start) return reachFuture
          start = new Date(start)
          return
          reachFuture || end > new Date(
            start.getFullYear() + 1,
            start.getMonth(),
            start.getDate()
          )
        }
      }

      // pickerOptions: {
      //   shortcuts: [{
      //     text: '最近一周',
      //     onClick(picker) {
      //       const end = new Date();
      //       const start = new Date();
      //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      //       picker.$emit('pick', [start, end]);
      //     }
      //   }, {
      //     text: '最近一个月',
      //     onClick(picker) {
      //       const end = new Date();
      //       const start = new Date();
      //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      //       picker.$emit('pick', [start, end]);
      //     }
      //   }, {
      //     text: '最近三个月',
      //     onClick(picker) {
      //       // console.log(picker);
      //       const end = new Date();
      //       const start = new Date();
      //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      //       picker.$emit('pick', [start, end]);
      //     }
      //   }]
      // },
      // value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ''
    }
  },
  created () {
    this.getInitialDate()
  },
  methods: {
    // 默认日期的设置
    // 1.从当前月第一天到当天
    // getInitialDate(){
    //   let c = new Date()
    //   let end = new Date()
    //   let day = new Date().getDate-1
    //   start.setTime(start.getTime()-3600*1000*24*day)
    //   // 此处可以引入date-php  格式化start end
    //   this.form.arriveDate = [start,end]
    // },

    // 2.从上月的某一天(当天)到当月的当天
    getInitialDate () {
      let d = new Date()
      const start = date('Y-m-', new Date(d.getFullYear(), d.getMonth(), 1) - 1000) + d.getDate()
      this.form.arriveDate = [start, date('Y-m-d', d)]
    },

    // 3.默认选择时间为用户点选日期前一个月或后后一个月 并且不能大于当前日期

    // 下载图片的方法
    // https://blog.csdn.net/mibi8840/article/details/86741982
    handleDownLoad (file) {
      const fileId = file.documentId
      const fileName = file.name
      this.$http.get(`${this.servicePath}/路径/fileId=${fileId}&fileName=${fileName}`, {responseType: 'blob'})
        .then(res => {
          res = res.data
          const link = document.createElement('a')
          let blob = new Blob([res], {type: 'application/vnd.ms-excel'})
          link.style.display = 'none'
          link.href = URL.createObjectURL(blob)
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        })
    }
  }

}
</script>
