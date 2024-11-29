import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext.jsx"
import {
  getAllClients,
  deleteClient,
  updateClient,
  createClient
} from "../services/Client.jsx"
import ClientFormModal from "../components/ClientFormModal.jsx"

const Clients = () => {
  const [clients, setClients] = useState([])
  const [selectedClients, setSelectedClients] = useState([])
  const { session } = useAuth()

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [editClient, setEditClient] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (session && session.token) {
      const fetchData = async () => {
        try {
          const clientsData = await getAllClients(session.token)
          setClients(clientsData)
        } catch (error) {
          console.error("Error al obtener los clientes:", error)
        }
      }
      fetchData()
    }
  }, [session])

  const handleAddClient = () => {
    setEditClient(null)
    setIsPopupOpen(true)
  }

  const handleEditClient = (client) => {
    setEditClient(client)
    setIsPopupOpen(true)
  }

  const handleSaveClient = async (formData) => {
    try {
      if (editClient) {
        await updateClient(editClient._id, formData, session.token)
      } else {
        await createClient(formData, session.token)
      }
      setIsPopupOpen(false)
      setEditClient(null)
      const clientsData = await getAllClients(session.token)
      setClients(clientsData)
    } catch (error) {
      console.error("Error al guardar el cliente:", error)
    }
  }

  const handleDeleteClient = async (id) => {
    if (!confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
      return
    }

    await deleteClient(id, session.token)
    const clientsData = await getAllClients(session.token)
    setClients(clientsData)
  }

  const handleCheckboxChange = (clientId) => {
    setSelectedClients((prev) => {
      if (prev.includes(clientId)) {
        return prev.filter((id) => id !== clientId)
      } else {
        return [...prev, clientId]
      }
    })
  }

  const handleDeleteSelectedClients = async () => {
    try {
      if (!confirm("¿Estás seguro de que deseas eliminar estos clientes?")) {
        return
      }

      for (const clientId of selectedClients) {
        await deleteClient(clientId, session.token)
      }
      const clientsData = await getAllClients(session.token)
      setClients(clientsData)
      setSelectedClients([])
    } catch (error) {
      console.error("Error al eliminar clientes:", error)
    }
  }

  const filteredClients = searchTerm
    ? clients.filter((client) => {
        return (
          client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          client.lastname.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
    : clients

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="px-1 py-2">
          <button onClick={handleAddClient} className="btn">
            Agregar
          </button>
          <button onClick={handleDeleteSelectedClients} className="">
            Eliminar
          </button>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="🔎 Buscar cliente..."
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
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Correo</td>
            <td>Teléfono</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client._id} className="border-2 border-gray-100">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(client._id)}
                />
              </td>
              <td>{client.name}</td>
              <td>{client.lastname}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <button onClick={() => handleEditClient(client)}>✏️</button>
                <button onClick={() => handleDeleteClient(client._id)}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ClientFormModal
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false)
          setEditClient(null)
        }}
        onSave={handleSaveClient}
        client={editClient}
      />
    </>
  )
}

export default Clients
