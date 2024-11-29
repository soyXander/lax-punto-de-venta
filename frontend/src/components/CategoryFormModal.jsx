import { useState, useEffect } from "react"

const CategoryFormModal = ({
  isOpen,
  onClose,
  onSave,
  category = null,
  categories = []
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parent: ""
  })

  // Cargar los datos de la categoría cuando el modal se abre para editar
  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || "",
        description: category.description || "",
        parent: category.parent || ""
      })
    } else {
      setFormData({
        name: "",
        description: "",
        parent: ""
      })
    }
  }, [category])

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataToSave = {
      ...formData,
      parent: formData.parent === "" ? null : formData.parent
    }

    onSave(dataToSave)
  }

  if (!isOpen) return null

  return (
    <dialog open className="modal bg-black bg-opacity-50">
      <div className="modal-box">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">
          {category ? "Editar Categoría" : "Agregar Categoría"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nombre de la categoría..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required
          />
          <textarea
            placeholder="Descripción de la categoría..."
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
          />
          <select
            value={formData.parent}
            onChange={(e) =>
              setFormData({ ...formData, parent: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
          >
            <option value="">Seleccione una categoría padre (opcional)</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn btn-primary" type="submit">
              {category ? "Actualizar Categoría" : "Agregar Categoría"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default CategoryFormModal
