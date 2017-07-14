import actionTypes from '../constants/actionTypes';
import { Map} from 'immutable';
const {
    // 正在获取电影详情
    GET_MOVIE_DETAILS_FETCHING, 
    // 获取电影详情完成
    GET_MOVIE_DETAILS_COMPLETED,
    // 获取电影详情失败
    GET_MOVIE_DETAILS_FAIL,

    INIT_MOVIE_DETAILS
} = actionTypes;

const defaultState = {
    isFetching:false,
    movie: {},
    error:null
}

export function movieDetailsReducer(state = defaultState, action){

    switch(action.type){
        case GET_MOVIE_DETAILS_FETCHING:
            return Object.assign({}, state, {isFetching:true});
        case GET_MOVIE_DETAILS_COMPLETED:
            const { id, data} = action.payload;
            state.movie[id] = data;
            return Object.assign({}, state, {isFetching:false});
        case GET_MOVIE_DETAILS_FAIL:
            return Object.assign({}, state, {isFetching:false, error: action.payload.error});
        case INIT_MOVIE_DETAILS:
            return Object.assign({},state,{isFetching:true, movie:null, error:null});
        default:
            return state
    }
}