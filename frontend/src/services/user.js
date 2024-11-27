const API_URL = "http://localhost:3000/api/usuarios/"

export const getAllUsers = async () => {
  try {
    const res = await fetch(API_URL)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const getUserById = async (id) => {
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

export const createUser = async (user) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const updateUser = async (id, user) => {
  try {
    const res = await fetch(API_URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteUser = async (id) => {
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