<template>
  <div>
    
        <spinner :type="ios" :size="'40px'"></spinner>
     <divider>{{ msg }}</divider>
  </div>
</template>

<script>
import { Spinner,Divider } from 'vux'

export default {
    data(){
        return {
         msg: "我是有底线的"   
        }
    },
  components: {
    Spinner,
    Divider
  },
 
}
</script>