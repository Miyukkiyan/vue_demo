import { get } from 'lodash-es'

import { RECEIPT_STATE } from ''

export default {
    typeMode:[
        { required: true, message: '请选择', trigger: 'change' },
    ],
    periodMode:[
        { required: true,
          validator: ( _, value, callback )=> {
            if(context.state === RECEIPT_STATE ){
                callback();
            }
            if(!get(value,'0') || !get(value,'1')) {
                callback(new Error('请选择日期'));
                return
            }
            const period = Math.abs(Date.parse(value[1])-Date.parse(value[0]))
            if(period >
                365*24*60*60*1000){
                    callback(new Error('最大选择范围为一年'));
                    return
                }
             else{
                callback();
             }   
          },
          trigger: 'blur'
        }
    ]  
}











// _____________________________________________________________________

export default {
    typeMode:[
        { required: true, message: '请选择', trigger: 'change' },
    ],
    periodMode:[
        { required: true,
          validator: ( _, value, callback )=> {
            if(!get(value,'0') || !get(value,'1')) {
                callback(new Error('请选择日期'));
                return
            }
            const period = Math.abs(Date.parse(value[1])-Date.parse(value[0]))
            if(period >
                30*24*60*60*1000){
                    callback(new Error('最大选择范围为一个月'));
                    return
                }
             else{
                callback();
             }   
          },
          trigger: 'blur'
        }
    ]
}

