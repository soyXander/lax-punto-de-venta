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
          {products &&
            products.map((product) => (
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
                  {product.category ? product.category.name : "Sin categoría"}
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
        onClose={() => setIsPopupOpen(false)}
        onSave={handleSaveProduct}
        product={editProduct}
        categories={categories}
      />
    </>
  )
}

export default Products
