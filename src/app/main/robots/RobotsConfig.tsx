import { lazy } from 'react';

const Robots = lazy(() => import('./Robots'));

const RobotsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'robots',
			element: <Robots />
		}
	]
};

export default RobotsConfig;
