import { applyMiddleware, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import PromiseMiddleware from 'redux-promise';
import Logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middlewares = [ReduxThunk, PromiseMiddleware, Logger];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));