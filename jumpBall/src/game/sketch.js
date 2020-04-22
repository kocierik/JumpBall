const MAX_JUMPY = 100;
const BASE_LINE = 312;
const RADIUS = 20
let ball, enemy;
let points = 0;
let divPoints, divGame, divValue, divRecord, divPause, divCanvas;
let record;
function createBoardGame(){
    touchCanvas()
    createHtml();
    savePoints()
    windowResized()
}

function touchCanvas(){
    let canvas = createCanvas(innerWidth, innerHeight);
    stroke(255); // Set line drawing color to white
    canvas.touchStarted(() => {ball.jump()})
    canvas.mouseClicked(() => {ball.jump()})
}

function createJumpingBall() {
    ball = new JumpingBall(width/6, BASE_LINE - RADIUS, RADIUS, 1, 10, "blue", 0);
}

function createEnemy(){
    enemy = new Ball(width, BASE_LINE - RADIUS, RADIUS,1,"red",5);
}

function createHtml(){
    divGame = createDiv().addClass('game');
    divCanvas = createDiv().addClass('divCanvas');
    divValue = createDiv().addClass('container-value');
    divPoints = createDiv().addClass('points');
    divRecord = createDiv('record: ').addClass('record');
    divPause = createDiv('Pause').addClass('pause');
    divGame.child(divValue);
    divGame.child(divPoints);
    divGame.child(divRecord);
    divValue.child(divPoints);
    divValue.child(divRecord);
    divGame.child(divCanvas);
    divCanvas.child(canvas);
    divGame.child(divPause);
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

function savePoints(){
    const condition = performance.navigation.type === 1;
    condition ? points = 0 : points = window.getItem('pointsPause');
    record = window.getItem('record');
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
function windowResized() {
    window.resizeCanvas(window.windowWidth, window.windowHeight/1.5);
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
        points = 0;
        window.storeItem('pointsPause',points);
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
function pause(){
    divPause.touchStarted(() => {window.location = 'startMenu.html';})
    divPause.mouseClicked(() => {window.location = 'startMenu.html';})
    window.storeItem('pointsPause',points);
}

function draw() {
    drawGame()
    addEnemies()
    checkBallJump()
    moveEnemy()
    pointGame();
    checkRecord()
    pause();
    checkLose()
}