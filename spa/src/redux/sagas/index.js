import { takeEvery } from "redux-saga/effects";

import {
  GET_TODOS_REQUESTED,
  DELETE_TODOS_REQUESTED,
  ADD_TODOS_REQUESTED
} from "../actions/types";
import baseService from "./baseService";
import { getTodos, addTodo, deleteTodo } from "./listTodos";

function* rootSaga() {
  yield takeEvery(GET_TODOS_REQUESTED, getTodos);
  yield takeEvery(ADD_TODOS_REQUESTED, addTodo);
  yield takeEvery(DELETE_TODOS_REQUESTED, deleteTodo);
}

export default rootSaga;
