// 自定义指令

import store from '@/store'

export default {
    inserted (el,binding,vnode){
        const {value} = binding
        const role = store.gettters && store.gettters.currentRole
        if(value && value instanceof Array && value.length >0){
            const hasPermission = value.includes(role)

        if(!hasPermission){
            el.parentNode && el.parentNode.removeChild(el)
        } else {
            throw new Error('needs rows,like v-permission = ["1","2"]')
        }   
    }
}}