import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './modules';
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxPromise, thunk)
);

export default store;