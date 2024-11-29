import { useEffect, useState } from "react"
import ProductFormModal from "../components/ProductFormModal.jsx"
import { useAuth } from "../contexts/AuthContext.jsx"
import { getAllCategories } from "../services/Category.jsx"
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct
} from "../services/Product.jsx"

const Products = () => {
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [categories, setCategories] = useState([])
  const { session } = useAuth()

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [editProduct, setEditProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (session && session.token) {
      const fetchData = async () => {
        try {
          const products = await getAllProducts(session.token)
          setProducts(products)

          const categories = await getAllCategories(session.token)
          setCategories(categories)
        } catch (error) {
          console.error("Error al obtener los productos:", error)
        }
      }
      fetchData()
    }
  }, [session])

  // Func para abrir el formulario (nuevo producto o editar)
  const handleAddProduct = () => {
    setEditProduct(null) // Si estamos agregando un nuevo producto
    setIsPopupOpen(true)
  }

  const handleEditProduct = (product) => {
    setEditProduct(product) // Si estamos editando un producto
    setIsPopupOpen(true)
  }

  // Func para guardar el producto
  const handleSaveProduct = async (formData) => {
    try {
      if (editProduct) {
        // Actualizar producto
        await updateProduct(editProduct._id, formData)
      } else {
        // Crear nuevo producto
        await createProduct(formData)
      }
      setIsPopupOpen(false)
      setEditProduct(null)
      // Volver a cargar los productos después de agregar o editar
      const products = await getAllProducts(session.token)
      setProducts(products)
    } catch (error) {
      console.error("Error al guardar el producto:", error)
    }
  }

  const handleDeleteProduct = async (id) => {
    if (!confirm("Estas seguro de que deseas eliminar este producto?")) {
      return
    }

    await deleteProduct(id)
    const products = await getAllProducts(session.token)
    setProducts(products)
  }

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        // Si el producto ya esta seleccionado, lo desmarcamos
        return prev.filter((id) => id !== productId)
      } else {
        // Si el producto no esta seleccionado, lo agregamos
        return [...prev, productId]
      }
    })
  }

  const handleDeleteSelectedProducts = async () => {
    try {
      if (!confirm("Estas seguro de que deseas eliminar estos productos?")) {
        return
      }

      for (const productId of selectedProducts) {
        await deleteProduct(productId)
      }
      // Despues de eliminar, actualizamos la lista de productos
      const products = await getAllProducts(session.token)
      setProducts(products)
      setSelectedProducts([]) // Limpiamos las selecciones después de eliminar
    } catch (error) {
      console.error("Error al eliminar productos:", error)
    }
  }

  const filteredProducts = searchTerm
    ? products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
    : products

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="px-1 py-2">
          <button onClick={handleAddProduct} className="btn">
            Agregar
          </button>
          <button onClick={handleDeleteSelectedProducts}>Eliminar</button>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="🔎 Buscar producto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 hover:border-primary focus:border-primary focus:outline-none"
          />
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
          {filteredProducts.map((product) => (
            <tr key={product._id} className="border-2 border-gray-100">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(product._id)}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.barcode}</td>
              <td>
                {product.categoryId ? product.categoryId.name : "Sin categoría"}
              </td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>✏️</button>
                <button onClick={() => handleDeleteProduct(product._id)}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductFormModal
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false)
          setEditProduct(null)
        }}
        onSave={handleSaveProduct}
        product={editProduct}
        categories={categories}
      />
    </>
  )
}

export default Products
