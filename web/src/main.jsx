import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThePhoneCaveProvider } from "./context/thePhoneCave.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThePhoneCaveProvider>
      <App />
    </ThePhoneCaveProvider>
  </React.StrictMode>
);
