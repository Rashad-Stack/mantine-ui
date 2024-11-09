import Protected from "../components/Protected";
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
        element: <Protected />,
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
