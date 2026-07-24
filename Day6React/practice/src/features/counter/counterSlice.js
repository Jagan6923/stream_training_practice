import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0, // initial state of the counter, set to 0
};

const counterSlice = createSlice({
    name: 'counter', // name of the slice, used to identify the slice in the Redux store
    initialState, // initial state of the slice, set to the initialState object defined above
    reducers: { // defining the reducers for the slice, which are functions that handle actions and update the state accordingly
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions; // exporting the actions defined in the slice, so they can be dispatched from components to update the state
export default counterSlice.reducer; // exporting the reducer function defined in the slice, so it can be added to the Redux store and used to update the state when actions are dispatched