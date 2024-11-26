import express from "express"
import Sale from "../models/sale.js"
import Product from "../models/product.js"

const router = express.Router()

//Obtener lista de ventas
router.get("/", async (req, res) => {
  try {
    const sales = await Sale.find()
    res.json(sales)
  } catch (error) {
    res
      .status(500)
      .json({ error: "La lista de ventas no se encuentra" + error.message })
  }
})

//crear lista de ventas
router.post("/", async (req, res) => {
  const { product_id, quantity } = req.body
  try {
    const id_product = await Product.findOne({ product_id })
    if (!id_product) {
      return res.status(400).json({ error: "El producto no existe" })
    }

    const sale = new Sale({
      product_id,
      quantity
    })
    await sale.save()

    res
      .status(201)
      .json({ message: "Lista de ventas fue creada con exito", sale })
  } catch (error) {
    res.status(201).json({ error: "Error al crear la lista" })
  }
})

export default router
