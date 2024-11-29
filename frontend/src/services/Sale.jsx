const API_URL = "http://localhost:3000/api/venta/"

export const getAllSales = async (token) => {
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

export const getSaleById = async (id) => {
  try {
    const res = await fetch(API_URL + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
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

export const createSale = async (sale, token) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(sale)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const updateSale = async (id, sale, token) => {
  try {
    const res = await fetch(API_URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(sale)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteSale = async (id, token) => {
  try {
    const res = await fetch(API_URL + id, {
      method: "DELETE",
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
