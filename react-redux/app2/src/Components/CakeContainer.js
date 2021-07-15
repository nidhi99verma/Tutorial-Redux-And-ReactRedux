import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h5>Number of cakes : {props.numOfCakes}</h5>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

//step:1: we u want to access redux state in your component you define mapStateToProps function it gets redux state 
//as a parameter which can be used to retrieve the appropriate state properties
//we can make this function in different file called selectors
const mapStateToProps = state => {
    return{
        numOfCakes: state.numOfCakes
    }
}

//step:2: this function gets dispatch method as a parameter and allows us to map action creators to props in our component

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())  //dispatch action creator from redux
    }
}
//step:3: conneect these 2 function to react component
//connect function from react redux, connect function connects a react component to redux store
//in our case connect CakeContainer to redux store
export default connect(
                    mapStateToProps, 
                    mapDispatchToProps
                    )(CakeContainer)
