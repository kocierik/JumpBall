
function setup() {
    loadBackground()
    createBoardGame()
    createHtml();
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