const Listado = (props) => {
  const productos = [
    {
      id: 1,
      producto: "Producto 1",
      descripcion: "Descripcion 1",
      codigoBarras: "123456789",
      categoria: "Categoria 1",
      precio: "1500",
      precioLista: "1000",
      descuento: "0",
      stock: "33",
    },
    {
      id: 2,
      producto: "Producto 2",
      descripcion: "Descripcion 2",
      codigoBarras: "123456789",
      categoria: "Categoria 2",
      precio: "1500",
      precioLista: "1000",
      descuento: "0",
      stock: "33",
    },
    {
      id: 3,
      producto: "Producto 3",
      descripcion: "Descripcion 3",
      codigoBarras: "123456789",
      categoria: "Categoria 3",
      precio: "1500",
      precioLista: "1000",
      descuento: "0",
      stock: "33",
    },
    {
      id: 4,
      producto: "Producto 4",
      descripcion: "Descripcion 4",
      codigoBarras: "123456789",
      categoria: "Categoria 4",
      precio: "1500",
      precioLista: "1000",
      descuento: "0",
      stock: "33",
    },
    {
      id: 5,
      producto: "Producto 5",
      descripcion: "Descripcion 5",
      codigoBarras: "123456789",
      categoria: "Categoria 5",
      precio: "1500",
      precioLista: "1000",
      descuento: "0",
      stock: "33",
    },
  ]

  return (
    <>
      <h2>{props.titulo}</h2>
      <div className="flex justify-between items-center">
        <div className="py-2 px-1">
          <button className="border bg-primary bg-opacity-70 hover:bg-opacity-100 transition-colors duration-300 text-white px-3 py-1 rounded-xl">
            Agregar
          </button>
          <button className="border bg-secondary bg-opacity-70 hover:bg-opacity-100 transition-colors duration-300 text-white px-3 py-1 rounded-xl">
            Eliminar
          </button>
        </div>
        <div className="flex">
        <input type="text" placeholder="Buscar producto..."
                className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 hover:border-primary focus:border-primary focus:outline-none"
              />
          <button className="border bg-primary bg-opacity-70 hover:bg-opacity-100 transition-colors duration-300 text-white px-3 py-1 rounded-xl">
            Buscar
          </button>
        </div>
      </div>
      <table className="table-auto border border-black w-full text-center">
        <thead>
          <tr className="border-2 border-gray-200">
            <td>Seleccionar</td>
            <td>Producto</td>
            <td>Descripcion</td>
            <td>Codigo de Barras</td>
            <td>Categoria</td>
            <td>Precio</td>
            <td>Precio Lista</td>
            <td>Descuento</td>
            <td>Stock</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-2 border-gray-100">
              <td>
                <input type="checkbox" />
              </td>
              <td>{producto.producto}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.codigoBarras}</td>
              <td>{producto.categoria}</td>
              <td>{producto.precio}</td>
              <td>{producto.precioLista}</td>
              <td>{producto.descuento}</td>
              <td>{producto.stock}</td>
              <td>
                <button>✏️</button>
                <button>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Listado
