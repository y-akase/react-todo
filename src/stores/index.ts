import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';

const reducer = combineReducers({
  todo: todoReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export default store;
