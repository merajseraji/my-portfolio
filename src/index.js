import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/icons/css/all.css";
import '../src/assets/vendor/bootstrap/css/bootstrap.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
