import { combineReducers } from '@reduxjs/toolkit';
import message from './messageSlice';
import navbar from './navbarSlice';
import navigation from './navigationSlice';
import settings from './settingsSlice';

const reducer = combineReducers({
	navigation,
	settings,
	navbar,
	message
});

export default reducer;
