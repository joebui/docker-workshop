import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./shared/components/Layout";

import configureStore from "./redux/stores";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("app")
);
