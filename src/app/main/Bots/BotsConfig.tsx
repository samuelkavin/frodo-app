import { lazy } from 'react';

const Bots = lazy(() => import('./Bots'));

const BotsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'bots',
			element: <Bots />
		}
	]
};

export default BotsConfig;
