import Protected from "../components/Protected";
import Auth from "../pages/Auth";
import Error from "../pages/Error";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout";
import { loadFoods, loadLogout, loadUser } from "../utils/loader";

const routes = [
  {
    path: "/",
    loader: loadUser,
    errorElement: <Error />,
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
        loader: loadFoods,
      },
      {
        element: <Protected />,
        children: [
          {
            path: "learn",
            element: <h1>Learn</h1>,
          },
          {
            path: "academy",
            element: <h1>academy</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "logout",
    loader: loadLogout,
  },
];

export default routes;
