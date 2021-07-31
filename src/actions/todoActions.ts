import { ITodo } from "../utils/interfaces";
import * as ActionTypes from "./actionTypes";

export function createPost(post: ITodo) {
  return {
    type: ActionTypes.CREATE_POST_REQUEST,
    post
  };
}

export function createPostSuccess(post: ITodo) {
  return {
    type: ActionTypes.CREATE_POST_SUCCESS,
    post
  };
}

export function createPostFailure(error: string) {
  return {
    type: ActionTypes.CREATE_POST_FAILURE,
    error
  };
}

//Get Todo data
export function getPostList() {
  return {
    type: ActionTypes.GET_POSTS_REQUEST
  };
}

export function getPostListSuccess(postData: Map<Array<ITodo>, number>) {
  return {
    type: ActionTypes.GET_POSTS_SUCCESS,
    postData
  };
}

export function getPostListFailure(error: string) {
  return {
    type: ActionTypes.GET_POSTS_FAILURE,
    error
  };
}

export function updatePost(post: ITodo) {
  return {
    type: ActionTypes.UPDATE_POST_REQUEST,
    post
  };
}

export function updatePostSuccess(post: ITodo) {
  return {
    type: ActionTypes.UPDATE_POST_SUCCESS,
    post
  };
}

export function updatePostFailure(error: string) {
  return {
    type: ActionTypes.UPDATE_POST_FAILURE,
    error
  };
}

export function deletePost(post: ITodo) {
  return {
    type: ActionTypes.DELETE_POST_REQUEST,
    post
  };
}

export function deletePostSuccess(post: ITodo) {
  return {
    type: ActionTypes.DELETE_POST_SUCCESS,
    post
  };
}

export function deletePostFailure(error: string) {
  return {
    type: ActionTypes.DELETE_POST_FAILURE,
    error
  };
}
