//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

class Circle{
    constructor(posX, posY, color, size, moveDirX, moveDirY, speed){
        this.position_X = posX;
        this.position_Y = posY;
        this.color = color;
        this.size = size;

        this.moveDirectionX = moveDirX;
        this.moveDirectionY = moveDirY;
        this.moveSpeed = speed;
    }

    update(){

        this.position_X += (this.moveDirectionX * this.speed);
        this.position_Y += (this.moveDirectionY * this.speed);

    }

    draw(){
        ctx.beginPath();
    
        for(var i=0;i<360;i++){
            ctx.lineTo((Math.cos(Math.PI/180*i)) * this.size + this.position_X, (Math.sin(Math.PI/180*i)) * this.size + this.position_Y);
        }

        
        

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();

    }
}

var c = new Circle(50.0,50.0,"orange", 50.0, 1.0,1.0,0.0);

function draw()
{

    //c.update();
    c.position_X ++;
    
    c.draw();
    
    requestAnimationFrame(draw);
}

draw();