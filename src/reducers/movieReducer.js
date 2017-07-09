import actionTypes from '../constants/actionTypes';
const { GET_MOVID_LIST_FETCHING, GET_MOVID_LIST_COMPLETED } = actionTypes;
const defaultState = {
    isFetching: false,
    cityCode: '北京',
    movies: null
}
export function movieReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_MOVID_LIST_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });

        case GET_MOVID_LIST_COMPLETED:
            return Object.assign({}, state, {
                isFetching: false,
                movies: action.payload.data.subjects
            });
        default:
            return state;
    }

}