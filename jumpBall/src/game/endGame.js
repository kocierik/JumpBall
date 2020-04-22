let game = true;

function checkLose(){
    const checkCollisionX = ball.x + ball.radius - enemy.speed >= enemy.x - enemy.radius ||
        ball.x - ball.radius >= enemy.x + enemy.radius
    const checkCollisionY = ball.x - ball.radius < enemy.x + enemy.radius && ball.y  >=
        enemy.y - enemy.radius
    if(checkCollisionX && checkCollisionY){
        window.noLoop();
        checkRecord();
        debugger
        points = 0;
        debugger
        divPause.html('retry');
        game = false;
        divStartMenu.show();
        divStartMenu.mouseClicked(() => {
            window.location = 'startMenu.html';
        })
        createJumpingBall()
        createEnemy()

    }
}

function storeData(){
    window.storeItem('pointsPause',points);
}

function pause(){
    divPause.mouseClicked(() => {
        if(game === true){
            divPause.html('resume');
            window.noLoop();
            game = false;
            divStartMenu.show();

        }
        else{
            divStartMenu.hide();
            divPause.html('pause');
            window.loop();
            game = true;
        }

    })
    divStartMenu.mouseClicked(() => {
        points = 0;
        window.location = 'startMenu.html';
        createJumpingBall()
        createEnemy()
        debugger
    })

}
