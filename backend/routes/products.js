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
  const { name, description, barcode, category_id, price, stock } = req.body

  try {
    const product = new Product({
      name,
      description,
      barcode,
      category_id,
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

router.put("/:id", async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ error: "producto no encontrado" })
    }
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    )
    res.json(updateProduct)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "error al actualizar el producto: " + error })
  }
})

export default router
