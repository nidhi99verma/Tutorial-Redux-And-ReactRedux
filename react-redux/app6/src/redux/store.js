import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// const store = createStore(rootReducer, applyMiddleware(logger)) //logger middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger))) 

export default store;

//npm i redux-logger
//npm i --save redux-devtools-extension
//https://github.com/zalmoxisus/redux-devtools-extension