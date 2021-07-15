import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h5>Number of icecreams : {props.numOfIceCreams}</h5>
            <button onClick={props.buyIceCream}>Buy Icecreams🍦</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())  
    }
}

export default connect(
                    mapStateToProps, 
                    mapDispatchToProps
                    )(IceCreamContainer)
