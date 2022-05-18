import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddlewave from "redux-thunk";

const enhanceStore = applyMiddleware(thunkMiddlewave);
const enhanceCompose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
  }) || compose;

const store = createStore(reducer, enhanceCompose(enhanceStore));

export default store;
