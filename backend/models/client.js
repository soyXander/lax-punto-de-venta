import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  lastname: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("client", clientSchema);