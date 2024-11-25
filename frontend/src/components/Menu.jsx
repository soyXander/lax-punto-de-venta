const menuItems = [{
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
},]

const Menu = () => {
  return (
    <nav  className=" bg-neutral p-20 border rounded-lg shadow px-10 ">
      <ul className="flex flex-col">
        {menuItems.map((item) => (
          <li key={item.name}><br />
            <a href={item.path} className="   text-neutral bg-primary bg-opacity-60 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-gray-200 focus:border-primary block  p-3 py-4">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu