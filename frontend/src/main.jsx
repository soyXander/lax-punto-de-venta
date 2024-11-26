import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import POS from './pages/POS.jsx'
import Listado from "./components/Listado.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout component={<App />} />
  },
  {
    path: "/pos",
    element: <POS />,
  },
  {
    path: "/productos",
    element: <Layout component={<Listado titulo="Productos" />} />,
  },
  {
    path: "/ventas",
    element: <Layout component="Ventas" />,
  },
  {
    path: "/usuarios",
    element: <Layout component="Usuarios" />,
  },
  {
    path: "/clientes",
    element: <Layout component="Clientes" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
