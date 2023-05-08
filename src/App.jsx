import { RouterProvider } from "react-router-dom"
import router from "./routers/Router/Router"
import "./app.scss"
import { useContext } from "react";
import { ThemeModeContext } from "./contexts/themeModeContext/ThemeModeProvider";

function App() {

  const {themeModeToggle, darkModeTheme} = useContext(ThemeModeContext);

  return (
    <div className={`theme-${darkModeTheme ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
