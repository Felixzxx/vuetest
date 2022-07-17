<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link replace to="/">首页</router-link>
      <router-link replace to="/news">新闻</router-link>
      <router-link replace to="/books">图书</router-link>
      <router-link replace to="/video">视频</router-link>
      <router-link replace to="/login">login</router-link>
      <br/>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试go</button>
<!--       <router-link to="/book?id=1">图书1</router-link>
      <router-link to="/book?id=2">图书2</router-link> -->
    </p>
    <router-view></router-view>
    <router-view name="bookDetail"></router-view>
</div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    test(){
      this.$router.go(3)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
