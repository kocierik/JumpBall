import { h } from 'preact';
import { Router } from 'preact-router';


import Credits from '../routes/credits';
import Game from '../routes/game';
import HowToPlay from '../routes/howToPlay';
import StartMenu from '../routes/startMenu';

const App = () => {
	return (
		<div id="app">
			<Router>
				<Credits path="/credits" />
				<Game path="/game" />
				<HowToPlay path="/howToPlay" />
				<StartMenu path="/startMenu" />
			</Router>
		</div>
	)
}

export default App;
