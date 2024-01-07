import Hidden from '@mui/material/Hidden';
import { styled, ThemeProvider } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { navbarCloseMobile, selectNavbar } from 'app/store/slices/navbarSlice';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import { selectCurrentLayoutConfig, selectNavbarTheme } from 'app/store/slices/settingsSlice';
import { LayoutConfigDefaultsType } from 'app/layout/LayoutConfig';
import { useLocation } from 'react-router';
import useThemeMediaQuery from 'src/@frodo/hooks/useThemeMediaQuery';
import NavbarLayout from './NavbarLayout';
import NavbarMobileLayout from './NavbarMobileLayout';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
	'& > .MuiDrawer-paper': {
		height: '100%',
		flexDirection: 'column',
		flex: '1 1 auto',
		width: 280,
		minWidth: 280,
		transition: theme.transitions.create(['width', 'min-width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.shorter
		})
	}
}));

type NavbarWrapperLayoutProps = {
	className?: string;
};

function NavbarWrapperLayout(props: NavbarWrapperLayoutProps) {
	const { className = '' } = props;
	const dispatch = useAppDispatch();
	const config = useSelector(selectCurrentLayoutConfig) as LayoutConfigDefaultsType;
	const navbarTheme = useSelector(selectNavbarTheme);
	const navbar = useSelector(selectNavbar);
	const location = useLocation();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const { pathname } = location;

	useEffect(() => {
		if (isMobile) {
			dispatch(navbarCloseMobile());
		}
	}, [pathname, isMobile]);

	return (
		<ThemeProvider theme={navbarTheme}>
			<Hidden lgDown>
				<NavbarLayout />
			</Hidden>

			<Hidden lgUp>
				<StyledSwipeableDrawer
					anchor="left"
					variant="temporary"
					open={navbar.mobileOpen}
					onClose={() => dispatch(navbarCloseMobile())}
					onOpen={() => { }}
					disableSwipeToOpen
					className={className}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<NavbarMobileLayout />
				</StyledSwipeableDrawer>
			</Hidden>
		</ThemeProvider>
	);
}

export default memo(NavbarWrapperLayout);
