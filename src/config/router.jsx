import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Historial from "../pages/Historial";
import Past from "../pages/Past";
import Present from "../pages/Present";
import Future from "../pages/Future";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "historial", element: <Historial /> },
      { path: "pasado/:id", element: <Past /> },
      { path: "presente/:id", element: <Present /> },
      { path: "futuro/:id", element: <Future /> },
    ],
  },
]);
