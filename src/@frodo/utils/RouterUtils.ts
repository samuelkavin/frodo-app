import _ from '@lodash';
import { RouteObject } from 'react-router-dom';
import { PartialDeep } from 'type-fest';
import { FrodoNavigationType } from '@frodo/core/Navigation/types/NavigationType';
import { FrodoNavItemType } from '@frodo/core/Navigation/types/NavItemType';
import FrodoNavItemModel from '@frodo/core/Navigation/models/NavItemModel';
import EventEmitter from './EventEmitter';

export type RouteItemType = RouteObject & {
	auth?: string[] | [];
	settings?: unknown;
};

export type RoutesType = RouteItemType[];

export type RouteConfigType = {
	routes: RoutesType;
	settings?: unknown;
};

export type RouteConfigsType = RouteConfigType[] | [];

class RoutesUtils {
	static setRoutes(config: RouteConfigType): RouteItemType[] {
		let routes = [...config.routes];

		routes = routes.map((route) => {
			const settings = _.merge({}, config.settings, route.settings);

			return {
				...route,
				settings
			};
		}) as RouteItemType[];

		return [...routes];
	}

	static generateRoutesFromConfigs(configs: RouteConfigsType) {
		let allRoutes: RouteItemType[] = [];
		configs.forEach((config: RouteConfigType) => {
			allRoutes = [...allRoutes, ...this.setRoutes(config)];
		});
		return allRoutes;
	}

	static getFlatNavigation(navigationItems: FrodoNavigationType = [], flatNavigation = []) {
		for (let i = 0; i < navigationItems.length; i += 1) {
			const navItem = navigationItems[i];

			if (navItem.type === 'item') {
				const _navtItem = FrodoNavItemModel(navItem);
				flatNavigation.push(_navtItem);
			}
		}
		return flatNavigation as FrodoNavigationType | [];
	}

	static EventEmitter = EventEmitter;

	static updateNavItem(
		nav: FrodoNavigationType,
		id: string,
		item: PartialDeep<FrodoNavItemType>
	): FrodoNavigationType {
		return nav.map((_item) => {
			if (_item.id === id) {
				return _.merge({}, _item, item);
			}

			return _.merge({}, _item);
		});
	}
}

export default RoutesUtils;
