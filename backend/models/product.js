import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  barcode: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  price: { type: String, required: true },
  stock: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
})

export default mongoose.model("Product", productSchema)
