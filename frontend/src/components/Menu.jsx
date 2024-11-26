const menuItems = [
  {
  name: "Inicio",
  path: "/",
  },
  {
    name: "POS",
    path: "/pos",
  },
  {
    name: "Productos",
    path: "/productos",
  },
  {
    name: "Ventas",
    path: "/ventas",
  },
  {
    name: "Usuarios",
    path: "/usuarios",
  },
  {
    name: "Clientes",
    path: "/clientes",
  }
]

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col my-4 min-h gap-4 mx-2">
        {menuItems.map((item) => (
          <li key={item.name} className="flex">
            <a href={item.path} className="bg-secondary bg-opacity-60 hover:bg-opacity-100 transition-colors duration-300 w-full text-white py-2 px-4 rounded-3xl ">
            <img src="" alt="" />
            {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu