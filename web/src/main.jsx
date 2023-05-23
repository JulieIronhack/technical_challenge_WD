import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThePhoneCaveProvider } from "./context/thePhoneCave.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThePhoneCaveProvider>
        <App />
      </ThePhoneCaveProvider>
    </BrowserRouter>
  </React.StrictMode>
);
