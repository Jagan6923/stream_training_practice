import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // importing the useSelector and useDispatch hooks from react-redux to access the Redux store and dispatch actions
import { increment, decrement, reset } from './features/counter/counterSlice'; // importing the actions from the counterSlice.js file
import './App.css'; 
const Counter = () => {

    const count = useSelector(state => state.myCounter.value); // to access the counter value from the Redux store
    const dispatch = useDispatch(); // to dispatch actions to the Redux store

    return (
        <div>
            <h1>Redux toolkit Counter: {count}</h1> {/* displaying the current counter value from the Redux store */}
            <button className="button" onClick={() => dispatch(increment())}>Increment</button> {/* dispatching the increment action to the Redux store */}
            <button className="button" onClick={() => dispatch(decrement())}>Decrement</button> {/* dispatching the decrement action to the Redux store */}
            <button className="button" onClick={() => dispatch(reset())}>Reset</button> {/* dispatching the reset action to the Redux store */}
            <h3>Welcome user and admin</h3>
        </div>
    )
}

export default Counter;