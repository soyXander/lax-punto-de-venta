import mongoose from "mongoose"
const salesSchema = new mongoose.Schema({
  products: [
    {
      product_id: { type: String, require: true },
      quantity: { type: String, require: true }
    }
  ]
})

export default mongoose.model("salesSchema", salesSchema)
