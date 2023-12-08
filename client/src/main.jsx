import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@coreui/coreui/dist/css/coreui.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
