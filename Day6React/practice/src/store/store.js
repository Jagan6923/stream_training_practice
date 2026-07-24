import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // importing the counterReducer from the counterSlice.js file to be used in the Redux store

const store = configureStore({ // creating the Redux store using the configureStore function from @reduxjs/toolkit
    reducer: {
        myCounter: counterReducer, // adding the counterReducer to the store's reducer object, so that it can handle actions related to the counter slice of state
    },
});

export default store;
