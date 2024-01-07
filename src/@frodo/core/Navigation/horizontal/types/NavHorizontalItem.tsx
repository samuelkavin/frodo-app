import NavLinkAdapter from 'src/@frodo/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { memo, useMemo } from 'react';
import withRouter from 'src/@frodo/core/withRouter';
import { ListItemButton, ListItemButtonProps } from '@mui/material';
import { WithRouterProps } from 'src/@frodo/core/withRouter/withRouter';
import { FrodoNavItemComponentProps } from '../../NavItem';

const Root = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: 'none!important',
	minHeight: 48,
	'&.active': {
		backgroundColor: `${theme.palette.secondary.main}!important`,
		color: `${theme.palette.secondary.contrastText}!important`,
		pointerEvents: 'none',
		'& .frodo-list-item-text-primary': {
			color: 'inherit'
		},
		'& .frodo-list-item-icon': {
			color: 'inherit'
		}
	},
	'& .frodo-list-item-icon': {},
	'& .frodo-list-item-text': {
		padding: '0 0 0 16px'
	}
}));

type NavHorizontalItemProps = FrodoNavItemComponentProps & WithRouterProps;

function FrodoNavHorizontalItem(props: NavHorizontalItemProps) {
	const { item } = props;

	const component = item.url ? NavLinkAdapter : 'li';

	let itemProps;

	if (typeof component !== 'string') {
		itemProps = {
			disabled: item.disabled,
			to: item.url || '',
			role: 'button'
		};
	}

	return useMemo(
		() => (
			<Root
				component={component}
				className={clsx('frodo-list-item', item.active && 'active')}
				{...itemProps}
			>
				<ListItemText
					className="frodo-list-item-text"
					primary={item.title}
					classes={{ primary: 'text-13 frodo-list-item-text-primary truncate' }}
				/>
			</Root>
		),
		[item.exact, item.icon, item.title, item.url]
	);
}

const NavHorizontalItem = withRouter(memo(FrodoNavHorizontalItem));

export default NavHorizontalItem;
