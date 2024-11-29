import { body } from "express-validator"
import passport from "passport"
import Role from "../models/role.js"

export const validateToken = passport.authenticate("jwt", { session: false })

export const validateRole = (roles) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Usuario no autenticado" })
      }

      const role = await Role.findOne(req.user.roleId)
      if (!role) {
        return res.status(400).json({ error: "Rol no válido" })
      }

      const allowedRoles = Array.isArray(roles) ? roles : [roles]
      if (!allowedRoles.includes(role.name)) {
        return res
          .status(403)
          .json({ error: "No tienes permiso para realizar esta acción" })
      }

      next()
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ error: "Error al validar el rol: " + error.message })
    }
  }
}

export const validateLogin = [
  body("username").isAlphanumeric().notEmpty().isLength({ min: 3, max: 50 }),
  body("password").isStrongPassword({
    minLength: 8,
    maxLength: 50,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0
  })
]
