import Auth from "../pages/Auth";
import Error from "../pages/Error";
import RootLayout from "../pages/RootLayout";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "learn",
        element: <h1>Learn</h1>,
      },
      {
        path: "academy",
        element: <h1>Academy</h1>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
];

export default routes;
