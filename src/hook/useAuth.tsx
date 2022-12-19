import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { toast } from 'react-toastify'

import { api } from "../services/api"

interface IUser {
  id?: string
  name?: string
  email: string
  password: string
  requests?: string[]
  role?: "USER" | "ADMIN"
}

interface IData {
  user: IUser
  token: string
}

interface AuthContextType {
  user: IUser
  signIn: ({ email, password}: IUser) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider ({ children }: AuthProviderProps) {
  const [data, setData] = useState<IData>({} as IData)
  const [search, setSearch] = useState("")

  async function signIn({ email, password }: IUser) {
    try {
      const response = await api.post("/authenticate", { email, password})
      const { user, token } = response.data as IData

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer:token", token)

      setData({ user, token })
    } catch (error) {
      if(error.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível logar com o usuário.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user")
    localStorage.removeItem("@foodexplorer:token")

    setData({} as IData)
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token")
    const user = localStorage.getItem("@foodexplorer:user")

    if (token && user) {
      api.defaults.headers.common["authorization"] = `bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signOut,
      signIn,
      user: data.user
    }}>{children}</AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }