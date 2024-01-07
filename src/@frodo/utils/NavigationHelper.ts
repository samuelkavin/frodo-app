import { FrodoNavigationType } from '@frodo/core/Navigation/types/NavigationType';
import { FrodoNavItemType } from '@frodo/core/Navigation/types/NavItemType';
import FrodoNavItemModel from '@frodo/core/Navigation/models/NavItemModel';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';

class FrodoNavigationHelper {
	static updateNavItem(
		nav: FrodoNavigationType,
		id: string,
		item: PartialDeep<FrodoNavItemType>
	): FrodoNavigationType {
		return nav.map((node) => {
			if (node.id === id) {
				return _.merge({}, node, item); // merge original node data with updated item data
			}
			return node;
		});
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
}

export default FrodoNavigationHelper;
