import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import cookieReducer from './cookie/cookieReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cookie: cookieReducer
})

export default rootReducer