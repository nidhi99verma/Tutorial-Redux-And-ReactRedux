const redux = require('redux');

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const combineReducer = redux.combineReducers

//type of action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action creator(function that return action)
function buyCake() {
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return{
        type: BUY_ICECREAM,
    }
}

//multiple state

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

//Multiple Reducer

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE: return {
            ...state,
			numOfCakes: state.numOfCakes - 1	
        }
        default: return state
 }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM: return {
            ...state,
			numOfIceCreams: state.numOfIceCreams - 1	
        }
        default: return state
 }
}

//combinarion of all ur reducer as root reducer
const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


//redux store
const store = createStore(rootReducer, applyMiddleware(logger)) //pass middleware function as 2nd argument and pass           
console.log('Initial State', store.getState());                 //middleware in this function
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

//npm i redux-logger
