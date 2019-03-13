import React, { Component } from "react";
import "./App.scss";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ""
    };
  }

  componentDidMount = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(this.onGetQuoteSuccess)
      .catch(this.onGetQuoteError);
  };

  onGetQuoteSuccess = response => {
    console.log("Random Quote", response.data.quotes);
    this.setState({
      quotes: response.data.quotes
    });
    console.log("In State", this.state.quotes);
  };

  onGetQuoteError = response => {
    console.log("Unable to get quotes", response);
  };

  quoteButtonClick = () => {
    console.log("Quote button clicked");
  };

  tweetButtonClick = () => {
    console.log("Tweet button clicked");
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div id="quote-box">
            <div id="text">
              <p>"Random quote that will be dynamic soon"</p>
            </div>
            <div id="author">
              <p>-Author Name</p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              id="tweet-quote"
              onClick={this.tweetButtonClick}
            >
              <i className="fab fa-twitter" />
            </button>
            <button
              type="button"
              className="btn btn-success"
              id="new-quote"
              onClick={this.quoteButtonClick}
            >
              New quote
            </button>
          </div>
          <div className="footer">
            <p>
              Created by{" "}
              <a href="https://robertpaulrespicio.com/" target="_block">
                Respici0
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
