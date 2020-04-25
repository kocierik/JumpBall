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
let bg1, bg2, bg3;
function changeColor(){

    background(0,0,0)

    if( points > 4000){
        if(random(0,100) > 50){
            background(0,0,0)
        }   else {
            background(255,255,255)
        }
        enemy.speed += 0.003;
        ball.jumpY += 0.003;
    }
    else if (points > 3200){
        background(bg3);
    }else if(points > 1300 && points < 2500){

        randomColor()
        background(bg2);
        enemy.randomSpeed(5,14);
        ball.jumpY = 10;
    } else if(points > 500){
        randomColor()
        background(bg1);
        enemy.randomSpeed(5,10);
        ball.jumpY = 10;
    }

}