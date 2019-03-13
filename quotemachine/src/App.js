import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div className="row">
            <div id="text">
              <p>"Random quote that will be dynamic soon"</p>
            </div>
            <div id="author">
              <p>-Author Name</p>
            </div>
          </div>
          <div className="row">
            <button type="button" className="btn btn-success" id="new-quote">
              New quote
            </button>
            <button type="button" className="btn btn-primary" id="tweet-quote">
              <i className="fab fa-twitter" /> Tweet quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
