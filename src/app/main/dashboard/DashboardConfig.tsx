import { lazy } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

const DashboardConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'dashboard',
			element: <Dashboard />
		}
	]
};

export default DashboardConfig;
