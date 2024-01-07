import NavLinkAdapter from 'src/@frodo/core/NavLinkAdapter';
import { alpha, styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { useMemo } from 'react';
import { ListItemButton, ListItemButtonProps } from '@mui/material';
import { FrodoNavItemComponentProps } from '../../NavItem';

type ListItemButtonStyleProps = ListItemButtonProps & {
	itempadding: number;
};

const Root = styled(ListItemButton)<ListItemButtonStyleProps>(({ theme, ...props }) => ({
	minHeight: 44,
	width: '100%',
	borderRadius: '6px',
	margin: '0 0 4px 0',
	paddingRight: 16,
	paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
	paddingTop: 10,
	paddingBottom: 10,
	color: alpha(theme.palette.text.primary, 0.7),
	cursor: 'pointer',
	textDecoration: 'none!important',
	'&:hover': {
		color: theme.palette.text.primary
	},
	'&.active': {
		color: theme.palette.text.primary,
		backgroundColor:
			theme.palette.mode === 'light' ? 'rgba(0, 0, 0, .05)!important' : 'rgba(255, 255, 255, .1)!important',
		pointerEvents: 'none',
		transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
		'& > .frodo-list-item-text-primary': {
			color: 'inherit'
		},
		'& > .frodo-list-item-icon': {
			color: 'inherit'
		}
	},
	'& >.frodo-list-item-icon': {
		marginRight: 16,
		color: 'inherit'
	},
	'& > .frodo-list-item-text': {}
}));

function FrodoNavVerticalItem(props: FrodoNavItemComponentProps) {
	const { item, nestedLevel = 0, onItemClick } = props;

	const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;

	const component = item.url ? NavLinkAdapter : 'li';

	let itemProps = {};

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
				onClick={() => onItemClick && onItemClick(item)}
				itempadding={itempadding}
				{...itemProps}
			>
				<ListItemText
					className="frodo-list-item-text"
					primary={item.title}
					classes={{
						primary: 'text-13 font-medium frodo-list-item-text-primary truncate',
						secondary: 'text-11 font-medium frodo-list-item-text-secondary leading-normal truncate'
					}}
				/>
			</Root>
		),
		[item, itempadding, onItemClick]
	);
}

const NavVerticalItem = FrodoNavVerticalItem;

export default NavVerticalItem;
