import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../actions';
import {decrement} from '../actions';

function DisplayCounter(){
    const counter = useSelector(state => state.count);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Display Counter here</h1>
             <h1>{counter}</h1>
             <button onClick = {() => dispatch(increment(100,20))}>+</button>
             <button onClick = {() => dispatch(decrement(50,10))}>-</button>
             {isLogged && <h2>i am logged in !!</h2>}
        </div>
    );
}
export default DisplayCounter;