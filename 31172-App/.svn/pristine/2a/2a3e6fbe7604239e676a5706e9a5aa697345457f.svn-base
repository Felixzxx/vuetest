
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