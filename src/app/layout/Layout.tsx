import { styled } from '@mui/material/styles';
import FrodoMessage from '@frodo/components/Message';
import AppContext from 'app/AppContext';
import clsx from 'clsx';
import { ReactNode, memo, useContext, Suspense } from 'react';
import { useSelector } from 'react-redux';
import FrodoLoading from '@frodo/components/Loading';
import { useRoutes } from 'react-router-dom';
import { selectCurrentLayoutConfig } from 'app/store/slices/settingsSlice';
import { LayoutConfigDefaultsType } from 'app/layout/LayoutConfig';
import LeftSideLayout from './components/LeftSideLayout';
import NavbarWrapperLayout from './components/NavbarWrapperLayout';
import ToolbarLayout from './components/ToolbarLayout';

const Root = styled('div')<{ config: LayoutConfigDefaultsType }>(({ config }) => ({
	...(config.mode === 'boxed' && {
		clipPath: 'inset(0)',
		maxWidth: `${config.containerWidth}px`,
		margin: '0 auto',
		boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
	}),
	...(config.mode === 'container' && {
		'& .container': {
			maxWidth: `${config.containerWidth}px`,
			width: '100%',
			margin: '0 auto'
		}
	})
}));

type LayoutProps = {
	children?: ReactNode;
};

function Layout(props: LayoutProps) {
	const { children } = props;

	const config = useSelector(selectCurrentLayoutConfig) as LayoutConfigDefaultsType;
	const appContext = useContext(AppContext);
	const { routes } = appContext;

	return (
		<Root
			id="frodo-layout"
			className="flex w-full"
			config={config}
		>
			{config.leftSidePanel.display && <LeftSideLayout />}

			<div className="flex min-w-0 flex-auto flex-col">
				<main
					id="frodo-main"
					className="relative flex min-h-full min-w-0 flex-auto flex-col"
				>
					{config.navbar.display && (
						<NavbarWrapperLayout
							className={clsx(config.navbar.style === 'fixed' && 'sticky top-0 z-50')}
						/>
					)}

					{config.toolbar.display && (
						<ToolbarLayout
							className={clsx(
								config.toolbar.style === 'fixed' && 'sticky top-0',
								config.toolbar.position === 'above' && 'z-40 order-first'
							)}
						/>
					)}

					<div className="relative z-10 flex min-h-0 flex-auto flex-col">
						<Suspense fallback={<FrodoLoading />}>{useRoutes(routes)}</Suspense>
						{children}
					</div>
				</main>
			</div>
			<FrodoMessage />
		</Root>
	);
}

export default memo(Layout);
