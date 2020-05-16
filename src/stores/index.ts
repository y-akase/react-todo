import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todo';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = persistReducer(
  persistConfig,
  combineReducers({
    todo: todoReducer,
  })
);

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export const persistor = persistStore(store);
export default store;
