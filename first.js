var a=document.querySelector("img")
var b=document.querySelector("button")
var flag=0
b.addEventListener("click",function(){
    if(flag==0){
         a.style.opacity="1";
         b.innerHTML="OFF";
         flag=1;

    }
    else{
        a.style.opacity="0.1";
         b.innerHTML="ON";
         flag=0;
    }

   

})