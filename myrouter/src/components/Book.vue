<template>
    <div>
        <p>图书ID:{{book.id}}</p>
        <p>书名:{{book.title}}</p>
        <p>详情:{{book.desc}}</p>
    </div>
</template>
<script>
import books from '@/data/books'
export default ({
    data() {
        return{
            book:{}
        }
    },
    created(){
        this.book=books.find(item=>item.id==this.$route.params.id)
        console.log(this.$route.params.id);
      
        console.log(this.book);
    },
    watch:{
        '$route'(to){
             this.book=books.find(item=>item.id==to.params.id) ;
        console.log(to)
        }
        
    } ,
    /* watch:{
        '$route':{
            handler(to){
             this.book=books.find(item=>item.id==to.params.id) 
            },
            immediate:true
        }
    } */
    beforeRouteUpdate(to){
        this.book=books.find(item=>item.id==to.params.id)
    }
})
</script>
