import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
})

export default mongoose.model("Category", categorySchema)