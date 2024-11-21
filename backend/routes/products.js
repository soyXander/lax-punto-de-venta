import express from "express"
import Product from "../models/product.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "error al obtener los productos: " + error.message })
  }
})
