import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div className="c-home">
        <Helmet
          title="To-do list"
          meta={[{ name: "description", content: "To do list" }]}
        />
      </div>
    );
  }
}

export default Home;
