import express from "express"
import connectDB from "./config/db.js"
import cors from "cors"
import userRoutes from "./users.js"
import clientRoutes from "./clients.js"
import initializeDB from "./utils/initializeDB.js"

const app = express()
const PORT = 3000

// Conectar a la base de datos
connectDB()
// Inicializar la base de datos
initializeDB()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hola mundo!")
})

//Uso de enrutador de Usuario
app.use("/api/usuarios", userRoutes)

// Uso de enrutador de clientes
app.use("/api/clientes", clientRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
