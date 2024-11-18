import { body } from "express-validator"
import passport from "passport"
import Role from "../models/role.js"

export const validateToken = passport.authenticate("jwt", { session: false })

export const validateRole = (role) => {
  return async (req, res, next) => {
    const user = req.user
    const userRole = await Role.findById(user.role_id)

    if (userRole.name !== role) {
      return res.status(403).json({ error: "No tienes permiso para realizar esta acción" })
    }
    next()
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
