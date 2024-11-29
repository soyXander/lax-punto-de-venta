import { useState, useEffect } from "react"

const ProductFormModal = ({
  isOpen,
  onClose,
  onSave,
  product = null,
  categories = []
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    barcode: "",
    price: "",
    stock: "",
    categoryId: ""
  })

  // Cargar los datos del producto cuando el modal se abre para editar
  useEffect(() => {
    if (product && isOpen) {
      setFormData({
        name: product.name || "",
        description: product.description || "",
        barcode: product.barcode || "",
        categoryId: product.categoryId || "",
        price: product.price || "",
        stock: product.stock || "",
      });
    } else if (isOpen) {
      setFormData({
        name: "",
        description: "",
        barcode: "",
        categoryId: "",
        price: "",
        stock: "",
      });
    }
  }, [product, isOpen]);

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
      barcode: "",
      categoryId: "",
      price: "",
      stock: "",
    })
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  if (!isOpen) return null

  return (
    <dialog open className="modal bg-black bg-opacity-50">
      <div className="modal-box">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          onClick={handleClose}
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">
          {product ? "Editar Producto" : "Agregar Producto"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nombre del producto..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="placeholder:text-neutral w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 focus:border-primary"
            required
          />
          <textarea
            placeholder="Descripción del producto..."
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="placeholder:text-neutral w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 focus:border-primary"
          />
          <input
            type="text"
            placeholder="Código de Barras..."
            value={formData.barcode}
            onChange={(e) =>
              setFormData({ ...formData, barcode: e.target.value })
            }
            className="placeholder:text-neutral w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 focus:border-primary"
            required
          />
          <input
            type="number"
            placeholder="Precio..."
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="placeholder:text-neutral w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 focus:border-primary"
            required
          />
          <input
            type="number"
            placeholder="Stock..."
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            className="placeholder:text-neutral w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 focus:border-primary"
            required
          />
          <select
            value={formData.categoryId}
            onChange={(e) =>
              setFormData({ ...formData, categoryId: e.target.value })
            }
            className="placeholder:text-neutral w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 focus:border-primary"
            required
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="modal-action">
            <button className="btn" onClick={handleClose}>
              Cancelar
            </button>
            <button className="btn btn-primary" type="submit">
              {product ? "Actualizar Producto" : "Agregar Producto"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default ProductFormModal
