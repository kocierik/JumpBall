let r=0,g=0,b=0;
let divPoints, divGame, divValue, divRecord, divCanvas, divFooter, divPause, divStartMenu;
function createHtml(){
    divGame = window.p5.createDiv().addClass('game');
    divCanvas = window.p5.createDiv().addClass('divCanvas');
    divValue = window.p5.createDiv().addClass('container-value');
    divPoints = window.p5.createDiv().addClass('points');
    divRecord = window.p5.createDiv('record: ').addClass('record');
    divFooter = window.p5.createDiv().addClass('container-value');
    divPause = window.p5.createDiv('Pause').addClass('pause');
    divStartMenu = window.p5.createDiv('Menù').addClass('pause');
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
    window.p5.line(window.windowWidth,BASE_LINE,0,BASE_LINE);
}

function randomColor(){
    r = window.p5.random(0, 255);
    g = window.p5.random(0, 255);
    b = window.p5.random(0, 255);
}
let bg1, bg2, bg3;
function changeColor(){

    window.p5.background(0,0,0)

    if( points > 4000){
        if(window.p5.random(0,100) > 50){
            window.p5.background(0,0,0)
        }   else {
            window.p5.background(255,255,255)
        }
        enemy.speed += 0.003;
        ball.jumpY += 0.003;
    }
    else if (points > 3200){
        window.p5.background(bg3);
    }else if(points > 1300 && points < 2500){

        randomColor()
        window.p5.background(bg2);
        enemy.randomSpeed(5,14);
        ball.jumpY = 10;
    } else if(points > 500){
        randomColor()
        window.p5.background(bg1);
        enemy.randomSpeed(5,10);
        ball.jumpY = 10;
    }

}