        var floornav=document.getElementById("row-navbar");
        var lis=floornav.getElementsByTagName("span");
        //alert(floornav.getBoundingClientRect().top);

        window.onscroll=function(e){
            // console.log(document.body.scrollTop);
            var Btop=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
            if(Btop<900){
                floornav.style.width = "703px";
                lis[0].style.backgroundColor = "#2bb8aa";
                lis[0].className = "nav-item";
                for(var i=1;i<lis.length;i++){
                    lis[i].className = "";
                    lis[i].style.backgroundColor = "rgb(249,249,249)";
                }
            }
            if(901<Btop){
               // floornav.style.position = "fixed";  //这块用position:sticky代替的,但要考虑兼容性
               // floornav.style.top = "0";
                floornav.style.width = "975px";                
            }
            if(1150<Btop&&Btop<1630){                  
                    lis[0].className = "";                   
                    lis[0].style.backgroundColor = "rgb(249,249,249)";                   
                    lis[1].style.backgroundColor = "#2bb8aa";
                    lis[0].className = "nav-item1";
                    lis[1].className = "nav-item";
            }else if(1630<Btop&&Btop<3450){
                for(var i=0;i<2;i++){
                    lis[i].className = "";
                    lis[i].className= "nav-item1";
                    lis[i].style.backgroundColor = "rgb(249,249,249)"; 
                }
                lis[2].style.backgroundColor = "#2bb8aa";
                lis[2].className = "nav-item";
            }else if(3450<Btop&&Btop<4730){
                for(var i=0;i<3;i++){
                    lis[i].className = "";
                    lis[i].className= "nav-item1";
                    lis[i].style.backgroundColor = "rgb(249,249,249)"; 
                }
                lis[3].style.backgroundColor = "#2bb8aa";
                lis[3].className = "nav-item";
            }else if(4730<Btop){
                for(var i=0;i<4;i++){
                    lis[i].className = "";
                    lis[i].className= "nav-item1";
                    lis[i].style.backgroundColor = "rgb(249,249,249)"; 
                }
                lis[4].style.backgroundColor = "#2bb8aa";
                lis[4].className = "nav-item";
            }
}