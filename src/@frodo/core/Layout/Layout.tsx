/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { selectDefaultSettings } from 'app/store/slices/settingsSlice';
import { memo, useCallback, useMemo, useRef } from 'react';
import { useAppSelector } from 'app/store';
import { RouteMatch, RouteObject } from 'react-router-dom';
import { themeLayoutsType } from 'app/layout/themeLayouts';

export type FrodoRouteObjectType = RouteObject & {
	settings?;
};

export type FrodoRouteMatchType = RouteMatch & {
	route: FrodoRouteObjectType;
};

type FrodoLayoutProps = {
	layouts: themeLayoutsType;
};

function FrodoLayout(props: FrodoLayoutProps) {
	const { layouts, ...restProps } = props;
	const defaultSettings = useAppSelector(selectDefaultSettings);
	const newSettings = useRef({});

	const shouldAwaitRender = useCallback(() => {
		newSettings.current = defaultSettings;
	}, [defaultSettings]);

	shouldAwaitRender();

	const Layout = useMemo(() => layouts[defaultSettings.layout.style], [layouts, defaultSettings.layout.style]);

	return <Layout {...restProps} />;
}

export default memo(FrodoLayout);
