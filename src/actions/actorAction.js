//  GET_ACTOR_FETCHING:null,
//     GET_ACTOR_COMPLETED:null,
//     GET_ACTOR_FAIL:null,

import actionTypes from '../constants/actionTypes';
const { GET_ACTOR_FETCHING, GET_ACTOR_COMPLETED, GET_ACTOR_FAIL} = actionTypes;

const allActorData = require('./all');

export function getActorList(movieId) {

    return dispatch =>{
        dispatch({type:GET_ACTOR_FETCHING});
        setTimeout(function() {
            dispatch({
                type:GET_ACTOR_COMPLETED,
                playload: allActorData
            })
        }, 1000);
    }
}