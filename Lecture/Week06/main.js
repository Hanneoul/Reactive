//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

draw();

function draw()
{

    ctx.beginPath();
    ctx.moveTo(50, 25);
    ctx.lineTo(50, 75);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

    requestAnimationFrame(draw);
}
