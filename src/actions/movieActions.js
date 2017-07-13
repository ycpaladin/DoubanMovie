import actionTypes from '../constants/actionTypes';
import { AsyncStorage } from 'react-native';
const { 
    GET_MOVID_LIST_FETCHING, GET_HOT_MOVID_LIST_COMPLETED,GET_COMING_MOVID_LIST_COMPLETED,
    GET_MOVIE_DETAILS_FETCHING,GET_MOVIE_DETAILS_COMPLETED,GET_MOVIE_DETAILS_FAIL 
} = actionTypes;

const MOVIE_KEY = "MOVIE_STORAGE";

export function getMovieList(citycode = '北京') {
    return dispatch => {
        dispatch({ type: GET_MOVID_LIST_FETCHING });
        fetch('https://api.douban.com/v2/movie/in_theaters').then(response => response.json()).then(data => {
            dispatch({
                type: GET_HOT_MOVID_LIST_COMPLETED,
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

///v2/movie/coming_soon


export function getUpcomingMovieList(citycode = '北京'){
    return dispatch => {
        dispatch({ type: GET_MOVID_LIST_FETCHING });
        fetch('https://api.douban.com/v2/movie/coming_soon').then(response => response.json()).then(data => {
            dispatch({
                type: GET_COMING_MOVID_LIST_COMPLETED,
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


export async function getMovieDetailsById(id, force = false){
    return dispatch => {
        if(force === false){
            const value = await AsyncStorage.getItem(id);
            if(value !== undefined){
                dispatch({type:GET_MOVIE_DETAILS_COMPLETED,payload:value});
                return;
            }
        }
        
        dispatch({type:GET_MOVIE_DETAILS_FETCHING});
        fetch(`https://api.douban.com/v2/movie/${id}`).then(response=>response.json()).then(data=>{
            await AsyncStorage.setItem(id, data);
            dispatch({type:GET_MOVIE_DETAILS_COMPLETED,payload:data});
        }).catch(e=>{
            dispatch({type:GET_MOVIE_DETAILS_FAIL,payload:{ error:e,message:'错误'}});
        })

    }
}

