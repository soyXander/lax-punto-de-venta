import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import Logo from "../components/Logo"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <div className="flex flex-col h-full items-center justify-center bg-base">

      <form className="text gray-500 m-20 flex flex-col gap-y-6 rounded-lg border bg-secondary bg-opacity-70 p-10 text-neutral">
        <input
          className="rounded-lg bg-base py-1 text-center text-neutral outline-none"
          type="text"
          placeholder="Nombre de usuario"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="rounded-lg bg-base py-1 text-center text-neutral outline-none"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="h-full rounded-lg border bg-primary bg-opacity-30 px-8 py-1 font-semibold uppercase text-white shadow-md shadow-transparent transition-all duration-300 hover:bg-opacity-100 hover:shadow hover:shadow-black"
          onClick={handleLogin}
        >
          Iniciar sesion
        </button>
      </form>
    </div>
  )
}
export default Login
