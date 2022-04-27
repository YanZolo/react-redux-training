import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/app-store";
// import Layout from "./components/Layout.js";
import RuleList from "./components/RuleList.jsx";
import RuleForm from "./components/RuleForm.js";
import Layout from "./components/Layout.js";

const domElement = ReactDOM.createRoot(document.getElementById("root"));
domElement.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route exact path="/" element={<RuleList />} />
          <Route path="/new" element={<RuleForm />} />
          <Route path="/edit/:id" element={<RuleForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
