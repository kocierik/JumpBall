let game = true;

function checkLose(){
    const checkCollisionX = ball.x + ball.radius - enemy.speed >= enemy.x - enemy.radius ||
        ball.x - ball.radius >= enemy.x + enemy.radius
    const checkCollisionY = ball.x - ball.radius < enemy.x + enemy.radius && ball.y  >=
        enemy.y - enemy.radius
    if(checkCollisionX && checkCollisionY){
        window.noLoop();
        checkRecord();
        points = 0;
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


let time = 3;
function countDown(){
    if(time >= 0){
        console.log(time)
        time -= 1;

    }
    if(time === 0){
        divStartMenu.hide();
        divPause.html('Pause');
        window.loop();

    }
}

function timer(){
    if(time > 0){
        setInterval(countDown, 1000)
    }
}
function pause(){
    divPause.mouseClicked(() => {
        if(divPause.html() === "Pause"){
            divPause.html('resume');
            window.noLoop();
            game = false;
            divStartMenu.show();
        }
        else if(game === false ){
            timer()

            game = true;
            time = 3
        }
    })

    divStartMenu.mouseClicked(() => {
        points = 0;
        window.location = 'startMenu.html';
    })
}
