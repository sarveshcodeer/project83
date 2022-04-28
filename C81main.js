canvas = document.getElementById("mc");
ctx = canvas.getContext("2d");
var lpx,lpy ; 
var nw = screen.width - 300 ;
var nh = screen.height - 200 ; 

if (screen.width <= 992){

document.getElementById("mc").width = nw ; 
document.getElementById("mc").height = nh ;


}




canvas.addEventListener("touchstart" , my_touchstart)
function my_touchstart(e) {

lpx = e.touches[0].clientx - canvas.offsetLeft
lpy = e.touches[0].clienty - canvas.offsetTop
}


canvas.addEventListener("touchmove" , my_touchmove )
function my_touchmove(e) {
    cpx=e.touches[0].clientX - canvas.offsetLeft; 
    cpy=e.touches[0].clientY -canvas.offsetTop; 

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "orange";
ctx.arc(lpx , lpy , 20 , 0 , 2*Math.PI);
ctx.stroke();
 lpx = cpx ; 
lpy = cpy ;
}

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){

mouseevent = "mouseDown" ; 

}

canvas.addEventListener("mouseup" , my_mouseup)
function my_mouseup(e) {

mouseevent = "mouseUp" ; 

}

canvas.addEventListener("mouseleave" , my_mouseleave)
function my_mouseleave(e){

mouseevent = "mouseLeave" ; 

}

canvas.addEventListener("mousemove" , my_mousemove )
function my_mousemove(e) {
    cpx=e.clientX - canvas.offsetLeft; 
    cpy=e.clientY -canvas.offsetTop; 
    if(mouseevent== "mouseDown"){

        ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "orange";
ctx.arc(lpx , lpy , 20 , 0 , 2*Math.PI);
ctx.stroke();

    }
    lpx = cpx ; 
lpy = cpy ;
}



