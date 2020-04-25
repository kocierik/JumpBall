import {
    createJumpingBall,
    createEnemy,
    createBoardGame,
    addEnemies,
    checkBallJump,
    moveEnemy
} from './engine'
import { drawGame } from './graphics'


function setup() {
    loadBackground()
    createBoardGame()
    savePoints()
    createJumpingBall()
    createEnemy()
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
