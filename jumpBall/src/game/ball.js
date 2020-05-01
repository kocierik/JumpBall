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
        window.sketch.ellipse(this.x, this.y, this.radius*2, this.radius*2);
        window.sketch.fill(this.color);
        }
    randomSpeed(min,max){
        this.speed = window.sketch.random(min,max)
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
