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
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleClose = () => {
    onClose()
    setFormData({
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      roleId: ""
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 rounded-lg bg-white p-6">
        <h2 className="mb-4 text-2xl">
          {user ? "Editar Usuario" : "Agregar Usuario"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block">
              Apellido
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="username" className="block">
              Nombre de Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required={!user}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="roleId" className="block">
              Rol
            </label>
            <input
              id="roleId"
              name="roleId"
              type="text"
              value={formData.roleId}
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              {user ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserFormModal
