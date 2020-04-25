import JumpingBall from './JumpingBall'
import Ball from './Ball'
import { BASE_LINE, RADIUS } from './const'

let ball, enemy;

export function createJumpingBall() {
    ball = new JumpingBall(window.p5.width/6, BASE_LINE - RADIUS, RADIUS, 1, 10, "blue", 0);
}

export function createEnemy(){
    enemy = new Ball(window.p5.width, BASE_LINE - RADIUS, RADIUS,1,"red",5);
}

export function createBoardGame(){
    let canvas = window.p5.createCanvas(innerWidth, outerHeight/2);
    window.p5.stroke(255); // Set line drawing color to white
    canvas.mouseClicked(() => {ball.jump()})
    canvas.touchStarted(() => {ball.jump()})
}

export function checkBallJump() {
    if(keyCode === window.UP_ARROW ){
        ball.jump()
        keyCode = null;
    }
}

export function moveEnemy() {
    enemy.moveLeft(enemy.speed);
}

export function addEnemies(){
    if(enemy.x <= 0 ){
        enemy.x = window.p5.width;
        if(enemy.speed < 13){
            enemy.speed += 0.2;
            ball.jumpY += 0.4;
        }
    }
}
