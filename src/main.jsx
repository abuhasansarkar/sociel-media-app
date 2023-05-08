import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeModeProvider from "./contexts/themeModeContext/ThemeModeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>
);
