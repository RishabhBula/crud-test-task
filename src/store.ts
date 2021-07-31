import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas/rootSagas";

// Create sagas middleware
const sagaMiddleware = createSagaMiddleware();
const middleware: any = [sagaMiddleware];

export default function configureStore() {
  const isProd = process.env.NODE_ENV === "production";
  if (!isProd) {
    middleware.push(logger);
  }

  const store = createStore(
    rootReducer as any,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  // Running sagas
  sagaMiddleware.run(rootSaga);
  return store;
}
