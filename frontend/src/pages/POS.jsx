import "./POS.css"

const POS = () => {
  const productos = [
    {
      nombre: "Producto 1",
      precio: 10,
      cantidad: 3
    },
    {
      nombre: "Producto 2",
      precio: 20,
      cantidad: 1
    },
    {
      nombre: "Producto 3",
      precio: 30,
      cantidad: 5
    },
    {
      nombre: "Producto 4",
      precio: 40,
      cantidad: 2
    },
    {
      nombre: "Producto 5",
      precio: 50,
      cantidad: 4
    },
    {
      nombre: "Producto 6",
      precio: 60,
      cantidad: 3
    },
    {
      nombre: "Producto 7",
      precio: 70,
      cantidad: 2
    },
    {
      nombre: "Producto 8",
      precio: 80,
      cantidad: 1
    },
    {
      nombre: "Producto 9",
      precio: 90,
      cantidad: 5
    }
  ]

  const categorias = [
    {
      nombre: "Panaderia"
    },
    {
      nombre: "Gaseosas"
    },
    {
      nombre: "Fiambres"
    },
    {
      nombre: "Carnes"
    },
    {
      nombre: "Frutas"
    }
  ]

  return (
    <div className="flex min-h-dvh flex-col bg-base">
      <header className="flex h-12 shrink-0 items-center">
        <div className="">
          <button className="m-1 rounded-md bg-primary bg-opacity-70 p-2 text-3xl font-bold text-white duration-300 hover:bg-opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex flex-grow flex-row justify-center gap-x-3 px-8">
        <div className="basis-3/4 rounded-lg bg-white shadow">
          <div className="flex justify-between p-2">
            <button className="rounded-lg bg-secondary bg-opacity-60 p-2 font-semibold text-white duration-300 hover:bg-opacity-100">
              + AGREGAR PRODUCTO NUEVO
            </button>
            <div className="flex w-2/4 items-center justify-end">
              <input
                type="text"
                placeholder="Buscar producto..."
                className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 hover:border-primary focus:border-primary focus:outline-none"
              />
              <a href="">🔎</a>
            </div>
          </div>
          <div className="flex h-[calc(100vh-13rem)] flex-wrap justify-evenly gap-y-3 overflow-y-scroll bg-gray-200 py-3">
            {productos.map((producto, index) => (
              <article
                className="flex max-w-[320px] flex-col items-center justify-center rounded-lg border-4 border-transparent bg-secondary bg-opacity-50 p-3 text-neutral shadow-md duration-500 hover:border-primary hover:shadow-2xl"
                key={index}
              >
                <img
                  className="mb-3 rounded-lg"
                  src="https://www.shutterstock.com/shutterstock/photos/2232098881/display_1500/stock-photo-different-fresh-vegetables-for-eating-healthy-fresh-vegetables-in-basket-isolated-on-white-2232098881.jpg"
                  alt=""
                />
                <div className="flex w-full flex-col items-start justify-start">
                  <h2 className="font-bold">{producto.nombre}</h2>
                  <p>
                    ${producto.precio.toFixed(2)}{" "}
                    <span className="text-xs font-bold text-accent">
                      Stock: {producto.cantidad}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex h-12">
            {categorias.map((categoria, index) => (
              <button
                className="m-1 flex basis-1/5 flex-col items-center justify-center rounded-lg border bg-primary bg-opacity-70 p-3 font-semibold text-neutral shadow-md shadow-transparent duration-300 hover:bg-opacity-100 hover:shadow-gray-500"
                key={index}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-grow basis-1/4 flex-col justify-between bg-white shadow">
          <div className="flex flex-col">
            <h2 className="my-4 font-bold text-neutral">Checkout</h2>
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
                    className="border border-gray-200 text-neutral"
                  >
                    <td>{producto.nombre}</td>
                    <td>
                      <button className="mx-2 h-6 w-6 rounded-full bg-primary font-bold text-neutral opacity-70 hover:opacity-100">
                        -
                      </button>
                      {producto.cantidad}
                      <button className="mx-2 h-6 w-6 rounded-full bg-primary font-bold text-neutral opacity-70 hover:opacity-100">
                        +
                      </button>
                    </td>
                    <td>${producto.precio.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="border-gray-200 bg-gray-200 p-4 text-neutral">
            <li className="flex justify-between">
              <span>Descuento:</span>
              <span>
                $
                <input
                  className="w-20 text-right"
                  type="number"
                  placeholder="0.00"
                ></input>
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
      <footer className="flex h-12 flex-shrink-0 gap-x-3 px-8 py-1">
        <div className="flex basis-3/4 justify-end gap-x-3">
          <button className="h-full rounded-lg border bg-secondary bg-opacity-70 px-8 font-semibold text-white shadow-md shadow-transparent transition-all duration-300 hover:bg-opacity-100 hover:shadow-gray-500">
            Cancelar venta
          </button>
          <button className="h-full rounded-lg border bg-primary bg-opacity-70 px-8 font-semibold text-neutral shadow-md shadow-transparent transition-all duration-300 hover:bg-opacity-100 hover:shadow-gray-500">
            Mantener venta
          </button>
        </div>
        <div className="basis-1/4">
          <button className="h-full w-full rounded-lg border bg-primary bg-opacity-70 px-8 font-semibold uppercase text-neutral shadow-md shadow-transparent transition-all duration-300 hover:bg-opacity-100 hover:shadow-gray-500">
            Finalizar venta
          </button>
        </div>
      </footer>
    </div>
  )
}

export default POS
