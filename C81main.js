var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    var mousex=e.clientX-canvas.offsetLeft;
    var mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);

}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}

