const API_URL = "http://localhost:3000/api/rol"

export const getAllRoles = async () => {
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