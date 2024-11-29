import express from "express"
import Role from "../models/role.js"
import { validateRole, validateToken } from "../middlewares/auth.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const roles = await Role.find()
    res.json(roles)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al obtener los roles: " + error.message })
  }
})

export default router