import { combineReducers } from "redux";

import updateReducer from "./update-reducer";
import adminProjectReducer from "./admin-project-reducer";
import projectReducer from "./project-reducer";

const mainReducer = combineReducers({
  updateReducer,
  adminProjectReducer,
  projectReducer
});

export default mainReducer;
