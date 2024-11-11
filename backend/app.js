import express from "express";
import cors from "cors";
import routerUsuarios from "./usuarios.js";
import routerClientes from "./clients.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

//Uso de enrutador de Usuario
app.use("/app/usuarios", routerUsuarios);

// Uso de enrutador de clientes
app.use("/api/clientes", routerClientes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
