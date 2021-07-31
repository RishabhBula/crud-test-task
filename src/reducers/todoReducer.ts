import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE
} from "../actions/actionTypes";
import { ITodo } from "../utils/interfaces";

export type State = {
  post: ITodo | null;

  getPostError: string | null;
  getPostLoading: boolean;
  orderedPosts: Array<ITodo>;
  totalPosts: number;

  postSuccess: boolean;
};

export type Action = {
  type: string;
  payload: {};
  error: Error;
  post: ITodo;
  postList: Array<ITodo>;
  postData: Map<Array<ITodo>, number> | any;
  postId: string;
};

const initialState = {
  post: null,
  getPostLoading: false,
  getPostError: null,
  postSuccess: false,
  orderedPosts: [],
  totalPosts: 0
};

const createPost = (state: State, action: Action) => ({
  ...state,
  getPostError: null,
  getPostLoading: true,
  postSuccess: false
});

const createPostFailure = (state: State, action: Action) => ({
  ...state,
  getPostError: action.error,
  getPostLoading: false,
  postSuccess: false
});

const createPostSuccess = (state: State, action: Action) => {
  return {
    ...state,
    getPostError: null,
    getPostLoading: false,
    postSuccess: true
  };
};

const updatePost = (state: State, action: Action) => ({
  ...state,
  getPostError: null,
  getPostLoading: true,
  postSuccess: false
});

const updatePostFailure = (state: State, action: Action) => ({
  ...state,
  getPostError: action.error,
  getPostLoading: false,
  postSuccess: false
});

const updatePostSuccess = (state: State, action: Action) => {
  return {
    ...state,
    getPostError: null,
    getPostLoading: false,
    postSuccess: true
  };
};

const postList = (state: State, action: Action) => ({
  ...state,
  getPostError: null,
  getPostLoading: true
});

const postListFailure = (state: State, action: Action) => ({
  ...state,
  getPostError: action.error,
  getPostLoading: false,
  postSuccess: false
});

const postListSuccess = (state: State, action: Action) => {
  return {
    ...state,
    getPostError: null,
    getPostLoading: false,
    orderedPosts: action?.postData?.postList,
    totalPosts: action?.postData?.postList?.length
  };
};

const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return createPost(state, action);
    case CREATE_POST_SUCCESS:
      return createPostSuccess(state, action);
    case CREATE_POST_FAILURE:
      return createPostFailure(state, action);
    case GET_POSTS_REQUEST:
      return postList(state, action);
    case GET_POSTS_SUCCESS:
      return postListSuccess(state, action);
    case GET_POSTS_FAILURE:
      return postListFailure(state, action);
    case UPDATE_POST_REQUEST:
      return updatePost(state, action);
    case UPDATE_POST_SUCCESS:
      return updatePostSuccess(state, action);
    case UPDATE_POST_FAILURE:
      return updatePostFailure(state, action);
    default:
      return state;
  }
};

export default todoReducer;
