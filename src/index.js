import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import persistState from "redux-localstorage";
import * as reducers from "./store/reducers";

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
