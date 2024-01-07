import { createTheme } from '@mui/material/styles';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import _ from '@lodash';
import { defaultSettings, defaultThemeOptions, extendThemeWithMixins, mustHaveThemeOptions } from '@frodo/core/Theme';
import settingsConfig from 'app/configs/settingsConfig';
import themeLayoutConfigs from 'app/layout/themeLayoutConfigs';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { ThemeOptions } from '@mui/material/styles/createTheme';

type AppRootStateType = RootStateType<settingsSliceType>;

type layoutProps = {
	style: string;
	config: unknown;
};

function getInitialSettings() {
	const defaultLayoutStyle =
		settingsConfig.layout && settingsConfig.layout.style ? settingsConfig.layout.style : 'layout';

	const layout: layoutProps = {
		style: defaultLayoutStyle,
		config: themeLayoutConfigs[defaultLayoutStyle].defaults
	};

	return _.merge({}, defaultSettings, { layout }, settingsConfig);
}

const initialSettings = getInitialSettings();

type initialStateProps = {
	defaults;
};

const initialState: initialStateProps = {
	defaults: initialSettings
};

export const setDefaultSettings = createAppAsyncThunk(
	'frodo/settings/setDefaultSettings',
	async (val, { dispatch, getState }) => {
		const AppState = getState() as AppRootStateType;

		const { settings } = AppState.frodo;

		return {
			...settings,
			defaults: settings.defaults
		};
	}
);

export const settingsSlice = createSlice({
	name: 'frodo/settings',
	initialState,
	reducers: {
		setInitialSettings: () => _.merge({}, initialState)
	},
	extraReducers: (builder) => {
		builder.addCase(setDefaultSettings.fulfilled, (state, action) => action.payload);
	}
});

const getMainTheme = (state: AppRootStateType) => state.frodo.settings.defaults.theme.main;
const getNavbarTheme = (state: AppRootStateType) => state.frodo.settings.defaults.theme.navbar;
const getToolbarTheme = (state: AppRootStateType) => state.frodo.settings.defaults.theme.toolbar;

/**
 * Generates the MUI theme object.
 */
function generateMuiTheme(theme) {
	const data = _.merge({}, defaultThemeOptions, theme, mustHaveThemeOptions) as ThemeOptions;

	return createTheme(
		_.merge({}, data, {
			mixins: extendThemeWithMixins(data)
		} as ThemeOptions)
	);
}

export const selectContrastMainTheme = () => {
	return selectMainTheme;
};

export const selectMainTheme = createSelector([getMainTheme], (theme) => generateMuiTheme(theme));

export const selectNavbarTheme = createSelector([getNavbarTheme], (theme) => generateMuiTheme(theme));

export const selectToolbarTheme = createSelector([getToolbarTheme], (theme) => generateMuiTheme(theme));

export const selectCurrentLayoutConfig = (state: AppRootStateType) => state.frodo.settings.defaults.layout.config;

export const selectDefaultSettings = (state: AppRootStateType) => state.frodo.settings.defaults;

export const { setInitialSettings } = settingsSlice.actions;

export type settingsSliceType = typeof settingsSlice;

export default settingsSlice.reducer;
