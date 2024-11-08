import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from "./constant/theme";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <GlobalStateProvider>
      <MantineProvider defaultColorScheme="light" theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </GlobalStateProvider>
  );
}

export default App;
