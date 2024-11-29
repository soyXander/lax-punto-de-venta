// import {useAuth} from "../contexts/AuthContext"

const API_URL = "http://localhost:3000/api/producto/"

export const getAllProducts = async (token) => {
  try {
    const res = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const getProductById = async (id) => {
  try {
    const res = await fetch(API_URL + id)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const createProduct = async (product) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const updateProduct = async (id, product) => {
  try {
    const res = await fetch(API_URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(API_URL + id, {
      method: "DELETE"
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}
