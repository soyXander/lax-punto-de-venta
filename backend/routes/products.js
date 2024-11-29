import express from "express"
import Product from "../models/product.js"
import { validateRole, validateToken } from "../middlewares/auth.js"

const router = express.Router()

router.get("/", async (req, res) => {
    try {
      const products = await Product.find().populate("categoryId")
      res.json(products)
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ error: "error al obtener los productos: " + error.message })
    }
  }
)

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

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
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

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ error: "producto no encontrado" })
    }
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "producto eliminado con exito" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "error al eliminar: " + error })
  }
})

export default router
