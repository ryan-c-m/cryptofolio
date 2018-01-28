import React, { Component } from "react";
import CoinIndex from "./containers/coin-index";
import CoinSummary from "./containers/coin-summary";
import PageHeader from "./components/page-header";
import MainView from "./containers/main-view";
import "./css/bootstrap.min.css";
import "./css/react-select.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <MainView />
      </div>
    );
  }
}

export default App;
