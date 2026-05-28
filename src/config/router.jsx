// src/router.jsx
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
      { path: "pasado/:idPasado/:idPresente/:idFuturo", element: <Past /> },
      { path: "presente/:idPasado/:idPresente/:idFuturo", element: <Present /> },
      { path: "futuro/:idPasado/:idPresente/:idFuturo", element: <Future /> },
    ],
  },
]);
