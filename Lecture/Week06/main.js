//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");


function draw()
{
    ctx.beginPath();
    
    for(var i=0;i<360;i++){
      ctx.lineTo(Math.cos(Math.PI/180*i), Math.sin(Math.PI/180*i));
    }

    ctx.translate(300,300);
    ctx.scale(100,100);

    ctx.fillStyle = "orange";
    ctx.fill();


    ctx.closePath();
    requestAnimationFrame(draw);
}

draw();