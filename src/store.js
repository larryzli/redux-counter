import { createStore } from "redux";
import counter from "./ducks/counter";

const store = createStore(counter);

export default store;

// MULTIPLE REDUCERS
// import { createStore, combineReducers } from 'redux';
// import reducerA from './reducerA';
// import reducerB from './reducerB';
// export default createStore(combineReducers(reducerA, reducerB));
