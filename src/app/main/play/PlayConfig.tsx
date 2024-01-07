import { lazy } from 'react';

const Play = lazy(() => import('./Play'));

const PlayConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'play',
			element: <Play />
		}
	]
};

export default PlayConfig;
