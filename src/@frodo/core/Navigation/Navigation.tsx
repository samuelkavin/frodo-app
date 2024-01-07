import { memo } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import NavHorizontalLayout from './horizontal/NavHorizontalLayout';
import NavVerticalLayout from './vertical/NavVerticalLayout';
import NavHorizontalItem from './horizontal/types/NavHorizontalItem';
import NavVerticalItem from './vertical/types/NavVerticalItem';
import { registerComponent } from './NavItem';
import { FrodoNavigationType } from './types/NavigationType';
import { FrodoNavItemType } from './types/NavItemType';

const inputGlobalStyles = (
	<GlobalStyles
		styles={() => ({
			'.popper-navigation-list': {
				'& .frodo-list-item': {
					padding: '8px 12px 8px 12px',
					height: 40,
					minHeight: 40,
					'& .frodo-list-item-text': {
						padding: '0 0 0 8px'
					}
				},
				'&.dense': {
					'& .frodo-list-item': {
						minHeight: 32,
						height: 32,
						'& .frodo-list-item-text': {
							padding: '0 0 0 8px'
						}
					}
				}
			}
		})}
	/>
);

registerComponent('vertical-item', NavVerticalItem);
registerComponent('horizontal-item', NavHorizontalItem);

export type FrodoNavigationProps = {
	className?: string;
	dense?: boolean;
	active?: boolean;
	onItemClick?: (T: FrodoNavItemType) => void;
	navigation: FrodoNavigationType;
	layout?: 'horizontal' | 'vertical';
	firstLevel?: boolean;
	selectedId?: string;
	checkPermission?: boolean;
};

function FrodoNavigation(props: FrodoNavigationProps) {
	const { navigation, layout = 'vertical' } = props;

	if (!navigation || navigation.length === 0) {
		return null;
	}

	return (
		<>
			{inputGlobalStyles}
			{layout === 'horizontal' && (
				<NavHorizontalLayout
					checkPermission={false}
					{...props}
				/>
			)}
			{layout === 'vertical' && (
				<NavVerticalLayout
					checkPermission={false}
					{...props}
				/>
			)}
		</>
	);
}

export default memo(FrodoNavigation);
