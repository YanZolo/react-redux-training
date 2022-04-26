import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import RuleList from "./components/RuleList.jsx";
import { Provider } from "react-redux";
import store from './store/app-store'

const domElement = ReactDOM.createRoot(document.getElementById("root"));
domElement.render(
  <Provider store={store}>
    <RuleList />
  </Provider>
);
