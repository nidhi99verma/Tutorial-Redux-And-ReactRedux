const redux = require('redux');
const createStore = redux.createStore;

//state
const initialStae = {
    loading: false,
    user: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//action
const FetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}
const FetchUsersSucces = () => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const FetchUsersFailure = () => {
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
        case FETCH_USERS_REQUEST:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

const store = createStore(reducer)

//fetch a list of user from an API end point and stores it in the redux store

// state:
// state = {
//   loading: true,                  display k=loding spiner in ur component
//   data: [],                       list of users
//   error: ''                       display error to the user
// }

// action:
// FETCH_USERS_REQUEST- Fetch list of users
// FETCH_USERS_SUCCESS-Fetch successfully
// FETCH_USERS_FAILURE-Error fetching the data

// reducer:
// case: FETCH_USERS_REQUEST
//          loading: true
// case: FETCH_USERS_SUCCESS
//          loading: false
//          user: data(from API)
// case: FETCH_USERS_FAILURE
//          loading: false
//          error: error(from API)