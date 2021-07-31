import { CombinedState, combineReducers } from "redux";
import todoReducer from "./todoReducer";
import { State as PostState, Action as PostAction } from "./todoReducer";

const appReducer = combineReducers({
  post: todoReducer
});

export type ReduxState = {
  post: PostState;
};

export type Action = PostAction;

const rootReducer = (state: CombinedState<ReduxState>, action: Action) => {
  if (action.type === "RESET_ALL_DATA") {
    state = {
      post: state.post
    };
  }
  return appReducer(state as any, action);
};

export default rootReducer;
