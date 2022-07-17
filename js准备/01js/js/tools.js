//尝试创建一个可以执行动画的函数
        /* 
        参数：
            obj：要执行动画的对象
            attr:要执行动画的样式 比如left top width height
            target:执行动画的目标位置
            speed:移动的速度
            callback:回调函数 会在动画执行完毕以后执行
       
            } */
function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);//obj.timer元素自己的定时器
    //判断速度的正负
    //如果从0->800,则speed为+
    //如果0<-800,则speed为-
    var current=parseInt(getStyle(obj,attr));
    if(current>target){
        speed=-speed;
    }
       obj.timer=setInterval(function(){
            var oldValue=parseInt(getStyle(obj,attr));
            /* alert(oldValue); */
            var newValue=oldValue+speed;
            //向左移动时，需要判断newValue是否小于target
            if(speed<0 && newValue<target||speed>0 && newValue>target){
                newValue=target;
            }
            
            
            obj.style[attr]=newValue+"px";

            if(newValue==target){
                //达到目标关闭定时器
                clearInterval(obj.timer);
                callback && callback();
            }
        },30);//每多少秒动一下
}

/* 定义一个函数，用来获取指定元素的当前的样式
    参数：
        ojb 要获取样式的元素
        name 要获取的样式名 */
function getStyle(obj,name){
    
        if(window.getComputedStyle){
            //winldow:没有window时，getComputedStyle是一个变量，会在作用域中寻找，再到全局中寻找，都没找到会返回错误
            //加了window后，getComputedStyle变成了变量的属性
            return getComputedStyle(obj,null)[name];
        }else{
            return obj.currentStyle[name];
        }
    }



 //定义一个函数用来向一个元素中添加指定的class属性值
        /* 参数：
            obj要添加class属性的元素
            cn 要添加的class值 */
            function addClass(obj,cn){
                //检查obj中是否含有cn
                if(!hasClass(obj,cn)){
                    obj.className+=" "+cn;
    
                }
            }
    
            //判断一个元素中是否含有指定class属性值
            //如果有该class则返回true,没有则返回false
            function hasClass(obj,cn){
                //判断obj中有没有cn class
                //创建正则表达式看看有没有b2
                /* var reg=/\bb2\b/;   *//* \b为单词边界，b2为独立的 */ 
    
                var reg=new RegExp("\\b"+cn+"\\b");
                return reg.test(obj.className);
            }
            function removeClass(obj,cn){
                var reg=new RegExp("\\b"+cn+"\\b");
                //删除class
                obj.className=obj.className.replace(reg,"");
            }
    
            /* toggleClass可以用来切换一个类
            如果元素中具有该类，则删除
            如果元素中没有该类，则添加 */
            function toggleClass(obj,cn){
                //obj中是否含有cn
                if(hasClass(obj,cn)){
                    //有则删除
                    removeClass(obj,cn);
                }else{
                    //没有，则添加
                    addClass(obj,cn);
                }
            }