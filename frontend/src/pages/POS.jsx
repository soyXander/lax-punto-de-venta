import { useEffect, useState } from "react"
import { getAllProducts } from "../services/Product"
import { getAllCategories } from "../services/Category"
import { createSale } from "../services/Sale"
import { getAllClients } from "../services/Client"
import { useAuth } from "../contexts/AuthContext"

const POS = () => {
  const { session } = useAuth()

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [sales, setSales] = useState([])
  const [clients, setClients] = useState([])
  const [selectedClient, setSelectedClient] = useState(null)
  const [search, setSearch] = useState("")
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    if (session && session.token) {
      const fetchData = async () => {
        try {
          const products = await getAllProducts(session.token)
          const categories = await getAllCategories(session.token)
          const clients = await getAllClients(session.token)
          setProducts(products)
          setCategories(categories)
          setClients(clients)
        } catch (error) {
          console.error("Error al obtener los productos:", error)
        }
      }
      fetchData()
    }
  }, [session])

  useEffect(() => {
    setSubtotal(
      sales.reduce((acc, item) => acc + item.product.precio * item.quantity, 0)
    )
    setTotal(subtotal - subtotal * (discount / 100))
  }, [sales, discount])

  const handleAddProduct = () => {}

  const handleProductToCart = (product) => {
    const existingProduct = sales.find(
      (item) => item.product._id === product._id
    )
    if (existingProduct) {
      existingProduct.quantity++
      setSales([...sales])
    } else {
      const newProduct = {
        product,
        quantity: 1
      }
      setSales([...sales, newProduct])
    }
  }

  const handleUpdateQuantity = (product, quantity) => {
    if (quantity < 1) return
    setSales(
      sales.map((item) => {
        if (item.product._id === product._id) {
          return { ...item, quantity }
        }
        return item
      })
    )
  }

  const handleRemoveProduct = (product) => {
    setSales(sales.filter((item) => item.product._id !== product._id))
  }

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearch(query)

    setFilteredProducts(
      products.filter((product) => {
        return product.name.toLowerCase().includes(query)
      })
    )
  }

  const handleSelectClient = (client) => {
    setSelectedClient(client)
  }

  const handleFinishSale = () => {}

  const cancelSale = () => {
    setSales([])
  }

  const finishSale = async () => {
    if (!selectedClient) {
      alert("Seleccione un cliente antes de finalizar la venta.")
      return
    }

    const saleData = {
      client: selectedClient._id,
      items: sales.map((item) => ({
        product: item.product._id,
        quantity: item.quantity
      })),
      total,
      discount
    }

    try {
      const newSale = await createSale(saleData, session.token)
      console.log("Venta creada:", newSale)
      setSales([])
      setSelectedClient(null)
      alert("Venta finalizada con éxito.")
    } catch (error) {
      console.error("Error al finalizar la venta:", error)
      alert("Hubo un error al procesar la venta.")
    }
  }

  return (
    <div className="bg-base flex min-h-dvh flex-col">
      <header className="flex h-12 shrink-0 items-center">
        <div>
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
            <button
              className="rounded-lg bg-secondary bg-opacity-60 p-2 font-semibold text-white duration-300 hover:bg-opacity-100"
              onClick={handleAddProduct}
            >
              + AGREGAR PRODUCTO NUEVO
            </button>
            <div className="flex w-2/4 items-center justify-end">
              <input
                type="text"
                placeholder="Buscar producto..."
                className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 hover:border-primary focus:border-primary focus:outline-none"
                value={search}
                onChange={handleSearch}
              />
              <a href="">🔎</a>
            </div>
          </div>
          <div className="flex h-[calc(100vh-13rem)] flex-wrap justify-evenly gap-y-3 overflow-y-scroll bg-gray-200 py-3">
            {products &&
              products.map((product) => (
                <article
                  className="flex max-w-[320px] flex-col items-center justify-center rounded-lg border-4 border-transparent bg-secondary bg-opacity-50 p-3 text-neutral shadow-md duration-500 hover:border-primary hover:shadow-2xl"
                  key={product._id}
                  onClick={() => handleProductToCart(product)}
                >
                  <img
                    className="mb-3 rounded-lg"
                    src="https://www.shutterstock.com/shutterstock/photos/2232098881/display_1500/stock-photo-different-fresh-vegetables-for-eating-healthy-fresh-vegetables-in-basket-isolated-on-white-2232098881.jpg"
                    alt="Producto"
                  />
                  <div className="flex w-full flex-col items-start justify-start">
                    <h2 className="font-bold">{product.name}</h2>
                    <p>
                      ${product.price}{" "}
                      <span className="text-xs font-bold text-accent">
                        Stock: {product.stock}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
          </div>

          <div className="flex h-12">
            {categories &&
              categories.map((category) => (
                <button
                  className="m-1 flex basis-1/5 flex-col items-center justify-center rounded-lg border bg-primary bg-opacity-70 p-3 font-semibold text-neutral shadow-md shadow-transparent duration-300 hover:bg-opacity-100 hover:shadow-gray-500"
                  key={category._id}
                >
                  {category.name}
                </button>
              ))}
          </div>
        </div>
        <div className="flex flex-grow basis-1/4 flex-col justify-between rounded-lg bg-white shadow">
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
                {sales &&
                  sales.map((item) => (
                    <tr
                      key={item._id}
                      className="border border-gray-200 text-neutral"
                    >
                      <td className="pl-2 text-left">
                        <span
                          className="cursor-pointer"
                          onClick={() => handleRemoveProduct(item.product)}
                        >
                          ❌
                        </span>
                        {item.product.name}
                      </td>
                      <td>
                        <button
                          className="mx-2 h-6 w-6 rounded-full bg-secondary font-bold text-white opacity-70 hover:opacity-100"
                          onClick={() =>
                            handleUpdateQuantity(
                              item.product,
                              item.quantity - 1
                            )
                          }
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="mx-2 h-6 w-6 rounded-full bg-secondary font-bold text-white opacity-70 hover:opacity-100"
                          onClick={() =>
                            handleUpdateQuantity(
                              item.product,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>${item.product.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <ul className="border-gray-200 bg-gray-200 p-4 text-neutral">
            <li className="flex justify-between">
              <label className="mb-2">Cliente:</label>
              <select
                className="rounded-md border p-2"
                value={selectedClient ? selectedClient._id : ""}
                onChange={(e) =>
                  handleSelectClient(
                    clients.find((c) => c._id === e.target.value)
                  )
                }
              >
                <option value="" disabled>
                  Seleccione un cliente
                </option>
                {clients.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.lastname}, {client.name}
                  </option>
                ))}
              </select>
            </li>
            <li className="flex justify-between">
              <span>Descuento:</span>
              <span>
                $
                <input
                  className="w-20 text-right"
                  type="number"
                  placeholder="0.00"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                ></input>
              </span>
            </li>
            <li className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </li>
            <li className="flex justify-between">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </main>
      <footer className="flex h-12 flex-shrink-0 gap-x-3 px-8 py-1">
        <div className="flex basis-3/4 justify-end gap-x-3">
          <button
            className="h-full rounded-lg border bg-secondary bg-opacity-70 px-8 font-semibold text-white shadow-md shadow-transparent transition-all duration-300 hover:bg-opacity-100 hover:shadow-gray-500"
            onClick={cancelSale}
          >
            Cancelar venta
          </button>
          <button className="h-full rounded-lg border bg-primary bg-opacity-70 px-8 font-semibold text-neutral shadow-md shadow-transparent transition-all duration-300 hover:bg-opacity-100 hover:shadow-gray-500">
            Mantener venta
          </button>
        </div>
        <div className="basis-1/4">
          <button
            className="h-full w-full rounded-lg border bg-primary bg-opacity-70 px-8 font-semibold uppercase text-neutral shadow-md shadow-transparent transition-all duration-300 hover:bg-opacity-100 hover:shadow-gray-500"
            onClick={finishSale}
          >
            Finalizar venta
          </button>
        </div>
      </footer>
    </div>
  )
}

export default POS
