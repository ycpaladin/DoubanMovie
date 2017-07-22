import { GET_CELEBRITY_FETCHING, GET_CELEBRITY_COMPLETED, GET_CELEBRITY_FAIL } from '../constants/celebrityActionTypes';

const defaultState = {
    isFetching: false,
    celebrity: null,
    error: false
};

export function celebrityReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CELEBRITY_FETCHING:
            return Object.assign({}, state, { isFetching: true });
        case GET_CELEBRITY_COMPLETED:
            return Object.assign({}, state, {
                isFetching: false,
                celebrity: action.playload,
                error: false
            });
        case GET_CELEBRITY_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            })
        default: return state;
    }
}