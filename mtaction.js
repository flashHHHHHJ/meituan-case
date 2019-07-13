 window.onload = function(){
        	function $(id){
                return typeof id==='string'?document.getElementById(id):id;
            }
            var index=0;
            var timer=null;
            var pic=$("pic").getElementsByTagName("li");
            var flash=$("flash");
            //定义计时器
           flash.timer=setInterval(run,1000);
            //封装函数run
            function run(){
                for(var i=0;i<pic.length;i++){
                   pic[i].style.display="none";
                   // num[i].className='';
               }        
                   index++;
               
               if(index>pic.length-1){
                   index=0;
               }
              else if(index<0){
                   index=pic.length-1;
               }
              pic[index].style.display="block";
            }
            // 轮播器--end--

            // 瀑布流布局--start--
            var div = document.getElementById("main-bd");
         	var tu = document.getElementById("main-bd-pic");
         	var elements = tu.getElementsByTagName('li');
         	// alert(elements.length);
         	ahigh = {a1:[],a2:[],a3:[],a4:[]};
         	for(var i=0;i<elements.length;i++){
                var num = i%4;
                switch(num){
                    case 0:
                    elements[i].style.left = 0;
                    ahigh.a1.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a1[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                    case 1:
                    elements[i].style.left = 291 + "px";
                    ahigh.a2.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a2[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                    case 2:
                    elements[i].style.left = 582 + "px";
                    ahigh.a3.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a3[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                    case 3:
                    elements[i].style.left = 873 + "px";
                    ahigh.a4.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a4[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                }
         	}

        // 页面滚动条开始
        var floornav=$("floor-nav");
        var lis=floornav.getElementsByTagName("li");
        floornav.style.display="none";

        window.onscroll=function(e){//谷歌和opera下为什么会有闪烁
            console.log(document.body.scrollTop);
            var Btop=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
            if(Btop<20){
                floornav.style.display="block";
        }
         //
            else if(Btop>=20&&Btop<2300){
                floornav.style.display="block";
                for(var i=0;i<lis.length;i++){
                    lis[i].style.backgroundColor="";
                }
                lis[0].style.backgroundColor="#2bb8aa";
                
                if(Btop>=750){

                    floornav.style.top=Btop+100+"px";
                    //alert(floornav.style.top)//为什么取不到值
                }
                
        }
        else if(Btop>=2300&&Btop<3287){
            floornav.style.top=Btop+100+"px";
            for(var i=0;i<lis.length;i++){
                    lis[i].style.backgroundColor="";
                }
                lis[1].style.backgroundColor="#2bb8aa";
            
        }
        else if(Btop>=3287&&Btop<3945){
            floornav.style.top=Btop+100+"px";
            for(var i=0;i<lis.length;i++){
                    lis[i].style.backgroundColor="";
                }
                lis[2].style.backgroundColor="#2bb8aa";
            
        }
        else if(Btop>=3945&&Btop<4603){
            floornav.style.top=Btop+100+"px";
            for(var i=0;i<lis.length;i++){
                    lis[i].style.backgroundColor="";
                }
                lis[3].style.backgroundColor="#2bb8aa";
            
        }
        else if(Btop>=4603&&Btop<5261){
            floornav.style.top=Btop+100+"px";
            for(var i=0;i<lis.length;i++){
                    lis[i].style.backgroundColor="";
                }
                lis[4].style.backgroundColor="#2bb8aa";
            
        }
        else if(Btop>=5261&&Btop<5969){
            floornav.style.top=Btop+100+"px";
            for(var i=0;i<lis.length;i++){
                    lis[i].style.backgroundColor="";
                }
                lis[5].style.backgroundColor="#2bb8aa";
            
        }
        else if(Btop>=5919&&Btop<6906){
            floornav.style.top=Btop+100+"px";
            for(var i=0;i<lis.length;i++){
                    lis[i].style.backgroundColor="";
                }
                lis[5].style.backgroundColor="#2bb8aa";
            
        }
        
     }
        //var Btop1=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop
        //为什么识别不了
        lis[0].onclick=function(){
            
            if(document.documentElement.scrollTop){
                floornav.style.top=900-100+"px";
                document.documentElement.scrollTop=600;
            }
            else{
                floornav.style.top=900-100+"px";
                document.body.scrollTop=600;
            }
            
            
        }
        lis[1].onclick=function(){
            if(document.documentElement.scrollTop){
                document.documentElement.scrollTop=2300;
            }
            else{
                document.body.scrollTop=2300;

            }
            }
        lis[2].onclick=function(){
            if(document.documentElement.scrollTop){
                document.documentElement.scrollTop=3287;
            }
            else{
                document.body.scrollTop=3287;
            }
            
        }
       lis[3].onclick=function(){
        if(document.documentElement.scrollTop){
                document.documentElement.scrollTop=3945;
            }
            else{
                document.body.scrollTop=3945;
            }
            
        }
        lis[4].onclick=function(){
            if(document.documentElement.scrollTop){
                document.documentElement.scrollTop=4603;
            }
            else{
                document.body.scrollTop=4603;
            }
            
        }
        lis[5].onclick=function(){
            if(document.documentElement.scrollTop){
                document.documentElement.scrollTop=0;
            }
            else{
                document.body.scrollTop=0;
            }
        }
        
}






















