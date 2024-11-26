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
      .json({ message: "Lista de ventas fue creada con exito", sale })
  } catch (error) {
    res.status(201).json({ error: "Error al crear la lista" })
  }
})

//Actualizar lista de ventas
router.put("/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id)
    if (!sale) {
      return res.status(404).json({ error: "Lista no encontrada" })
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
      .json({ error: "Error al actualizar la lista de ventas" + error })
  }
})

//Eliminar lista de ventas
router.delete("/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id)
    if (!sale) {
      return res.status(404).json({ error: "Lista de ventas no encontrado" })
    }
    await Sale.findByIdAndDelete(req.params.id)
    res.json({ message: "Lista de ventas eliminada con éxito" })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al eliminar la lista de ventas: " + error })
  }
})

export default router
