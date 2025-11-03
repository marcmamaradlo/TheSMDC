import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MyProvider } from "./context/index.jsx";
import "./index.css";
// [entry.client.js]

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyProvider>
    <App />
  </MyProvider>
);
