import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h5>Item : {props.item}</h5>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

//2nd parameter is props of component itself which by convention is refer to as own props 
const mapStateToProps = (state, ownProps) => {

    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return{
        buyItem: dispatchFunction 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
//export default connect(null, mapDispatchToProps)(ItemContainer) // incase u only pass this fun mapDispatchToProps
