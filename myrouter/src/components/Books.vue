<template>
  <div>
    <h3>图书列表</h3>
    <ul>
      <li v-for="book in books" :key='book.id'>
        <router-link active-class="a"   :to="'/book/'+book.id">{{book.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
console.log()
import books from '@/data/books'
export default {
  data(){
    return{
      books
    }
  }
}
</script>

<style>
.a{
  color:brown;
}
</style>