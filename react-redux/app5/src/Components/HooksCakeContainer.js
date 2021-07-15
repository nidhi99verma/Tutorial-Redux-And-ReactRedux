import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h5>Number of Cakes : {numOfCakes}</h5>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes🎂</button>
        </div>
    )
}

export default HooksCakeContainer

//using hooks is very simpler than using connect function

//useSelector Hooks: react redux library provide which acts as closed equivalent to the map state to 
//props function we have already seen so to get hold of any state that is maintained in the redux store we use
//useSelector hook.

//useDispatch: useDispatch hooks return reference to dispatch function from redux store 

//some warning to use hooks for redux