import mongoose from "mongoose"

const paymentMethodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
})

export default mongoose.model("PaymentMethod", paymentMethodSchema)