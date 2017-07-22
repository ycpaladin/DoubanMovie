import keyMirror from 'fbjs/lib/keyMirror';


export const {
    GET_MOVID_LIST_FETCHING,
    GET_HOT_MOVID_LIST_COMPLETED,
    GET_COMING_MOVID_LIST_COMPLETED,

    // 正在获取电影详情
    GET_MOVIE_DETAILS_FETCHING, 
    // 获取电影详情完成
    GET_MOVIE_DETAILS_COMPLETED,
    // 获取电影详情失败
    GET_MOVIE_DETAILS_FAIL,    

    NIT_MOVIE_DETAILS,

    GET_ACTOR_FETCHING,
    GET_ACTOR_COMPLETED,
    GET_ACTOR_FAIL,

} = keyMirror({
    GET_MOVID_LIST_FETCHING: null,
    GET_HOT_MOVID_LIST_COMPLETED:null,
    GET_COMING_MOVID_LIST_COMPLETED:null,

    // 正在获取电影详情
    GET_MOVIE_DETAILS_FETCHING:null, 
    // 获取电影详情完成
    GET_MOVIE_DETAILS_COMPLETED:null,
    // 获取电影详情失败
    GET_MOVIE_DETAILS_FAIL:null,

    // INIT_MOVIE_DETAILS:null,

    GET_ACTOR_FETCHING:null,
    GET_ACTOR_COMPLETED:null,
    GET_ACTOR_FAIL:null,
});