import mongoose from "mongoose"

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/pos"

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    console.log("MongoDB conectado")
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB
