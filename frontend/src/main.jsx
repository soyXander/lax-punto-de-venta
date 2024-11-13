import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import App from './App.jsx'
import Layout from "./pages/Layout.jsx"
import Login from "./pages/Login.jsx"
 //import Listado from "./components/Listado.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout  />,
  },
  {
    path: "/productos",
    element: <Layout  />,
  },
  {
    path: "/ventas",
    element: <Layout  />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
