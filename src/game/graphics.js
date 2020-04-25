import { BASE_LINE } from "./const";

const bg1 = '/src/assets/icon/illusione-quadrato.png'
const  bg2 = '/src/assets/icon/illusione-quadrato2.png'
const  bg3 = '/src/assets/icon/illusione-linee.png'

export function drawGame(){
    changeColor()
    ball.draw();
    enemy.draw();
    line(window.windowWidth,BASE_LINE,0,BASE_LINE);
}

function setBackground(bg) {
    window.p5.background(bg)
}

export function changeColor(){

    setBackground(0,0,0)

    if( points > 4000){
        if(window.p5.random(0,100) > 50){
            setBackground(0,0,0)
        }   else {
            setBackground(255,255,255)
        }
        enemy.speed += 0.003;
        ball.jumpY += 0.003;
    }
    else if (points > 3200){
        setBackground(bg3);
    }else if(points > 1300 && points < 2500){

        randomColor()
        setBackground(bg2);
        enemy.randomSpeed(5,14);
        ball.jumpY = 10;
    } else if(points > 500){
        randomColor()
        setBackground(bg1);
        enemy.randomSpeed(5,10);
        ball.jumpY = 10;
    }

}
