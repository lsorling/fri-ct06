// 
const canvas = document.getElementById("canvasBoard");
console.log(canvas);
let ctx = canvas.getContext("2d");

// begin drawing a ball
ctx.beginPath();
ctx.arc(120, 120, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();