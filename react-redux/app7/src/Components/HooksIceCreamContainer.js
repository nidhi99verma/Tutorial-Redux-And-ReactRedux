import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyIceCream } from '../redux';

function HooksIceCreamContainer() {

    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h5>Number of icecreams : {numOfIceCreams}</h5>
            <button onClick={() => dispatch(buyIceCream())}>Buy Icecreams🍦</button>
        </div>
    )
}

export default HooksIceCreamContainer

