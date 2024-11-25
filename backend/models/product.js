import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  barcode: { type: String, required: true },
  category_id: { type: String },
  price: { type: String, required: true },
  stock: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
})

export default mongoose.model("Product", productSchema)
