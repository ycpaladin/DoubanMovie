import keyMirror from 'fbjs/lib/keyMirror';

const actionTypes = keyMirror({
    GET_MOVID_LIST_FETCHING: null,
    GET_HOT_MOVID_LIST_COMPLETED:null,
    GET_COMING_MOVID_LIST_COMPLETED:null,
});

export default actionTypes;