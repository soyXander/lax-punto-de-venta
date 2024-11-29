import { createContext, useState, useContext, useEffect } from "react"
import { loginService, logoutService } from "../services/Auth"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setSession({ token })
    }
  }, [])

  const login = async (username, password) => {
    try {
      const data = await loginService(username, password)
      localStorage.setItem("token", data.token)
      setSession({ token: data.token })
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const logout = () => {
    logoutService()
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
