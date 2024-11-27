import { logout } from "../services/auth"

const menuItems = [
  {
    name: "Inicio",
    path: "/"
  },
  {
    name: "POS",
    path: "/pos"
  },
  {
    name: "Productos",
    path: "/productos"
  },
  {
    name: "Ventas",
    path: "/ventas"
  },
  {
    name: "Usuarios",
    path: "/usuarios"
  },
  {
    name: "Clientes",
    path: "/clientes"
  }
]

const Menu = () => {
  return (
    <nav className="flex h-[calc(100vh-4rem)] flex-col justify-between">
      <ul className="min-h mx-2 my-4 flex flex-col gap-4">
        {menuItems.map((item) => (
          <li key={item.name} className="flex">
            <a
              href={item.path}
              className="w-full rounded-3xl bg-secondary bg-opacity-60 px-4 py-2 text-white transition-colors duration-300 hover:bg-opacity-100"
            >
              <img src="" alt="" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mx-2 my-4 flex flex-col">
        <a
          className="w-full cursor-pointer rounded-3xl bg-secondary bg-opacity-60 px-4 py-2 text-white transition-colors duration-300 hover:bg-opacity-100"
          onClick={logout}
        >
          Cerrar sesión
        </a>
      </div>
    </nav>
  )
}

export default Menu
