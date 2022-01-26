import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  news: newsReducer,
});

export default rootReducer;
