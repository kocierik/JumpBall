class Ball {
        constructor(x,y,radius,gravity,color,speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.gravity = gravity;
        this.color = color;
        this.speed = speed;
    }

    draw(){
        window.p5.ellipse(this.x, this.y, this.radius*2, this.radius*2);
        window.p5.fill(this.color);
        }
    randomSpeed(min,max){
        this.speed = window.p5.random(min,max)
    }
    moveUp(pixel){
        this.y -= pixel
    }

    moveDown(pixel){
        this.y += pixel
    }
    moveLeft(speed){
            this.x -= speed;
    }
}