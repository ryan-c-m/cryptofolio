import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import App from "./App";
import persistState from "redux-localstorage";
import * as reducers from "./store/reducers";

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk), persistState())
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
