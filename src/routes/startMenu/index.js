import { h } from 'preact';

const StartMenu = () =>{

    const onHowToPlay = () => {
        window.location = '/howToPlay';
    }

    const onCredits = () => {
        window.location = '/credits';
    }

return (
    <div className="container">
        <div className="header">
            <h1>JumpBall</h1>
        </div>
        <div className="container__button">
            <button id="pauseButton" onClick="pauseMenu()">
                <img src="src/assets/icon/play.svg" style={{width:'300px', height:'200px'}} />
            </button>
            <p>Click the button to play!</p>
        </div>

        <div className="footer">
            <div className="footer__tutorial" onClick={onHowToPlay}>How to play</div>
            <div className="footer__credit" onClick={onCredits}>Credits</div>
        </div>
    </div>
);
}
export default StartMenu;

