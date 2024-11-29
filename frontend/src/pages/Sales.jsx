import { useAuth } from "../contexts/AuthContext.jsx"
import { useEffect, useState } from "react"
import { getAllSales,  } from "../services/Sale"

const Sales = () => {
  const { session } = useAuth()

  const [sales, setSales] = useState([])

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

  return (
    <div>
      <h1>Ventas</h1>
      <ul>
        {sales.map((sale) => (
          <li key={sale._id}>
            Producto: {sale.product.name}, Cantidad: {sale.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sales
