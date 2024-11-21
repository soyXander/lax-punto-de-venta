import cors from "cors"
import express from "express"
import authConfig from "./config/auth.js"
import connectDB from "./config/db.js"
import { validateRole, validateToken } from "./middlewares/auth.js"
import authRoutes from "./routes/auth.js"
import clientRoutes from "./routes/clients.js"
import userRoutes from "./routes/users.js"
import initializeDB from "./utils/initializeDB.js"
import productRoutes from "./routes/products.js"

const app = express()
const PORT = 3000

// Conectar a la base de datos
connectDB()
// Inicializar la base de datos
initializeDB()

app.use(cors())
app.use(express.json())
authConfig()

app.get("/", (req, res) => {
  res.send("Hola mundo!")
})

// Uso de enrutador de autenticación
app.use("/api/auth", authRoutes)

// Ruta protegida de prueba
app.get("/admin", validateToken, validateRole("admin"), (req, res) => {
  try {
    res.json({ message: "Acceso permitido" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al acceder a la ruta: " + error })
  }
})

//Uso de enrutador de Usuario
app.use("/api/usuarios", userRoutes)

// Uso del enrutador de Productos
app.use("/api/productos", productRoutes)

// Uso de enrutador de clientes
app.use("/api/clientes", clientRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
