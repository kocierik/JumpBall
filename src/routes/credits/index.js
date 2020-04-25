import {h} from 'preact';

const Credits = () => {

    const onBackClick = () => {
        window.location = '/startMenu';
    }

    return(
    <div className="container">
        <div className="header">
            <h1>Credits</h1>
        </div>
        <div className="container__text">
            <p className="text">
                I used an icon from icons8
            </p>
            <p className="text">
                developer: Erik
            </p>
        </div>
        <div className="footer" onClick={onBackClick}>
            Back to the start menù
        </div>
    </div>
    )
}

export default Credits;
