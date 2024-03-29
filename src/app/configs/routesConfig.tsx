import RoutesUtils from '@frodo/utils';
import FrodoLoading from '@frodo/components/Loading';
import { Navigate } from 'react-router-dom';
import { RouteConfigsType, RoutesType } from '@frodo/utils/RouterUtils';
import Error404Page from '../main/404/Error404Page';
import MapsConfig from '../main/map/MapsConfig';
import PlayConfig from '../main/play/PlayConfig';
import DashboardConfig from '../main/dashboard/DashboardConfig';
import BotsConfig from '../main/robots/RobotsConfig';
import AvatarConfig from '../main/avatar/AvatarConfig';
import GameConfig from '../main/game/GameConfig';

const routeConfigs: RouteConfigsType = [MapsConfig, PlayConfig, DashboardConfig, BotsConfig, AvatarConfig, GameConfig];

const routes: RoutesType = [
	...RoutesUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		element: <Navigate to="/dashboard" />,
	},
	{
		path: 'loading',
		element: <FrodoLoading />
	},
	{
		path: '404',
		element: <Error404Page />
	},
	{
		path: '*',
		element: <Navigate to="404" />
	}
];

export default routes;
