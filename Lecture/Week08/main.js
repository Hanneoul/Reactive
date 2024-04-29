//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

class Circle{
    constructor(posX, posY, rot, rotSpeed, size, color, moveDirX, moveDirY, speed){
        this.position_X = posX;
        this.position_Y = posY;
        this.rotation_Y = rot;
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

        this.rotation_Y += this.rotation_Speed;

    }

    draw(){
        ctx.beginPath();
    
        for(var i=this.rotation_Y;i<=360+this.rotation_Y;i+=72){
            ctx.lineTo((Math.cos(Math.PI/180*i)) * this.size + this.position_X, (Math.sin(Math.PI/180*i)) * this.size + this.position_Y);
        }

        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

        ctx.closePath();

    }
}

var c = new Circle(0.0, 0.0, -90.0, 1.0, 50.0, "orange", 1.0, 1.0, 0.0);

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    c.update();
    
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    c.draw();
    ctx.restore();

    requestAnimationFrame(draw);
}

draw();