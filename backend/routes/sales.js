import express from "express"
import Sale from "../models/sale.js"
import { validateRole, validateToken } from "../middlewares/auth.js"

const router = express.Router()

// Obtener ventas
router.get(
  "/",
  validateToken,
  validateRole(["admin", "cashier"]),
  async (req, res) => {
    try {
      const sales = await Sale.find()
      res.json(sales)
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener las ventas" + error.message })
    }
  }
)

// crear ventas
router.post(
  "/",
  validateToken,
  validateRole(["admin", "cashier"]),
  async (req, res) => {
    const { userId, clientId, total, paymentMethodId, products } = req.body
    try {
      const sale = new Sale({
        userId,
        clientId,
        total,
        paymentMethodId,
        products
      })
      await sale.save()
      res
        .status(201)
        .json({ message: "Venta creada con exito", sale })
    } catch (error) {
      res.status(201).json({ error: "Error al crear la venta" })
    }
  }
)

// Actualizar ventas
router.put("/:id", validateToken, validateRole(["admin"]), async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id)
    if (!sale) {
      return res.status(404).json({ error: "Venta no encontrada" })
    }

    const updateSale = await Sale.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updateAt: Date.now() },
      { new: true }
    )
    res.json(updateSale)
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al actualizar la venta: " + error })
  }
})

// Eliminar ventas
router.delete("/:id", validateToken, validateRole(["admin"]), async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id)
    if (!sale) {
      return res.status(404).json({ error: "Venta no encontrada" })
    }
    await Sale.findByIdAndDelete(req.params.id)
    res.json({ message: "Venta eliminada con éxito" })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al eliminar la venta: " + error })
  }
})

export default router
