import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";


const AppRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />,
      children: []
    }
  ]
}
])

export default AppRouter;