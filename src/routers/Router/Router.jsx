import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import SingIn from "../../pages/SingIn/SingIn";
import SingUp from "../../pages/SingUp/SingUp";
import Main from "../../layout/Main";
import Profile from "../../pages/Profile/Profile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/singin",
    element: <SingIn />,
  },
  {
    path: "/singup",
    element: <SingUp />,
  },
]);

export default router;
