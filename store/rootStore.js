import { createStore, combineReducers } from 'redux';
import {
    AvengersList
} from './reducers';

const appReducers = combineReducers({
    AvengersList
});

export default createStore(appReducers);