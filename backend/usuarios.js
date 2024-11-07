import express from "express";

const router = express.Router();

let usuarios = [];
let id = 0;

//Obtenemos todos los usuarios
router.get("/", (req, res) => {
  res.send(usuarios);
});

//Crear usuario nuevo
router.post("/", (req, res) => {
  const { nombre, apellido, nombre_usuario, contraseña } = req.body;
  if (!nombre || !apellido || !nombre_usuario || !contraseña) {
    res.status(400).json({ error: "Datos incompletos" });
    return;
  }
  if (usuarios.some((usuario) => usuario.nombre_usuario === nombre_usuario)) {
    res
      .status(400)
      .json({ error: "Ya existe un usuario con el mismo nombre de usuario" });
    return;
  }

  const usuario = { id, nombre, apellido, nombre_usuario, contraseña };
  usuarios.push(usuario);
  res.status(201).json(usuario);

  id++;

  //Actualizar ususario por Id
  router.put("/:id", (req, res) => {});
});

export default router;
