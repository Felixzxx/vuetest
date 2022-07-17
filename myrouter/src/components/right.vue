<template>
  <div>
    <ul>
        <li v-for="n in note" :key="n.id">
            <router-link :to="{
                /* path:'/news/right/detail', */
                name:'details02',/* 路由命名 */
                query:{
                    id:n.id,
                    title:n.title
                }
                
            }">
            {{n.title}}
            </router-link>
            <button @click="showPush(n)">push查看</button>
            <button @click="showReplace(n)">replace查看</button>
        </li>
    </ul>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'right',
    data(){
        return{
            note:[
                {id:'01',title:"new01"},
                {id:'02',title:"new02"},
                {id:'03',title:"new03"}
            ]
        }
    },
    methods:{
        showPush(n){
            this.$router.push({
                name:'details02',
                query:{
                    id:n.id,
                    title:n.title
                }
            })
        },
        showReplace(n){
            this.$router.replace({
                name:'details02',
                query:{
                    id:n.id,
                    title:n.title
                }
            })
        }
    }
}
</script>

<style>

</style>