import {h} from 'preact';

const Game = () => (

    <div className="game">
        <div className="container-value">
            <div className="points">score: 223</div>
            <div className="record">record: 3076</div>
        </div>
        <div className="divCanvas">
            <canvas id="defaultCanvas0" className="p5Canvas" width="1366" height="364" />
        </div>
        <div className="container-value">
            <div className="pause">retry</div>
            <div className="pause">Menù</div>
        </div>
    </div>
);

export default Game;
