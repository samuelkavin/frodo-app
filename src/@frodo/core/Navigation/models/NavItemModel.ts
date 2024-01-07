import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { FrodoNavItemType } from '../types/NavItemType';

function FrodoNavItemModel(data?: PartialDeep<FrodoNavItemType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		title: '',
		translate: '',
		auth: null,
		subtitle: '',
		icon: '',
		url: '',
		target: '',
		type: 'item',
		sx: {},
		disabled: false,
		active: false,
		exact: false,
		end: false,
		badge: null,
		children: []
	});
}

export default FrodoNavItemModel;
