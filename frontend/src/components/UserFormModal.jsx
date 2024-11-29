import { useState, useEffect } from "react"

const UserFormModal = ({ isOpen, onClose, onSave, user }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    roleId: ""
  })

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        lastName: user.lastName || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        roleId: user.roleId || ""
      })
    } else {
      setFormData({
        name: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        roleId: ""
      })
    }
  }, [user])

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
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">
          {user ? "Editar Usuario" : "Agregar Usuario"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nombre..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required
          />
          <input
            type="text"
            placeholder="Apellido..."
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required
          />
          <input
            type="text"
            placeholder="Nombre de Usuario..."
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico..."
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required
          />
          <input
            type="password"
            placeholder="Contraseña..."
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required={!user}
          />
          <input
            type="text"
            placeholder="Rol..."
            value={formData.roleId}
            onChange={(e) =>
              setFormData({ ...formData, roleId: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required
          />
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn btn-primary" type="submit">
              {user ? "Actualizar Usuario" : "Agregar Usuario"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default UserFormModal
