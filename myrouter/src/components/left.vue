<template>
  <div>
    <ul>
        <li v-for="n in note" :key="n.id">
            <router-link :to="{
                /* path:'/news/right/detail', */
                name:'details01',/* 路由命名 */
                params:{
                    id:n.id,
                    title:n.title
                }
            }">
            {{n.title}}
            </router-link>
        </li>
    </ul>
        <router-view></router-view>
        <ul>
                <li>news001 <input type="text" v-model="x"></li>
                <li>news002 <input type="text" ></li>
                <li>news003 <input type="text"></li>
        </ul>

    

        
  </div>
</template>

<script>
export default {
    name:'left',
    data(){
        return{
            note:[
                {id:'03',title:"new03"},
                {id:'02',title:"new02"},
                {id:'01',title:"new01"}
            ],
            x:''
        }
    }
}
</script>

<style>

</style>