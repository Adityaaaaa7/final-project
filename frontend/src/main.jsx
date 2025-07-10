import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Commenting out backend import for now until it's resolved
// import { backend } from "../../declarations/backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
