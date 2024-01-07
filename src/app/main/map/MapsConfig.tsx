import { lazy } from 'react';

const Maps = lazy(() => import('./Maps'));

const MapsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'maps',
			element: <Maps />
		}
	]
};

export default MapsConfig;
