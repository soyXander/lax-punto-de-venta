const API_URL = "http://localhost:3000/api/auth/"

export const login = async (username, password) => {
  try {
    const res = await fetch(API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })

    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const logout = () => {
  localStorage.removeItem("token")
  window.location.href = "/login"
}