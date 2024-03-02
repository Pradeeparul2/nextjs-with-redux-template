import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk'
import userReducer from '../redux/features/test/testState'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: userReducer,
  // here we will be adding reducers
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: ['dev'],
  middleware: (getDefaultMiddleware) => {
    return [thunk]
  },
})
export const persistor = persistStore(store, {}, function () {
  persistor.persist();
})
export default store;