import FrodoNavigation from '@frodo/core/Navigation';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import { selectNavigation } from 'app/store/slices/navigationSlice';
import useThemeMediaQuery from 'src/@frodo/hooks/useThemeMediaQuery';
import { navbarCloseMobile } from 'app/store/slices/navbarSlice';
import { FrodoNavigationProps } from '@frodo/core/Navigation/Navigation';

function Navigation(props: Partial<FrodoNavigationProps>) {
	const { className = '', layout = 'vertical', dense, active } = props;

	const navigation = useAppSelector(selectNavigation);

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const dispatch = useAppDispatch();

	return useMemo(() => {
		function handleItemClick() {
			if (isMobile) {
				dispatch(navbarCloseMobile());
			}
		}

		return (
			<FrodoNavigation
				className={clsx('navigation flex-1', className)}
				navigation={navigation}
				layout={layout}
				dense={dense}
				active={active}
				onItemClick={handleItemClick}
				checkPermission
			/>
		);
	}, [dispatch, isMobile, navigation, active, className, dense, layout]);
}

export default Navigation;
