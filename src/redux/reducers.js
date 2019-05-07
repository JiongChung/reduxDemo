import { combineReducers } from 'redux';

import {
  countr,
  banner
} from './action';


const toCountr = (state = 0 ,action) => {
    if(action.type === countr.text){
        return action.number;
    }
    return state;
}

const toBanerrList = (state = [], action) => {
    if(action.type === banner.text){
        return action.list;
    }
    return state;
}

const reducer = combineReducers({
    toCountr,
    toBanerrList
})

export default reducer;