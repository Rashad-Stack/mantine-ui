import RootLayout from "../pages/RootLayout";

 const routes =[
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        index:true,
        element: <h1>Home</h1>
      },
      {
        path: "learn",
        element: <h1>Learn</h1>
      },
      {
        path: "academy",
        element: <h1>Academy</h1>
      }

    ]
  },
]


export default routes;