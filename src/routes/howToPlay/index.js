import {h} from 'preact';

const HowToPlay = () => {
    const onBackClick = () => {
        window.location = '/startMenu';
    }

    return (
        <div className="container">
            <div className="header">
                <h1>How to play</h1>
            </div>
            <div className="container__text">
                <p className="text">
                    click on the screen
                </p>
                <p className="text"> jump the enemy spheres</p>
            </div>
            <div className="footer" onClick={onBackClick}>
                Back to the start menù
            </div>
        </div>
    );
}

export default HowToPlay;
