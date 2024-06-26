//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

class Hexagon{
    constructor(posX, posY, rot, rotSpeed, size, color, moveDirX, moveDirY, speed){
        this.position_X = posX;
        this.position_Y = posY;
        this.rotation = rot;
        this.rotation_Speed = rotSpeed;
        this.color = color;
        this.size = size;

        this.moveDirectionX = moveDirX;
        this.moveDirectionY = moveDirY;
        this.moveSpeed = speed;
    }

    update(){
        this.position_X += (this.moveDirectionX * this.moveSpeed);
        this.position_Y += (this.moveDirectionY * this.moveSpeed);
        this.rotation += this.rotation_Speed;

    }

    draw(){
        ctx.beginPath();
    
        for(var i=0;i<=360;i+=72){
            ctx.lineTo(Math.cos(Math.PI/180*i), Math.sin(Math.PI/180*i));
        }

        ctx.fillStyle = this.color;
        ctx.fill();
        //ctx.stroke();

        ctx.closePath();

    }
}

var a = new Hexagon(100.0, 0.0, -90.0, 2.0, 30.0, "green", 1.0, 1.0, 0.0);
var b = new Hexagon(100.0, 0.0, -90.0, 2.0, 30.0, "yellow", 1.0, 1.0, 0.0);

var angle = 0;
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //a.update();

    
    ctx.save();
    ctx.translate(move_pos,0);
    ctx.translate(-move_pos,0);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    ctx.scale(100, 100);
    ctx.rotate(angle);   
    ctx.scale(angle,angle);   
    
    angle+=0.01;
    a.draw();
    ctx.restore();
    
    ctx.save();
    ctx.translate(move_pos,0);
    ctx.translate(canvas.width / 4, canvas.height / 4);
    ctx.scale(100, 100);
    ctx.rotate(angle);   
    
    angle+=0.01;
    b.draw();
    ctx.restore();

    requestAnimationFrame(draw);
}

var move_pos = 0;

function handleKeyPress(event){
    if (event.keyCode === 39) {
        move_pos += 10;
        console.log("누름");
    }
}

document.addEventListener('keydown', handleKeyPress);


draw();
