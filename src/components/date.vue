
<template>
  <div class="block">

   <el-form-item label="预约时间" prop="date">
	<el-date-picker
		v-model="searchForm.date"
		type="daterange"
		clearable
		:editable="false"
		format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
		range-separator="至"
		start-placeholder="开始日期"
		end-placeholder="结束日期"
		:picker-options="pickerOptions">
    </el-date-picker>
   </el-form-item>
  </div>
 
</template>
<script>
export default {
  data(){
        return{
               pickerOptions: {
					onPick: ({maxDate, minDate}) => {
						this.selectDate= minDate.getTime();
						if (maxDate) {
						this.selectDate= ''
						}
					}, disabledDate: (time) => {
						if (this.selectDate!== '') {
						const one = 30 * 24 * 3600 * 1000;
						const minTime = this.selectDate;
						const maxTime = this.selectDate + one * 3;
						return time.getTime() < minTime || time.getTime() > maxTime
						}
					}
                },
               searchForm: {
                   date:''
               } 
			}
		}
 
}
</script>