import {
  POSTS_FETCH_ERROR,
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POST_DELETE_ERROR,
  POST_DELETE_START,
  POST_DELETE_SUCCESS,
  POST_FETCH_ERROR,
  POST_FETCH_START,
  POST_FETCH_SUCCESS,
  POST_UPDATE_ERROR,
  POST_UPDATE_START,
  POST_UPDATE_SUCCESS,
} from "./types";

const initialState = {
  data: [],
  currentPost: null,
  fetching: false,
  error: null,
  deleting: false,
  updating: false,
  updateSuccess: false,
  deleteSuccess: false,
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH_START:
      return { ...state, fetching: true };

    case POSTS_FETCH_ERROR:
      return { ...state, fetching: false, error: action.message };

    case POSTS_FETCH_SUCCESS:
      return { ...state, fetching: false, data: action?.posts };

    case POST_FETCH_START:
      return { ...state, fetching: true };
    case POST_FETCH_ERROR:
      return { ...state, fetching: false, error: action.message };

    case POST_FETCH_SUCCESS:
      return { ...state, fetching: false, currentPost: action?.post };

    case POST_DELETE_START:
      return { ...state, deleting: true, deleteSuccess: false };

    case POST_DELETE_ERROR:
      return {
        ...state,
        deleting: false,
        deleteSuccess: false,
        error: action?.message,
      };

    case POST_DELETE_SUCCESS:
      return {
        ...state,
        deleting: false,
        deleteSuccess: true,
        data: [...state.data].filter((val) => val._id !== action.id),
      };

    case POST_UPDATE_START:
      return { ...state, updating: true, updateSuccess: false };

    case POST_UPDATE_ERROR:
      return {
        ...state,
        updating: false,
        updateSuccess: false,
        error: action?.message,
      };

    case POST_UPDATE_SUCCESS:
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        data: [...state.data].map((val) => {
          if (val._id === action.post._id) {
            return action.post;
          } else {
            return val;
          }
        }),
      };

    default:
      return state;
  }
}
