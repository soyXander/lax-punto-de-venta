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
    <div className="flex flex-col min-h-dvh bg-base">
      <header className="h-12 flex items-center shrink-0">
        <div className="">
          <button className="text-3xl font-bold text-white bg-primary bg-opacity-70 hover:bg-opacity-100 duration-300 p-2 rounded-md m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex flex-row justify-center gap-x-3 flex-grow px-8">
        <div className="basis-3/4 shadow">
          <div className="flex justify-between py-2">
            <button className="bg-secondary bg-opacity-60 hover:bg-opacity-100 duration-300 text-white font-semibold rounded-lg p-2">
              + AGREGAR PRODUCTO NUEVO
            </button>
            <div className="flex justify-end items-center">
              <input
                type="text"
                placeholder="Buscar producto..."
                className="bg-secondary bg-opacity-20 border-2 border-transparent hover:border-primary focus:border-primary focus:outline-none duration-300 text-neutral rounded-full p-2"
              />
              <a href="">🔎</a>
            </div>
          </div>
          <div className="flex flex-wrap overflow-y-scroll h-[calc(100vh-13rem)] bg-white justify-evenly gap-y-3 py-3">
            {productos.map((producto, index) => (
              <article
                className="flex flex-col max-w-[320px] shadow-md hover:shadow-2xl duration-500 border-4 border-transparent hover:border-primary rounded-lg p-3 justify-center items-center bg-secondary bg-opacity-50 text-neutral"
                key={index}>
                <img
                  className="mb-3 rounded-lg"
                  src="https://www.shutterstock.com/shutterstock/photos/2232098881/display_1500/stock-photo-different-fresh-vegetables-for-eating-healthy-fresh-vegetables-in-basket-isolated-on-white-2232098881.jpg"
                  alt=""
                />
                <h2 className="font-bold">{producto.nombre}</h2>
                <p>${producto.precio.toFixed(2)}</p>
              </article>
            ))}
          </div>

          <div className="flex h-12 ">
            {categorias.map((categoria, index) => (
              <button
                className="basis-1/5 flex flex-col bg-primary bg-opacity-70 hover:bg-opacity-100 border rounded-lg p-3 m-1 justify-center items-center text-neutral 
                font-semibold shadow-md shadow-transparent hover:shadow-gray-500 duration-300"
                key={index}>
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>
        <div className="basis-1/4 flex flex-col flex-grow justify-between shadow bg-white">
          <div className="flex flex-col">
            <h2 className="font-bold my-4 text-neutral">Checkout</h2>
            <table className="table-fixed border">
              <thead className="bg-gray-100">
                <tr className="border border-gray-200 text-neutral">
                  <th className="w-2/4">Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody className="max-h-[calc(100vh-13rem)] overflow-y-scroll">
                {productos.map((producto, index) => (
                  <tr
                    key={index}
                    className="border border-gray-200 text-neutral">
                    <td>{producto.nombre}</td>
                    <td>
                      <button className="h-6 w-6 bg-primary opacity-70 hover:opacity-100 rounded-full mx-2 text-neutral font-bold">
                        -
                      </button>
                      {producto.cantidad}
                      <button className="h-6 w-6 bg-primary opacity-70 hover:opacity-100 rounded-full mx-2 text-neutral font-bold">
                        +
                      </button>
                    </td>
                    <td>${producto.precio.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="text-neutral p-4 bg-gray-200 border-gray-200">
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
          <button className="px-8 bg-secondary bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 border rounded-lg text-white font-semibold h-full shadow-md shadow-transparent hover:shadow-gray-500">
            Cancelar venta
          </button>
          <button className="px-8 bg-primary bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 border rounded-lg text-neutral font-semibold h-full shadow-md shadow-transparent hover:shadow-gray-500">
            Mantener venta
          </button>
        </div>
        <div className="basis-1/4">
          <button className="px-8 bg-primary bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 border rounded-lg text-neutral font-semibold w-full h-full shadow-md shadow-transparent hover:shadow-gray-500 uppercase">
            Finalizar venta
          </button>
        </div>
      </footer>
    </div>
  )
}

export default POS
