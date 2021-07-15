import React from 'react'
import { connect } from 'react-redux';

function ItemContainer(props) {
    return (
        <div>
            <h5>Item : {props.item}</h5>
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

export default connect(mapStateToProps)(ItemContainer)
