<template>
    <div>
        <el-select @change="selectChange" v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="type" placeholder="请选择">
            <el-option
            v-for="item in optionsType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
            </el-option>
        </el-select>
    </div>
 
</template>
<script>
export default {
    data(){
        return {
            value:'',
            type:'',
            options:[
                {value: 'excel', label:'excel'},
                {value: 'word', label:'word'},
            ],
            optionsType:[
                {value: 'unit', label:'单表', disabled:false},
                {value: 'all', label:'多表',disabled:false},
                {value: 'overall', label:'整体'},
            ]
        }
    },
    methods:{
        selectChange(){
            const optionsType1 = [
                {value: 'unit', label:'单表', disabled:false},
                {value: 'all', label:'多表',disabled:false},
                {value: 'overall', label:'整体',disabled:false},
            ]
            const optionsType2 = [
                    {value: 'overall', label:'整体',disabled:false},
                ]
           this.optionsType = this.value === 'word'? optionsType2 : optionsType1
  
        }
    }
 
}
</script>
<style>
 
 
</style>