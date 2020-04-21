class JumpingBall extends Ball{
    constructor(x, y, radius, gravity, jumpY, color, speed) {
        super(x,y,radius,gravity, color, speed);
        this.jumpY = jumpY;
        this.isJumping = false;
        this.isGoingDown = false;
        this.speed = 0;
    }
    jump(){
        this.isJumping = true;
    }

    draw() {
        if(this.isJumping){
            if(!this.isGoingDown){
                super.moveUp(this.jumpY)
                const isJumpLimitMaxY = this.y - this.radius <= MAX_JUMPY
                if(isJumpLimitMaxY){
                    this.isGoingDown = true
                }
            }
            if(this.isGoingDown){
                this.moveDown(this.jumpY)
                const isJumpLimitMinY = this.y + this.radius >= BASE_LINE
                if(isJumpLimitMinY){
                    this.y = BASE_LINE - RADIUS
                    this.isJumping = false
                    this.isGoingDown = false;
                }
            }
        }
        super.draw();
    }
}