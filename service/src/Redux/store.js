import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducers from './reducers';

export const history = createBrowserHistory({
  initialEntries: [{ state: { key: 'home' } }]
});

const persistConfig = {
  key: 'ihk',
  storage, // Defaults to localStorage
  stateReconciler: autoMergeLevel2, // Needed to allow deeper keys,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, Reducers(history));

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(routerMiddleware(history), Logger, thunk))
);

export const persistor = persistStore(store);
