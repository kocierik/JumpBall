
function initializeSketch() {
 
    function sketchConfiguration(sk, gameContainer){
        sk.setup = function setup() {
            bg1 = sk.loadImage('/src/assets/icon/illusione-quadrato.png');
            bg2 = sk.loadImage('/src/assets/icon/illusione-quadrato2.png');
            bg3 = sk.loadImage('/src/assets/icon/illusione-linee.png');
            createBoardGame()
            createHtml();
            createJumpingBall()
            createEnemy()
        }
        sk.draw = function draw() {
            drawGame()
            addEnemies()
            checkBallJump()
            moveEnemy()
            pointGame();
            checkRecord()
            pause();
            checkLose()
        }
    }
        
    const sketch = new window.p5(sketchConfiguration) // <div id="game"></div>
    window.sketch = sketch
}
