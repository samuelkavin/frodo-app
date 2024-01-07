import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from 'app/store/types';
import { SnackbarProps } from '@mui/material/Snackbar/Snackbar';
import { FrodoMessageVariantType } from '@frodo/components/Message/Message';

type AppRootStateType = RootStateType<messageSliceType>;

/**
 * The type definition for the initial state of the message slice.
 */
type initialStateProps = {
	state: boolean;
	options: Pick<SnackbarProps, 'anchorOrigin' | 'autoHideDuration' | 'message'> & {
		variant: FrodoMessageVariantType;
	};
};

/**
 * The initial state of the message slice.
 */
const initialState: initialStateProps = {
	state: false,
	options: {
		variant: 'info',
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'center'
		},
		autoHideDuration: 2000,
		message: 'Hi'
	}
};

/**
 * The Message slice.
 */
export const messageSlice = createSlice({
	name: 'frodo/message',
	initialState,
	reducers: {
		showMessage: (state, action: PayloadAction<SnackbarProps>) => {
			state.state = true;
			state.options = {
				...initialState.options,
				...action.payload
			} as initialStateProps['options'];
		},
		hideMessage: (state) => {
			state.state = false;
		}
	}
});

export const { hideMessage, showMessage } = messageSlice.actions;

export const selectFrodoMessageState = (state: AppRootStateType) => state.frodo.message.state;

export const selectFrodoMessageOptions = (state: AppRootStateType) => state.frodo.message.options;

export type messageSliceType = typeof messageSlice;

export default messageSlice.reducer;
