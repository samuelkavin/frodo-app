import { createSlice } from '@reduxjs/toolkit';
import { RootStateType } from 'app/store/types';

type AppRootStateType = RootStateType<navbarSliceType>;

type initialStateProps = {
	open: boolean;
	mobileOpen: boolean;
	foldedOpen: boolean;
};

const initialState: initialStateProps = {
	open: true,
	mobileOpen: false,
	foldedOpen: false
};

export const navbarSlice = createSlice({
	name: 'frodo/navbar',
	initialState,
	reducers: {
		navbarToggleFolded: (state) => {
			state.foldedOpen = !state.foldedOpen;
		},
		navbarOpenFolded: (state) => {
			state.foldedOpen = true;
		},
		navbarCloseFolded: (state) => {
			state.foldedOpen = false;
		},
		navbarToggleMobile: (state) => {
			state.mobileOpen = !state.mobileOpen;
		},
		navbarOpenMobile: (state) => {
			state.mobileOpen = true;
		},
		navbarCloseMobile: (state) => {
			state.mobileOpen = false;
		},
		navbarClose: (state) => {
			state.open = false;
		},
		navbarOpen: (state) => {
			state.open = true;
		},
		navbarToggle: (state) => {
			state.open = !state.open;
		}
	}
});

export const {
	navbarToggleFolded,
	navbarOpenFolded,
	navbarCloseFolded,
	navbarOpen,
	navbarClose,
	navbarToggle,
	navbarOpenMobile,
	navbarCloseMobile,
	navbarToggleMobile
} = navbarSlice.actions;

export const selectNavbar = ({ frodo }: AppRootStateType) => frodo.navbar;

export type navbarSliceType = typeof navbarSlice;

export default navbarSlice.reducer;
