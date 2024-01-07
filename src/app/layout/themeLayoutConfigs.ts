import layout, { LayoutConfigDefaultsType } from './LayoutConfig';

export type themeLayoutDefaultsProps = LayoutConfigDefaultsType;

export type themeLayoutProps = {
	title: string;
	defaults: themeLayoutDefaultsProps;
	form?;
};

export type themeLayoutConfigsProps = {
	[key: string]: themeLayoutProps;
};

const themeLayoutConfigs: themeLayoutConfigsProps = {
	layout: layout as themeLayoutProps
};

export default themeLayoutConfigs;
