import { lazy } from 'react';

const Avatar = lazy(() => import('./Avatar'));

const AvatarConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'play/avatar',
			element: <Avatar />
		}
	]
};

export default AvatarConfig;
