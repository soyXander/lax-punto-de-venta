const API_URL = "http://localhost:3000/api/categoria/"

export const getAllCategories = async (token) => {
  if (!token) {
    console.error("No token provided")
    return
  }
  try {
    const res = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}` // Token en el header
      }
    })
    if (res.ok) {
      const data = await res.json()
      return data
    } else {
      console.error("Error fetching categories:", res.status)
    }
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}

export const getCategoryById = async (id, token) => {
  try {
    const res = await fetch(API_URL + id, {
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

export const createCategory = async (category) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const updateCategory = async (id, category) => {
  try {
    const res = await fetch(API_URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteCategory = async (id) => {
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
