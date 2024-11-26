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

export default router
