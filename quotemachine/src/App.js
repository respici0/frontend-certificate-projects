import React, { Component } from "react";
import "./App.scss";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesArr: "",
      chosenQuote: "Motivational quotes to keep you going!",
      author: "Respici0"
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
      quotesArr: response.data.quotes
    });
    console.log("In State", this.state.quotesArr);
  };

  getRandomQuote = () => {
    let max = this.state.quotesArr.length;
    return Math.floor(Math.random() * Math.floor(max));
  };

  onGetQuoteError = response => {
    console.log("Unable to get quotes", response);
  };

  quoteButtonClick = () => {
    console.log("Quote button clicked");
    let index = this.getRandomQuote();
    this.setState({
      chosenQuote: this.state.quotesArr[index].quote,
      author: this.state.quotesArr[index].author
    }, () => {
      console.log(index, this.state.chosenQuote, this.state.author);
    })

  };

  tweetButtonClick = () => {
    console.log("Tweet button clicked");
  };



  render() {
    let chosenQuote = this.state.chosenQuote;
    let author = this.state.author;
    return (
      <React.Fragment>
        <div className="App">
          <div id="quote-box">
            <div id="text">
              <p><i class="fas fa-quote-left"></i> {chosenQuote} <i class="fas fa-quote-right"></i></p>
            </div>
            <div id="author">
              <p><strong>-{author}</strong></p>
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
