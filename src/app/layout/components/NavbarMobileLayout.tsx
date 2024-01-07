import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import NavbarToggleButton from './NavbarToggleButton';
import Logo from './Logo';
import Navigation from './Navigation';

const Root = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary,

	'& ::-webkit-scrollbar-thumb': {
		boxShadow: `inset 0 0 0 20px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.24)'
			}`
	},
	'& ::-webkit-scrollbar-thumb:active': {
		boxShadow: `inset 0 0 0 20px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.37)' : 'rgba(255, 255, 255, 0.37)'
			}`
	}
}));

type NavbarMobileLayoutProps = {
	className?: string;
};

function NavbarMobileLayout(props: NavbarMobileLayoutProps) {
	const { className = '' } = props;

	return (
		<Root className={clsx('flex h-full flex-col overflow-hidden', className)}>
			<div className="flex h-48 shrink-0 flex-row items-center px-20 md:h-72">
				<div className="mx-4 flex flex-1">
					<Logo />
				</div>

				<NavbarToggleButton className="h-40 w-40 p-0" />
			</div>

			<div className="flex min-h-0 flex-1 flex-col">
				<Navigation layout="vertical" />
			</div>
		</Root>
	);
}

export default memo(NavbarMobileLayout);
