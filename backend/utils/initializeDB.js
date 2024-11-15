import bcrypt from "bcrypt"
import User from "../models/user.js"
import Role from "../models/role.js"

const initializeDB = async () => {
  try {
    // Crear roles predeterminados
    const rolesCount = await User.estimatedDocumentCount()
    if (!rolesCount) {
      const admin = new Role({ name: "admin" })
      const cashier = new Role({ name: "cashier" })
      await admin.save()
      await cashier.save()
      console.log("Roles creados")
    }
    // Crear usuarios predeterminados
    const usersCount = await User.estimatedDocumentCount()
    if (!usersCount) {
      const password = "1234"
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const admin = new User({
        name: "Administrador",
        lastName: "POS",
        username: "admin",
        password: hashedPassword,
        email: "admin@email.com",
        role_id: await Role.findOne({ name: "admin" })
      })
      await admin.save()
      console.log("Usuario Administrador creado")
    }
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error.message)
  }
}

export default initializeDB
