import bcrypt from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import { validateLogin } from "../middlewares/auth.js"
import User from "../models/user.js"
const router = express.Router()

router.post("/login", [validateLogin], async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Nombre de usuario y contraseña requeridos" })
  }

  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({ error: "Credenciales incorrectas" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales incorrectas" })
    }

    const token = jwt.sign(
      {
        id: user._id,
        roleId: user.roleId
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    )

    res.json({ token: `Bearer ${token}` })
  } catch (error) {
    res.status(500).json({ error: "Error al autenticar: " + error })
  }
})

export default router
