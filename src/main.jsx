import React from "react";
import ReactDOM from "react-dom/client";

// Pages
import App from "./App.jsx";
import "./index.css";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <ToastContainer />
  </React.StrictMode>
);
