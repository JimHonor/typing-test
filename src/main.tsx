import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/style/reset.css";

const root = document.getElementById("root") as HTMLElement
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
