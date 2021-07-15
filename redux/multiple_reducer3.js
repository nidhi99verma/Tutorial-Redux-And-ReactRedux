const redux = require('redux');

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
const store = createStore(rootReducer)                
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

//when we have an action both of reducer receive that action the difference is that one of them acts on the action where 
//as the other just ignores it 

//each of the reducer managing its own part of global state 
//state parameter is different for every reducer and correspond to the part of the state it manages 
//when app grow in size u can split the reducer into separate file and keep them completely indipendent and managing
//different areas