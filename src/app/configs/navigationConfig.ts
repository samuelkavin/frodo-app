import { FrodoNavigationType } from '@frodo/core/Navigation/types/NavigationType';

const navigationConfig: FrodoNavigationType = [
	{
		id: 'dashboard-component',
		title: 'Dashboard',
		type: 'item',
		url: 'dashboard'
	},
	{
		id: 'maps-component',
		title: 'Maps',
		type: 'item',
		url: 'maps'
	},
	{
		id: 'play-component',
		title: 'Play',
		type: 'item',
		url: 'play'
	}
];

export default navigationConfig;
