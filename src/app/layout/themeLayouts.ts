import layout from './Layout';

export type themeLayoutsType = {
	[key: string]: React.ComponentType;
};

const themeLayouts: themeLayoutsType = {
	layout
};

export default themeLayouts;
