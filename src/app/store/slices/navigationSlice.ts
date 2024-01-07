import { createEntityAdapter, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from 'app/store/types';
import { FrodoNavItemType } from '@frodo/core/Navigation/types/NavItemType';
import { FrodoNavigationType } from '@frodo/core/Navigation/types/NavigationType';
import FrodoNavigationHelper from '@frodo/utils/NavigationHelper';
import navigationConfig from 'app/configs/navigationConfig';

type AppRootStateType = RootStateType<[navigationSliceType]>;

const navigationAdapter = createEntityAdapter<FrodoNavItemType>();

const emptyInitialState = navigationAdapter.getInitialState([]);

const initialState = navigationAdapter.upsertMany(emptyInitialState, navigationConfig);

export const { selectAll: selectNavigationAll } = navigationAdapter.getSelectors(
	(state: AppRootStateType) => state.frodo.navigation
);

export const navigationSlice = createSlice({
	name: 'frodo/navigation',
	initialState,
	reducers: {
		setNavigation: (state, action: PayloadAction<FrodoNavigationType>) =>
			navigationAdapter.setAll(state, action.payload),
		resetNavigation: () => initialState
	}
});

export const { setNavigation, resetNavigation } = navigationSlice.actions;

export const selectNavigation = createSelector([selectNavigationAll], (navigation) => {
	function setAdditionalData(data: FrodoNavigationType): FrodoNavigationType {
		return data?.map((item) => ({
			...item,
			...{}
		}));
	}

	const navigationValues = setAdditionalData(navigation);

	return navigationValues;
});

export const selectFlatNavigation = createSelector([selectNavigation], (navigation) =>
	FrodoNavigationHelper.getFlatNavigation(navigation)
);

export type navigationSliceType = typeof navigationSlice;

export default navigationSlice.reducer;
