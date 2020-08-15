<template>
    <el-cascader 
    :props="props"
    @active-item-change="handleChange"
    :options="options"
    v-model="dataModel">
</el-cascader>
 
</template>
<script>
export default {
 data (){
    return {
      props: {
        label: 'name',
        lazy: true, 
        async lazyLoad(node, resolve) {    
          const { data } = node
          if (data && data.children && data.children.length !== 0) {
            return resolve([])
          }
          const params = {

          }
          if (data) {   //判断data是不是空，如果不是，将data中的某个数据拿出来作为参数传递
            params['block'] = data['siteId'] || ''
            params['blId'] = data['blId'] || ''
            params['flId'] = data['flId'] || ''
          }
          // console.log(data)
          // console.log(params)
          try {
           // const r = await getLocation(params)   调用接口
            const targetData = []
            for (const item of r.data) {
              //将拿到的数据一层一层拿出来处理
              const temp = {
                siteId: item['siteId'] || '',
                blId: item['blId'] || '',
                flId: item['flId'] || '',
                rmId: item['rmId'] || '',
                name: item['name'] || '未命名',
                leaf: item['leaf'], //后端数据中leaf一开始要为false,最后一次的时候才为true 
                children: item['children'] || []
              }
              temp['value'] = temp['rmId'] || temp['flId'] || temp['blId'] || temp['siteId']   //将拿出来的值从小到大赋值
              targetData.push(temp)//然后push到节点中
            }
            resolve(targetData)
          } catch (e) {
            console.log(e)
            resolve([])
          }
        }
      },
    }
 }
 
}
</script>
<style>
 
 
</style>