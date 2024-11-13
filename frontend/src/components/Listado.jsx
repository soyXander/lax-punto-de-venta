const Listado = () => {
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
      <h2></h2>
      <div className="flex justify-between">
        <div>
          <button className="border bg-green-500 text-white px-3 py-1 rounded-xl">
            Agregar
          </button>
          <button className="border bg-red-500 text-white px-3 py-1 rounded-xl">
            Eliminar
          </button>
        </div>
        <div>
          <input type="text" />
          <button className="border bg-blue-500 text-white px-3 py-1 rounded-xl">
            Buscar
          </button>
        </div>
      </div>
      <table className="table-auto border border-black w-full text-center">
        <thead>
          <tr>
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
            <tr key={producto.id}>
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
