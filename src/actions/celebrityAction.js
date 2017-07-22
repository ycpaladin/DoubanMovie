import { GET_CELEBRITY_FETCHING, GET_CELEBRITY_COMPLETED, GET_CELEBRITY_FAIL } from '../constants/celebrityActionTypes';


export function getCelebrityById(id) {
    return async dispatch => {
        try {
            dispatch({ type: GET_CELEBRITY_FETCHING });
            const response = await fetch(`https://api.douban.com/v2/movie/celebrity/${id}`);
            const data = await response.json();
            dispatch({ type: GET_CELEBRITY_COMPLETED, playload: { data } });
        } catch (e) {
            dispatch({ type: GET_CELEBRITY_FAIL, playload: { error: e } });
        }
    }
}