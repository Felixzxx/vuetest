<template>
  <div>
    <h3>新闻列表</h3>
    <router-link to="/news/left">left</router-link>
    <router-link to="/news/right">right</router-link>
  <!--   <keep-alive include="left">
      <router-view></router-view>
    </keep-alive>
 -->
    <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>

  </div>
</template>

<script>
export default {
  name:'News'
}
</script>

<style>

</style>