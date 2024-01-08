import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from 'app/store';
import { selectDefaultSettings } from 'app/store/slices/settingsSlice';
import useThemeMediaQuery from '@frodo/hooks/useThemeMediaQuery';
import { navbarToggle, navbarToggleMobile } from 'app/store/slices/navbarSlice';
import MenuIcon from '@mui/icons-material/Menu';

type NavbarToggleButtonProps = {
	className?: string;
	children?: React.ReactNode;
};

function NavbarToggleButton(props: NavbarToggleButtonProps) {
	const { className = '', children = <MenuIcon /> } = props;

	const dispatch = useAppDispatch();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const settings = useAppSelector(selectDefaultSettings);
	const { config } = settings.layout;

	return (
		<IconButton
			className={className}
			color="inherit"
			size="small"
			onClick={() => {
				if (isMobile) {
					dispatch(navbarToggleMobile());
				} else {
					dispatch(navbarToggle());
				}
			}}
		>
			{children}
		</IconButton>
	);
}

export default NavbarToggleButton;
