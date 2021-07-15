const redux = require('redux');

const createStore = redux.createStore

//type of action
const BUY_CAKE = 'BUY_CAKE'

//action is an object that has type property
// {
//     type: BUY_CAKE,
//     info: 'First redux action'
// }

//action creator(function that return action)
function buyCake() {
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//state
const initialState = {
    numOfCakes: 10
}

//Reducer - (previousState, action) -> newState
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE: return {
            ...state,
			numOfCakes: state.numOfCakes - 1	
        }
        default: return state
 }
}

//redux store
const store = createStore(reducer)                
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()