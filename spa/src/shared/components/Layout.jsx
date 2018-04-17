import Header from "./Header.jsx";
import Home from "Pages/Home.jsx";

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <BrowserRouter basename="/" forceRefresh={false}>
        <div className="wrap">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
