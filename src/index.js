import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import App from "./App";
import persistState from "redux-localstorage";
import * as reducers from "./store/reducers";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBF4_YYwFzkPcFz-eLOLHzcaAKVNTC9usE",
  authDomain: "titanium-gantry-205112.firebaseapp.com",
  databaseURL: "https://titanium-gantry-205112.firebaseio.com",
  projectId: "titanium-gantry-205112",
  storageBucket: "titanium-gantry-205112.appspot.com",
  messagingSenderId: "490373517578"
};
firebase.initializeApp(config);

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
