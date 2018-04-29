import { call, put } from "redux-saga/effects";

import baseService from "./baseService";
import { GET_TODOS_SUCCESS } from "../actions/types";

export function* getTodos() {
  try {
    const value = yield call(get);
    yield put({ type: GET_TODOS_SUCCESS, todos: value.data });
  } catch (e) {
    console.log(e);
  }
}

export function* addTodo(action) {
  try {
    const value = yield call(add, action);
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
}

export function* deleteTodo(action) {
  try {
    const value = yield call(del, action.id);
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
}

function get() {
  return new Promise((resolve, reject) => {
    baseService("GET", "/todos")
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function add(data) {
  return new Promise((resolve, reject) => {
    const formData = { title: data.title, content: data.content };
    baseService("POST", "/todos", formData)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function del(id) {
  return new Promise((resolve, reject) => {
    baseService("DELETE", `/todos/${id}`)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
