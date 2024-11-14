import mongoose from "mongoose"

const roleScheme = new mongoose.Schema({
  name: {
    type: String,
    enum: ["cashier", "admin"],
    default: "cashier",
    required: true,
    unique: true
  }
})

export default mongoose.model("Role", roleScheme)
