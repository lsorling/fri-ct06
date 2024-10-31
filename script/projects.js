// 
let X = 0;
let Y = 0;
let DX = 5; // delta x
let DY = 5; // delta y
const RADIUS = 25;
let canvas;
let ctx;

// need to put inside window.onload event if script tag is in html header
window.onload = () => {
    canvas = document.getElementById("canvasBoard");
    console.log(canvas);
    ctx = canvas.getContext("2d");

    X = canvas.width / 2;
    Y = canvas.height / 2;
    
    drawBall();
    animate();
}

let drawBall = () => {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255,0,0)";
    ctx.fillStyle = "rgb(0,0,255)";

    // begin drawing a ball
    ctx.beginPath();
    ctx.arc(X, Y, RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}
let animate = () => {
    if (document.getElementById("playAnimation").checked) {
        // clear screen to animate ball
        ctx.reset();
        drawBall();

        if (X < 0 || X > canvas.width) {
            DX = -DX;
        }
        if (Y < 0 || Y > canvas.height) {
            DY = -DY;
        }

        X = X+DX;
        Y = Y+DY;
    }

    // execute again in sync with framerates
    requestAnimationFrame(animate);
}

