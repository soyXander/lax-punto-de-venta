const Menu = () => {
  return (
    <nav  className="bg-sky-700  text-white p-20 rounded-lg shadow px-10 ">
<ul className="flex flex-wrap gap-20">
        <li><a href="/"className="border rounded-lg px-20 py-5 bg-orange-500 text-white hover:bg-blue-900 transition duration-300">Inicio</a></li>
        <li><a href="/pos"className="border rounded-lg px-20 py-5 bg-orange-500 text-white hover:bg-blue-900 transition duration-300">POS</a></li>
        <li><a href="/productos"className=" border rounded-lg px-20 py-5 bg-orange-500 text-white  hover:bg-blue-900 transition duration-300">Productos</a></li>
        <li><a href="/ventas"className="border rounded-lg px-20 py-5 bg-orange-500 text-white rounded-lg shadow hover:bg-blue-900 transition duration-300">Ventas</a></li>
        <li><a href="/usuarios"className="border rounded-lg px-20 py-5 bg-orange-500 text-white rounded-lg shadow hover:bg-blue-900 transition duration-300">Usuarios</a></li>
        <li><a href="/clientes"className="border rounded-lg px-20 py-5 bg-orange-500 text-white hover:bg-blue-900 transition duration-300">Clientes</a></li>
      </ul>
    </nav>
  )
}

export default Menu