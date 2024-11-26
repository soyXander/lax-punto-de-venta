import mongoose from "mongoose"
const salesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    require: true
  },
  total: { type: Number, require: true },
  paymentMethodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PaymentMethod",
    require: true
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true
      },
      quantity: {
        type: Number,
        require: true
      },
      unitPrice: {
        type: Number,
        require: true
      },
      total: {
        type: Number,
        require: true
      }
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
})

export default mongoose.model("Sale", salesSchema)
