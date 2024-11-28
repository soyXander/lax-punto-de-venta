import cors from "cors"
import express from "express"
import authConfig from "./config/auth.js"
import connectDB from "./config/db.js"
import authRoutes from "./routes/auth.js"
import categoryRoutes from "./routes/categories.js"
import clientRoutes from "./routes/clients.js"
import paymentMethodRoutes from "./routes/paymentMethods.js"
import productRoutes from "./routes/products.js"
import roleRoutes from "./routes/roles.js"
import saleRoutes from "./routes/sales.js"
import userRoutes from "./routes/users.js"
import initializeDB from "./utils/initializeDB.js"

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

// Uso de enrutador de Usuario
app.use("/api/usuario", userRoutes)

// Uso de enrutador de Rol
app.use("/api/rol", roleRoutes)

// Uso del enrutador de Productos
app.use("/api/producto", productRoutes)

// Uso de enrutador de categorias
app.use("/api/categoria", categoryRoutes)

// Uso de enrutador de clientes
app.use("/api/cliente", clientRoutes)

//Uso de enrutador de ventas
app.use("/api/venta", saleRoutes)

//Uso de enrutador de metodos de pago
app.use("/api/metodo-pago", paymentMethodRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
