import { useEffect, useState } from "react"
import UserFormModal from "../components/UserFormModal.jsx"
import { useAuth } from "../contexts/AuthContext.jsx"
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
} from "../services/User.jsx"

const Users = () => {
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  const { session } = useAuth()

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [editUser, setEditUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (session && session.token) {
      const fetchData = async () => {
        try {
          const users = await getAllUsers(session.token)
          setUsers(users)
        } catch (error) {
          console.error("Error al obtener los usuarios:", error)
        }
      }
      fetchData()
    }
  }, [session])

  const handleAddUser = () => {
    setEditUser(null)
    setIsPopupOpen(true)
  }

  const handleEditUser = (user) => {
    setEditUser(user)
    setIsPopupOpen(true)
  }

  const handleSaveUser = async (formData) => {
    try {
      if (editUser) {
        await updateUser(editUser._id, formData, session.token)
      } else {
        await createUser(formData, session.token)
      }
      setIsPopupOpen(false)
      setEditUser(null)
      const users = await getAllUsers(session.token)
      setUsers(users)
    } catch (error) {
      console.error("Error al guardar el usuario:", error)
    }
  }

  const handleDeleteUser = async (id) => {
    if (!confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      return
    }

    await deleteUser(id, session.token)
    const users = await getAllUsers(session.token)
    setUsers(users)
  }

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((id) => id !== userId)
      } else {
        return [...prev, userId]
      }
    })
  }

  const handleDeleteSelectedUsers = async () => {
    try {
      if (!confirm("¿Estás seguro de que deseas eliminar estos usuarios?")) {
        return
      }

      for (const userId of selectedUsers) {
        await deleteUser(userId, session.token)
      }
      const users = await getAllUsers(session.token)
      setUsers(users)
      setSelectedUsers([])
    } catch (error) {
      console.error("Error al eliminar usuarios:", error)
    }
  }

  const filteredUsers = searchTerm
    ? users.filter((user) => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase())
      })
    : users

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="px-1 py-2">
          <button onClick={handleAddUser} className="btn">
            Agregar
          </button>
          <button onClick={handleDeleteSelectedUsers}>Eliminar</button>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="🔎 Buscar usuario..."
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
            <td>Usuario</td>
            <td>Email</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers && filteredUsers.map((user) => (
            <tr key={user._id} className="border-2 border-gray-100">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(user._id)}
                />
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>✏️</button>
                <button onClick={() => handleDeleteUser(user._id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <UserFormModal
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false)
          setEditUser(null)
        }}
        onSave={handleSaveUser}
        user={editUser}
      />
    </>
  )
}

export default Users
