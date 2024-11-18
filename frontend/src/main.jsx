import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.jsx'
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import POS from './pages/POS.jsx'
import Listado from "./components/Listado.jsx";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout nombre="Inicio" />,
  },
  {
    path: "/pos",
    element: <POS />,
  },
  {
    path: "/productos",
    element: <Layout nombre={<Listado titulo="Productos" />} />,
  },
  {
    path: "/ventas",
    element: <Layout nombre="Ventas" />,
  },
  {
    path: "/usuarios",
    element: <Layout nombre="Usuarios" />,
  },
  {
    path: "/clientes",
    element: <Layout nombre="Clientes" />,
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
