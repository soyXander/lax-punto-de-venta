const POS = () => {
  const productos = [
    {
      nombre: "Producto 1",
      precio: 10,
      cantidad: 3,
    },
    {
      nombre: "Producto 2",
      precio: 20,
      cantidad: 1,
    },
    {
      nombre: "Producto 3",
      precio: 30,
      cantidad: 5,
    },
    {
      nombre: "Producto 4",
      precio: 40,
      cantidad: 2,
    },
    {
      nombre: "Producto 5",
      precio: 50,
      cantidad: 4,
    },
    {
      nombre: "Producto 6",
      precio: 60,
      cantidad: 3,
    },
    {
      nombre: "Producto 7",
      precio: 70,
      cantidad: 2,
    },
    {
      nombre: "Producto 8",
      precio: 80,
      cantidad: 1,
    },
    {
      nombre: "Producto 9",
      precio: 90,
      cantidad: 5,
    },
  ]

  const categorias = [
    {
      nombre: "Panaderia",
    },
    {
      nombre: "Gaseosas",
    },
    {
      nombre: "Fiambres",
    },
    {
      nombre: "Carnes",
    },
    {
      nombre: "Frutas",
    },
  ]

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="h-12 shrink-0">
        <h1 className="text-3xl font-bold">POS</h1>
      </header>
      <main className="flex flex-row justify-center gap-x-3 flex-grow px-8">
        <div className="basis-3/4">
          <div className="flex justify-between">
            <button>+ AGREGAR PRODUCTO NUEVO</button>
            <div className="flex justify-end">
              <input type="text" placeholder="Buscar producto..." />
              <a href="">🔎</a>
            </div>
          </div>
          <div className="flex flex-wrap overflow-y-scroll h-[calc(100vh-11rem)]">
            {productos.map((producto, index) => (
              <button
                className="flex flex-col basis-1/4 bg-blue-950 border rounded-lg p-3 justify-center items-center text-white"
                key={index}>
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2232098881/display_1500/stock-photo-different-fresh-vegetables-for-eating-healthy-fresh-vegetables-in-basket-isolated-on-white-2232098881.jpg"
                  alt=""
                />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio.toFixed(2)}</p>
              </button>
            ))}
          </div>

          <div className="flex h-12 ">
            {categorias.map((categoria, index) => (
              <button
                className="basis-1/5 flex flex-col bg-blue-950 border rounded-lg p-3 m-1 justify-center items-center text-white"
                key={index}>
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>
        <div className="basis-1/4 flex flex-col flex-grow justify-between">
          <div className="flex flex-col">
            <h2>Checkout</h2>
            <table className="table-fixed border">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
                {productos.map((producto, index) => (
                  <tr key={index}>
                    <td>{producto.nombre}</td>
                    <td>
                      <span>-</span> {producto.cantidad} <span>+</span>
                    </td>
                    <td>${producto.precio.toFixed(2)}</td>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
          <ul>
            <li className="flex justify-between">
              <span>Descuento:</span>
              <span>
                $
                <input
                  className="text-right w-20"
                  type="number"
                  placeholder="0.00"></input>
              </span>
            </li>
            <li className="flex justify-between">
              <span>Subtotal:</span>
              <span>$0.00</span>
            </li>
            {/* <li>
            <span>Impuestos:</span>
            <span>$0.00</span>
          </li> */}
            <li className="flex justify-between">
              <span>Total:</span>
              <span>$0.00</span>
            </li>
          </ul>
        </div>
      </main>
      <footer className="h-12 flex flex-shrink-0 gap-x-3 px-8">
        <div className="basis-3/4 flex justify-end gap-x-3">
          <button className="px-8 text-blue-950-950 bg-red-800 border rounded-lg text-white h-full">
            Cancelar venta
          </button>
          <button className="px-8 text-blue-950-950 bg-blue-950 border rounded-lg text-white h-full">
            Mantener venta
          </button>
        </div>
        <div className="basis-1/4">
          <button className="px-8 text-blue-950-950 bg-blue-950 border rounded-lg text-white w-full h-full">
            Finalizar venta
          </button>
        </div>
      </footer>
    </div>
  )
}

export default POS
