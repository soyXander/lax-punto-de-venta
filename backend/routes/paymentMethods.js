import express from "express"
import PaymentMethod from "../models/paymentMethod.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.find()
    res.json(paymentMethods)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al obtener los metodos de pago: " + error.message })
  }
})

router.post("/", async (req, res) => {
  const { name } = req.body

  try {
    const paymentMethod = new PaymentMethod({ name })
    await paymentMethod.save()
    res.json(paymentMethod)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al crear el metodo de pago: " + error.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findById(req.params.id)
    if (!paymentMethod) {
      return res.status(404).json({ error: "Metodo de pago no encontrado" })
    }
    const updatedPaymentMethod = await PaymentMethod.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    )
    res.json(updatedPaymentMethod)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al actualizar el metodo de pago: " + error })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findById(req.params.id)
    if (!paymentMethod) {
      return res.status(404).json({ error: "Metodo de pago no encontrado" })
    }
    await PaymentMethod.findByIdAndDelete(req.params.id)
    res.json({ message: "Metodo de pago eliminado con éxito" })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al eliminar el metodo de pago: " + error })
  }
})

export default router