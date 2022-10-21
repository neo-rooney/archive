import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * Step6 스토어 만들기
 */
const store = createStore(rootReducer, composeWithDevTools());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
