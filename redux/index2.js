const redux = require('redux');

const createStore = redux.createStore

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

//state
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20 
}

//Reducer - (previousState, action) -> newState
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE: return {
            ...state,
			numOfCakes: state.numOfCakes - 1	
        }
		case BUY_ICECREAM: return {
            ...state,
			numOfIceCreams: state.numOfIceCreams - 1	
        }
        default: return state
 }
}

//redux store
const store = createStore(reducer)                
console.log('Initial State', store.getState());
// store.subscribe(dispatch action creator function ex: buyCake())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()