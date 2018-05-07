import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import comments from './comments';

export default combineReducers({
    router: routerReducer,
    comments
});
