const API_URL = "http://localhost:3000/api/auth/"

export const loginService = async (username, password) => {
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
      window.location.href = "/"
      return data
    } else {
      throw new Error("Error de inicio de sesión")
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", error)
    throw error
  }
}

export const logoutService = () => {
  localStorage.removeItem("token")
  window.location.href = "/login"
}
