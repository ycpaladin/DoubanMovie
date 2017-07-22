import {
    GET_ACTOR_FETCHING,
    GET_ACTOR_COMPLETED,
    GET_ACTOR_FAIL
} from '../constants/actionTypes';

const defaultState = {
    isFetching:false,
    data:null,
    message:null
}

export function actorReducer(state = {}, action) {

    switch (action.type) {
        case GET_ACTOR_FETCHING:
            return Object.assign({},state, { isFetching:true});
        case GET_ACTOR_COMPLETED:
            return Object.assign({},state, { isFetching:false, data:action.playload});
        case GET_ACTOR_FAIL:
        default:
            return state;
    }
}