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

  return (
    <div className="min-w-full flex flex-row justify-center items-start">
      <div className="basis-3/4">
        <div className="flex justify-between">
          <button>+ AGREGAR PRODUCTO NUEVO</button>
          <div className="flex justify-end">
            <input type="text" placeholder="Buscar producto..." />
            <a href="">🔎</a>
          </div>
        </div>
        <div className="grid grid-cols-4 ">
          {productos.map((producto, index) => (
            <button
              className="flex flex-col bg-blue-950 border rounded-lg p-3 m-1 justify-center items-center text-white"
              key={index}>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2232098881/display_1500/stock-photo-different-fresh-vegetables-for-eating-healthy-fresh-vegetables-in-basket-isolated-on-white-2232098881.jpg"
                alt=""
              />
              <h2>{producto.nombre}</h2>
              <p>${producto.precio.toFixed(2)}</p>
              <div>
                <a className="bg-white px-2 text-black border rounded-full">-</a>
                {producto.cantidad}
                <a className="bg-white px-2 text-black border rounded-full">+</a>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="basis-1/4 flex flex-col">
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
                <td>{producto.cantidad}</td>
                <td>${producto.precio.toFixed(2)}</td>
              </tr>
            ))}
          </thead>
        </table>
        <div className="flex justify-end items-end">
          <button className="bg-blue-950 text-white p-2 rounded-lg">
            Realizar pago
          </button>
        </div>
      </div>
    </div>
  )
}

export default POS
