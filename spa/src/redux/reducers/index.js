import { combineReducers } from "redux";

import homeReducer from "./homeReducer";

const mainReducer = combineReducers({
  homeReducer
});

export default mainReducer;
