const MAX_JUMPY = 100;
const BASE_LINE = 312;
const RADIUS = 20
const CHANGECOLORTIME = 250;
let ball, enemy;
let points = 0;
let bg;
let divPoints, divGame, divValue, divRecord;
let record;
function createBoardGame(){
    const canvas = createCanvas(innerWidth, innerHeight/1.5).addClass('game');
    stroke(255); // Set line drawing color to white
    canvas.touchStarted(() => {ball.jump()})
    createHtml();
    const x = (window.windowWidth - width) / 2;
    const y = (window.windowHeight - height) / 2;
    canvas.position(x, y);
    record = window.getItem('record');
    console.log(record);

}


function createJumpingBall() {
    ball = new JumpingBall(width/6, BASE_LINE - RADIUS, RADIUS, 1, 10, "blue", 0);
}

function createEnemy(){
    enemy = new Ball(width, BASE_LINE - RADIUS, RADIUS,1,"red",5);
}

function createHtml(){
    divGame = createDiv().size(width, innerHeight).addClass('game');
    divValue = createDiv().size(width, 100).addClass('container-value');
    divPoints = createDiv().size(width/2, 100).addClass('points');
    divRecord = createDiv('record: ').size(width/2, 100).addClass('record');
    divGame.child(divPoints);
    divGame.child(canvas);
    divGame.child(divValue);
    divValue.child(divPoints);
    divGame.child(divRecord);
    divValue.child(divRecord);
}

function setup() {
    createBoardGame()
    createJumpingBall()
    createEnemy()
}

let r=0,g=0,b=0;
function randomColor(){
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}

function changeColor(){
    background(0,0,0);
    if( points > 2500){
        background(r,g,b);
        enemy.speed += 0.005
        ball.jumpY += 0.005;

    }
    else if (points > 2000){
        if(random(0,100) > 50){
            background(0,0,0)
        }   else {
            background(255,255,255)
        }
    }else if(points > 500 && points < 1500){
        randomColor()
        background(r,g,b);
        enemy.randomSpeed(5,14);
        ball.jumpY = 10;
    } else if(points > 300 && random(15,100) > 50){
        randomColor()
        background(r,g,b);
        enemy.randomSpeed(5,10);
        ball.jumpY = 10;
    }

}

function drawGame(){

    changeColor()
    ball.draw();
    enemy.draw();
    line(window.windowWidth,BASE_LINE,0,BASE_LINE);
}

function addEnemies(){
    if(enemy.x <= 0 ){
        enemy.x = width;
        if(enemy.speed < 14){
            enemy.speed += 0.3;
            ball.jumpY += 0.2;
        }
    }
}

function checkLose(){
    const checkCollisionX = ball.x + ball.radius - enemy.speed >= enemy.x - enemy.radius ||
                            ball.x - ball.radius >= enemy.x + enemy.radius
    const checkCollisionY = ball.x - ball.radius < enemy.x + enemy.radius && ball.y  >=
                            enemy.y - enemy.radius
    if(checkCollisionX && checkCollisionY){
        console.log("you lose");
        window.noLoop()
        window.storeItem('record',points);
    }
}
function checkRecord(){
    if(points > record )
        divRecord.innerHTML = divRecord.html('record: ' + points, false);
    else{
        divRecord.innerHTML = divRecord.html('record: ' + record, false);
    }
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

function pointGame(){
    points += 1;
    divPoints.innerHTML = divPoints.html('score: ' + points, false);
}
function draw() {
    drawGame()
    addEnemies()
    checkBallJump()
    moveEnemy()
    pointGame();
    checkRecord()
    checkLose()
}