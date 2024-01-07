import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentLayoutConfig } from 'app/store/slices/settingsSlice';
import { LayoutConfigDefaultsType } from 'app/layout/LayoutConfig';
import NavbarToggleButton from './NavbarToggleButton';

type ToolbarLayoutProps = {
	className?: string;
};

function ToolbarLayout(props: ToolbarLayoutProps) {
	const { className = '' } = props;
	const config = useSelector(selectCurrentLayoutConfig) as LayoutConfigDefaultsType;

	return (
		<Hidden lgUp>
			<AppBar
				id="frodo-toolbar"
				className={clsx('relative z-20 flex shadow-md bg-black', className)}
				color="default"
			>
				<Toolbar className="container min-h-48 p-0 md:min-h-64 lg:px-24">
					{config.navbar.display && <NavbarToggleButton className="text-white mx-0 h-40 w-40 p-0 sm:mx-8" />}
					<div className="flex h-full text-white font-bold items-center overflow-x-auto px-8">
						<h3>Frodobots</h3>
					</div>
				</Toolbar>
			</AppBar>
		</Hidden>
	);
}

export default memo(ToolbarLayout);
