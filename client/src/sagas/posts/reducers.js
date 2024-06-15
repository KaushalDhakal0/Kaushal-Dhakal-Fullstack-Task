import { POSTS_FETCH_ERROR, POSTS_FETCH_START, POSTS_FETCH_SUCCESS ,POST_FETCH_ERROR, POST_FETCH_START, POST_FETCH_SUCCESS} from "./types";

const initialState = {
    data : [],
    currentPost:null,
    fetching: false,
    error:null,
    deleting: false,
    updating: false
}


export function postsReducer(state = initialState, action){
    switch(action.type){
        case POSTS_FETCH_START:
            return { ...state , fetching: true}
        case POSTS_FETCH_ERROR : 
            return { ...state , fetching : false, error : action.message}

        case POSTS_FETCH_SUCCESS:
            return { ...state , fetching : false ,  data : action?.posts }

            case POST_FETCH_START:
                return { ...state , fetching: true}
            case POST_FETCH_ERROR : 
                return { ...state , fetching : false, error : action.message}
    
            case POST_FETCH_SUCCESS:
                return { ...state , fetching : false ,  currentPost : action?.post }
        default:
            return state;
    }
}