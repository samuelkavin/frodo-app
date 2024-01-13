import { lazy } from 'react';

const Game = lazy(() => import('./Game'));

const GameConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'play/game',
			element: <Game />
		}
	]
};

export default GameConfig;
