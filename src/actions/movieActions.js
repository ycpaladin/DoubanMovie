import actionTypes from '../constants/actionTypes';
const { GET_MOVID_LIST_FETCHING, GET_MOVID_LIST_COMPLETED } = actionTypes;

export function getMovieList(citycode = '北京') {
    return dispatch => {
        dispatch({ type: GET_MOVID_LIST_FETCHING });
        fetch('https://api.douban.com/v2/movie/in_theaters').then(response => response.json()).then(data => {
            dispatch({
                type: GET_MOVID_LIST_COMPLETED,
                payload: {
                    city: citycode,
                    data
                }
            });
        }).catch(() => {
            console.log('出现错误..')
        });
    }
}