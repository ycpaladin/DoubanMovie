import  { GET_MOVID_LIST_FETCHING, GET_HOT_MOVID_LIST_COMPLETED,GET_COMING_MOVID_LIST_COMPLETED }  from '../constants/actionTypes';

const defaultState = {
    isFetching: false,
    cityCode: '北京',
    hot:null,
    upcoming:null,
}
export function movieReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_MOVID_LIST_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });

        case GET_HOT_MOVID_LIST_COMPLETED:
            return Object.assign({}, state, {
                isFetching: false,
                hot: action.payload.data.subjects
            });
        case GET_COMING_MOVID_LIST_COMPLETED:
            return Object.assign({}, state, {
                isFetching: false,
                upcoming: action.payload.data.subjects
            });
        
        default:
            return state;
    }

}