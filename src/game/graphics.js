
function drawGame(){
    changeColor()
    ball.draw();
    enemy.draw();
    line(window.windowWidth,BASE_LINE,0,BASE_LINE);
}


let bg1, bg2, bg3;
function loadBackground(){
    bg1 = window.loadImage('/src/assets/icon/illusione-quadrato.png');
    bg2 = window.loadImage('/src/assets/icon/illusione-quadrato2.png');
    bg3 = window.loadImage('/src/assets/icon/illusione-linee.png');
}
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