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

router.post("/", async (req, res) => {
  const { name, description, barcode, categoryId, price, stock } = req.body

  try {
    const product = new Product({
      name,
      description,
      barcode,
      categoryId,
      price,
      stock
    })
    await product.save()
    res.status(201).json({ message: "producto creado con exito", product })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "error al crear el producto: " + error.message })
  }
})

export default router
