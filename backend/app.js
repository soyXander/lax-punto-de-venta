import express from "express";
import cors from "cors";
import routerUsuarios from "./usuarios.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

//Uso de enrutador de Usuario
app.use("/app/usuarios", routerUsuarios);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
