<template>
  <div>
    <ul>
        <!-- <li>编号：{{$route.query.id||$route.params.id}}</li>
        <li>标题：{{$route.query.title||$route.params.title}}</li> -->
        
       
        <!-- <li v-if="a">a:{{a}}</li>
        <li v-if="b">b:{{b}}</li> -->
       <li>编号：{{id}}</li>
        <li>标题：{{title}}</li>
        
    </ul>
  </div>
</template>

<script>
export default {
    name:'detail',
    /* props:['a','b'] */
    props:['id','title']
}
</script>

<style>

</style>