import Protected from "../components/Protected";
import Auth from "../pages/Auth";
import Error from "../pages/Error";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout";
import { loadUser } from "./utils/loader";

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
      },
      {
        path: "learn",
        element: <Protected />,
        loader: loadUser,
        children: [
          {
            index: true,
            element: <h1>Learn</h1>,
          },
        ],
      },
      {
        path: "academy",
        element: <Protected />,
        loader: loadUser,
        children: [
          {
            index: true,
            element: <h1>academy</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
];

export default routes;
