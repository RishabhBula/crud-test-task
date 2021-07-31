import { all, call, put, takeLatest } from "redux-saga/effects";

import { ITodo } from "../utils/interfaces";
import * as ActionTypes from "../actions/actionTypes";
import {
  updatePostRequest,
  postListRequest,
  deletePostRequest,
  createPostRequest
} from "../apis/todoApi";
import {
  createPostFailure,
  createPostSuccess,
  deletePostFailure,
  deletePostSuccess,
  getPostListFailure,
  getPostListSuccess,
  updatePostFailure,
  updatePostSuccess
} from "../actions/todoActions";

type Params = {
  post: ITodo;
  type: string;
};

function* postList(): any {
  try {
    let data: any;
    data = yield call(postListRequest);

    yield put(getPostListSuccess(data));
  } catch (error: any) {
    yield put(getPostListFailure(error?.message));
  }
}

function* createPost({ post }: Params): any {
  try {
    const postResponse = yield call(createPostRequest, post);
    yield put(createPostSuccess(postResponse));

    let data: any;
    data = yield call(postListRequest);

    yield put(getPostListSuccess(data));
  } catch (error: any) {
    yield put(createPostFailure(error?.message));
  }
}

function* updatePost({ post }: Params): any {
  try {
    const postResponse = yield call(updatePostRequest, post);
    yield put(updatePostSuccess(postResponse));

    let data: any;
    data = yield call(postListRequest);

    yield put(getPostListSuccess(data));
  } catch (error: any) {
    yield put(updatePostFailure(error?.message));
  }
}

function* deletePost({ post }: Params): any {
  try {
    const postResponse = yield call(deletePostRequest, post);
    yield put(deletePostSuccess(postResponse));

    let data: any;
    data = yield call(postListRequest);

    yield put(getPostListSuccess(data));
  } catch (error: any) {
    yield put(deletePostFailure(error?.message));
  }
}

function* watchGetRequest() {
  yield takeLatest(ActionTypes.GET_POSTS_REQUEST, postList);
  yield takeLatest(ActionTypes.CREATE_POST_REQUEST, createPost);
  yield takeLatest(ActionTypes.DELETE_POST_REQUEST, deletePost);
  yield takeLatest(ActionTypes.UPDATE_POST_REQUEST, updatePost);
}

export default function* sagas() {
  yield all([watchGetRequest()]);
}
