import { useEffect, useState } from "react"
import CategoryFormModal from "../components/CategoryFormModal.jsx"
import { useAuth } from "../contexts/AuthContext.jsx"
import {
  createCategory,
  deleteCategory, getAllCategories, updateCategory
} from "../services/Category.jsx"

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const { session } = useAuth()

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [editCategory, setEditCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (session && session.token) {
      const fetchData = async () => {
        try {
          const categories = await getAllCategories(session.token)
          setCategories(categories)
        } catch (error) {
          console.error("Error al obtener las categorías:", error)
        }
      }
      fetchData()
    }
  }, [session])

  const handleAddCategory = () => {
    setEditCategory(null)
    setIsPopupOpen(true)
  }

  const handleEditCategory = (category) => {
    setEditCategory(category)
    setIsPopupOpen(true)
  }

  const handleSaveCategory = async (formData) => {
    try {
      if (editCategory) {
        await updateCategory(editCategory._id, formData, session.token)
      } else {
        await createCategory(formData, session.token)
      }
      setIsPopupOpen(false)
      setEditCategory(null)
      const categories = await getAllCategories(session.token)
      setCategories(categories)
    } catch (error) {
      console.error("Error al guardar la categoría:", error)
    }
  }

  const handleDeleteCategory = async (id) => {
    if (!confirm("¿Estás seguro de que deseas eliminar esta categoría?")) {
      return
    }

    await deleteCategory(id, session.token)
    const categories = await getAllCategories(session.token)
    setCategories(categories)
  }

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      } else {
        return [...prev, categoryId]
      }
    })
  }

  const handleDeleteSelectedCategories = async () => {
    try {
      if (!confirm("¿Estás seguro de que deseas eliminar estas categorías?")) {
        return
      }

      for (const categoryId of selectedCategories) {
        await deleteCategory(categoryId, session.token)
      }
      const categories = await getAllCategories(session.token)
      setCategories(categories)
      setSelectedCategories([])
    } catch (error) {
      console.error("Error al eliminar categorías:", error)
    }
  }

  const filteredCategories = searchTerm
    ? categories.filter((category) => {
        return category.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
    : categories

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="px-1 py-2">
          <button onClick={handleAddCategory} className="btn">
            Agregar
          </button>
          <button onClick={handleDeleteSelectedCategories}>Eliminar</button>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="🔎 Buscar categoría..."
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
            <td>Categoría</td>
            <td>Descripción</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((category) => (
            <tr key={category._id} className="border-2 border-gray-100">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(category._id)}
                />
              </td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button onClick={() => handleEditCategory(category)}>✏️</button>
                <button onClick={() => handleDeleteCategory(category._id)}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CategoryFormModal
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false)
          setEditCategory(null)
        }}
        onSave={handleSaveCategory}
        category={editCategory}
      />
    </>
  )
}

export default Categories
