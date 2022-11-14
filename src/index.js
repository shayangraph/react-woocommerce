import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./store/auth";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CookiesProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CookiesProvider>
    </Router>
  </React.StrictMode>
);