import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit';
import frodo from './slices';

const createReducer = (asyncReducers: ReducersMapObject) =>
	combineReducers({
		frodo,
		...asyncReducers
	} as ReducersMapObject);

export default createReducer;
