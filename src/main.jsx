import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeModeProvider from "./contexts/themeModeContext/ThemeModeProvider";
import AuthContextProvider from "./contexts/authContext/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
