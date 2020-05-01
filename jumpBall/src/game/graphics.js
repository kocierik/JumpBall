let r=0,g=0,b=0;
let divPoints, divGame, divValue, divRecord, divCanvas, divFooter, divPause, divStartMenu;
function createHtml(){
    divGame = window.sketch.createDiv().addClass('game');
    divCanvas = window.sketch.createDiv().addClass('divCanvas');
    divValue = window.sketch.createDiv().addClass('container-value');
    divPoints = window.sketch.createDiv().addClass('points');
    divRecord = window.sketch.createDiv('record: ').addClass('record');
    divFooter = window.sketch.createDiv().addClass('container-value');
    divPause = window.sketch.createDiv('Pause').addClass('pause');
    divStartMenu = window.sketch.createDiv('Menù').addClass('pause');
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
    window.sketch.line(window.windowWidth,BASE_LINE,0,BASE_LINE);
}

function randomColor(){
    r = window.sketch.random(0, 255);
    g = window.sketch.random(0, 255);
    b = window.sketch.random(0, 255);
}
let bg1, bg2, bg3;
function changeColor(){

    window.sketch.background(0,0,0)

    if( points > 4000){
        if(window.sketch.random(0,100) > 50){
            window.sketch.background(0,0,0)
        }   else {
            window.sketch.background(255,255,255)
        }
        enemy.speed += 0.003;
        ball.jumpY += 0.003;
    }
    else if (points > 3200){
        window.sketch.background(bg3);
    }else if(points > 1300 && points < 2500){

        randomColor()
        window.sketch.background(bg2);
        enemy.randomSpeed(5,14);
        ball.jumpY = 10;
    } else if(points > 500){
        randomColor()
        window.sketch.background(bg1);
        enemy.randomSpeed(5,10);
        ball.jumpY = 10;
    }

}
