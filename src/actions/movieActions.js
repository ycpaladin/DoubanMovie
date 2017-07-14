import actionTypes from '../constants/actionTypes';
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
    size:1000,
    storageBackend:AsyncStorage,
    defaultExpires:null,
    sync:{
          movie(params){
            const { id, resovle, reject } = params;
            fetch(`https://api.douban.com/v2/movie/subject/${id}`).then(r=>r.json()).then(data=>{
                storage.save({
                    key:'movie',
                    id,
                    data
                });
               resovle && resovle(data);
            }).catch(error=>{
               reject && reject(error);
            });
        }
    }
});

const { 
    GET_MOVID_LIST_FETCHING, GET_HOT_MOVID_LIST_COMPLETED,GET_COMING_MOVID_LIST_COMPLETED,
    GET_MOVIE_DETAILS_FETCHING,GET_MOVIE_DETAILS_COMPLETED,GET_MOVIE_DETAILS_FAIL,INIT_MOVIE_DETAILS
} = actionTypes;

const MOVIE_KEY = "MOVIE_STORAGE";

export function getMovieList(citycode = '北京') {
    return async dispatch => {
        try{
            dispatch({ type: GET_MOVID_LIST_FETCHING });
            const response = await  fetch('https://api.douban.com/v2/movie/in_theaters');
            const data = await response.json();
            dispatch({
                type: GET_HOT_MOVID_LIST_COMPLETED,
                payload: {
                    city: citycode,
                    data
                }
            });
        }catch(e){
            console.log('出现错误..')
        }
        
    }
}

///v2/movie/coming_soon


export function getUpcomingMovieList(citycode = '北京'){
    return async dispatch => {
        try {
             dispatch({ type: GET_MOVID_LIST_FETCHING });
            const response = await fetch('https://api.douban.com/v2/movie/coming_soon');
            const data = await response.json() //.then(response => response.json()).then(data => {
            dispatch({
                type: GET_COMING_MOVID_LIST_COMPLETED,
                payload: {
                    city: citycode,
                    data
                }
            });
        } catch (error) {

            console.log('出现错误..',error)
        }
    }
}


export function getMovieDetailsById(id, force = false){
    return async dispatch => {
        try{
            dispatch({ type: GET_MOVIE_DETAILS_FETCHING});
            const res = await fetch(`https://api.douban.com/v2/movie/subject/${id}`);
            const data = await res.json();
            dispatch({type:GET_MOVIE_DETAILS_COMPLETED, payload:{ id,data}});
        }catch(error){
            dispatch({type:GET_MOVIE_DETAILS_FAIL, payload:error});
        }
    }
}

// export  function getMovieDetailsById(id, force = false){
//     return async dispatch => {
//         storage.clearMap();
//         const data = await storage.load({
//             key:'movie',
//             id,
//             syncParams:{
//                 id
//             }
//         });

//         dispatch({type:GET_MOVIE_DETAILS_COMPLETED,payload:data});
//     }
// }



export function initMovieDetails(){

    return {
        type:INIT_MOVIE_DETAILS
    }
}