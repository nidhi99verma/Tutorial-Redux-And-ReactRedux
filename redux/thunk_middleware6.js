const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default
//redux-thunk: provide function to action creator for async task
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware

//state
const initialStae = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//action
const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//reducer
const reducer = (state = initialStae, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

//async action creater return function insted of action 
const fetchUser = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUser())

//npm install axios redux-thunk
//axios: request to an API end point
//redux-thunk: define async action creators midlleware