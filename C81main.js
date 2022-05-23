canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext("2d")
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(100, 200, 70, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    circle (mouse_x. mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
ctx.stroke();
}