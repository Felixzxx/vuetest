import Home from "@/components/Home"
import News from "@/components/News"
import Books from "@/components/Books"
import Video from "@/components/Video"
import Book from '@/components/Book'
import left from '@/components/left'
import right from '@/components/right'
import detail from '@/components/detail'
import login from '@/components/login'
import { createRouter,createWebHashHistory } from 'vue-router'
const routes=[
    {path:'/',component:Home},
    {
        path:'/news',
        component:News,
        children:[
            {path:'left',
            component:left,
            children:[
                {name:'details01',path:'detail/:id/:title',component:detail}
            ]
            },
            {path:'right',
            component:right,
            children:[
                {name:'details02',path:'detail',component:detail,
                /* props第一种写法 ：值为对象，该对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件*/
                //props:{a:'1',b:'hello'}只能传固定的值
                /* props第二种写法 ：值为布尔值，为true时，则把路由收到的所有params参数通过props传给Detail组件*/
                //props:true有局限性，只能传params参数
                /* props第三种写法，值为函数*/
                props(route){
                    return{
                        id:route.query.id,
                        title:route.query.title,
                    }
                }
                }
            ],
            
            }

        ]
    },
    {
        path:'/books',
        component:Books,
        /* children:[
            {path:'/book/:id',component:Book}
        ] */
    },
    {path:'/video',component:Video},
    /* {path:'/book',component:Book}, */

    {/* 命名视图*/
        path:'/book/:id',
        name:'book',
        components:{bookDetail:Book}
    },
    {/* 命名视图*/
    path:'/login',
    name:'login',
    components:login
}
]

/* 创建并暴露路由器 */
export default createRouter({
    history:createWebHashHistory(),
    routes
})