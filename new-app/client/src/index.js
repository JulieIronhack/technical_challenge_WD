import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
