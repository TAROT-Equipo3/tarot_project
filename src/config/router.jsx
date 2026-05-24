import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Historial from "../pages/Historial";
import Past from "../pages/Past";
import Present from "../pages/Present";
import Future from "../pages/Future";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <div className="text-white text-center p-8">Tablero aquí</div> },
      { path: "historial", element: <Historial /> },
      { path: "pasado/:id", element: <Past /> },
      { path: "presente/:id", element: <Present /> },
      { path: "futuro/:id", element: <Future /> },
    ],
  },
]);