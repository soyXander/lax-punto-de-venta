import { useState, useEffect } from "react"

const ClientFormModal = ({ isOpen, onClose, onSave, client }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: ""
  })

  useEffect(() => {
    if (client && isOpen) {
      setFormData({
        name: client.name || "",
        lastname: client.lastname || "",
        email: client.email || "",
        phone: client.phone || ""
      })
    } else if (isOpen) {
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: ""
      })
    }
  }, [client, isOpen])

  const handleClose = () => {
    onClose()
    setFormData({
      name: "",
      lastname: "",
      email: "",
      phone: ""
    })
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
          {client ? "Editar Cliente" : "Agregar Cliente"}
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
            value={formData.lastname}
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
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
            type="text"
            placeholder="Teléfono..."
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 placeholder:text-neutral focus:border-primary"
            required
          />
          <div className="modal-action">
            <button className="btn" onClick={handleClose}>
              Cancelar
            </button>
            <button className="btn btn-primary" type="submit">
              {client ? "Actualizar Cliente" : "Agregar Cliente"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default ClientFormModal
