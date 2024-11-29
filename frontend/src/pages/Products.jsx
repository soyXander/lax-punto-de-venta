import { useEffect, useState } from "react"
import Popup from "reactjs-popup"
import { useAuth } from "../contexts/AuthContext.jsx"
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct
} from "../services/Product.jsx"

const Products = () => {
  const [products, setProducts] = useState([])
  const { session } = useAuth()

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="px-1 py-2">
          <button className="rounded-xl border bg-primary bg-opacity-70 px-3 py-1 text-white transition-colors duration-300 hover:bg-opacity-100">
            Agregar
          </button>
          <button>Eliminar</button>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 hover:border-primary focus:border-primary focus:outline-none"
          />
          <button className="rounded-xl border bg-primary bg-opacity-70 px-3 py-1 text-white transition-colors duration-300 hover:bg-opacity-100">
            Buscar
          </button>
        </div>
      </div>
      <table className="w-full table-auto border border-black text-center">
        <thead>
          <tr className="border-2 border-gray-200">
            <td>Seleccionar</td>
            <td>Producto</td>
            <td>Descripción</td>
            <td>Código de Barras</td>
            <td>Categoría</td>
            <td>Precio</td>
            <td>Stock</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-2 border-gray-100">
              <td>
                <input type="checkbox" />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.barcode}</td>
              <td>
                {product.category ? product.category.name : "Sin categoría"}
              </td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
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

export default Products
