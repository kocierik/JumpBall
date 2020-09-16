let r=0,g=0,b=0;
let divPoints, divGame, divValue, divRecord, divCanvas, divFooter, divPause, divStartMenu;
function createHtml(){
    divGame = createDiv().addClass('game');
    divCanvas = createDiv().addClass('divCanvas');
    divValue = createDiv().addClass('container-value');
    divPoints = createDiv().addClass('points');
    divRecord = createDiv('record: ').addClass('record');
    divFooter = createDiv().addClass('container-value');
    divPause = createDiv('Pause').addClass('pause');
    divStartMenu = createDiv('Menù').addClass('pause');
    divGame.child(divValue);
    divGame.child(divPoints);
    divGame.child(divRecord);
    divValue.child(divPoints);
    divValue.child(divRecord);
    divGame.child(divCanvas);
    divCanvas.child(canvas);
    divGame.child(divFooter);
    divFooter.child(divPause);
    divFooter.child(divStartMenu);
    divStartMenu.hide();
}

function drawGame(){
    changeColor()
    ball.draw();
    enemy.draw();
    line(window.windowWidth,BASE_LINE,0,BASE_LINE);
}

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