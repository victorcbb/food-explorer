import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hook/useAuth"
import { AppRoutes } from "./App.routes"
import { AuthRoutes } from "./Auth.routes"

export function Routes() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      {user? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}