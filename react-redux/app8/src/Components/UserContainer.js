import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux';


function UserContainer({userData, fetchUser}) {

    useEffect(() => {
        fetchUser()
    }, [])

    return userData.loading ? (<h5>Loading</h5>) 
              : userData.error ? (<h5>{userData.error}</h5>) 
              : (<div>
                    <h5>User List</h5>
                    <div>
                        {
                            userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
                        }
                    </div>
                </div>)
}

const mapStateToProps = state => {
    return{
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUser: () => dispatch(fetchUser())  
    }
}

export default connect(
                    mapStateToProps, 
                    mapDispatchToProps
                    )(UserContainer)

//redux-thunk package : allow us to async action creator in our application
