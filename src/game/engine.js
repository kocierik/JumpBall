
let ball, enemy;

function createJumpingBall() {
    ball = new JumpingBall(width/6, BASE_LINE - RADIUS, RADIUS, 1, 10, "blue", 0);
}

function createEnemy(){
    enemy = new Ball(width, BASE_LINE - RADIUS, RADIUS,1,"red",5);
}

function createBoardGame(){
    touchCanvas()
    savePoints()
}

function touchCanvas(){
    let canvas = createCanvas(innerWidth, outerHeight/2);
    stroke(255); // Set line drawing color to white
    canvas.mouseClicked(() => {ball.jump()})
    canvas.touchStarted(() => {ball.jump()})
}

function checkBallJump() {
    if(keyCode === window.UP_ARROW ){
        ball.jump()
        window.keyCode = null;
    }
}

function moveEnemy() {
    enemy.moveLeft(enemy.speed);
}


function addEnemies(){
    if(enemy.x <= 0 ){
        enemy.x = width;
        if(enemy.speed < 13){
            enemy.speed += 0.2;
            ball.jumpY += 0.4;
        }
    }
}