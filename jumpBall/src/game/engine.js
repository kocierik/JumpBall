const MAX_JUMPY = 100;
const BASE_LINE = 300;
const RADIUS = 15;
let ball, enemy, canvas;

function createJumpingBall() {
    ball = new JumpingBall(window.sketch.width/6, BASE_LINE - RADIUS, RADIUS, 1, 10, "blue", 0);
}

function createEnemy(){
    enemy = new Ball(window.sketch.width, BASE_LINE - RADIUS, RADIUS,1,"red",5);
}

function createBoardGame(){
    touchCanvas()
    savePoints()
}

function touchCanvas() {
    canvas = window.sketch.createCanvas(innerWidth, outerHeight/2);
    window.sketch.stroke(255); // Set line drawing color to white
    canvas.mouseClicked(() => {ball.jump()})
    canvas.touchStarted(() => {ball.jump()})
}

function checkBallJump() {
    if(window.sketch.keyCode === window.UP_ARROW ){
        ball.jump()
        window.sketch.keyCode = null;
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
