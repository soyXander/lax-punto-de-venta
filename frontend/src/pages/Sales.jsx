import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext.jsx"
import {
  createSale,
  deleteSale,
  getAllSales,
  updateSale
} from "../services/Sale.jsx"

const Sales = () => {
  const [sales, setSales] = useState([])
  const [selectedSales, setSelectedSales] = useState([])
  const { session } = useAuth()

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [editSale, setEditSale] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (session && session.token) {
      const fetchData = async () => {
        try {
          const sales = await getAllSales(session.token)
          setSales(sales)
        } catch (error) {
          console.error("Error al obtener las ventas:", error)
        }
      }
      fetchData()
    }
  }, [session])

  const filteredSales = searchTerm
    ? sales.filter((sale) => {
        return sale.clientId.toLowerCase().includes(searchTerm.toLowerCase())
      })
    : sales

  return (
    <>
      <div className="flex items-center justify-between">
        <div className=""></div>
        <div className="flex px-1 py-2">
          <input
            type="text"
            placeholder="🔎 Buscar venta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border-2 border-transparent bg-secondary bg-opacity-20 p-2 text-center text-neutral duration-300 hover:border-primary focus:border-primary focus:outline-none"
          />
        </div>
      </div>
      <table className="w-full table-auto border border-black text-center">
        <thead>
          <tr className="border-2 border-gray-200">
            <td>Cliente</td>
            <td>Total</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale) => (
            <tr key={sale._id} className="border-2 border-gray-100">
              <td>{sale.clientId}</td>
              <td>{sale.total}</td>
              <td><button>📄</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Sales
