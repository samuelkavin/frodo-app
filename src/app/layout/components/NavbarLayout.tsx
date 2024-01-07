import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Root = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary
}));

type NavbarLayoutProps = {
	className?: string;
};

function NavbarLayout(props: NavbarLayoutProps) {
	const { className = '' } = props;

	return (
		<Root className={clsx('h-64 max-h-64 min-h-64 w-full shadow-md', className)}>
			<div className="container z-20 flex h-full w-full flex-auto items-center justify-between p-0 lg:px-24">
				<div className="flex shrink-0 items-center px-8">
					<Logo />
				</div>

				<div className="flex h-full items-center">
					<Navigation
						className="w-full"
						layout="horizontal"
					/>
				</div>
			</div>
		</Root>
	);
}

export default memo(NavbarLayout);
