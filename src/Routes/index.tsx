import { BrowserRouter } from "react-router-dom"
import { AuthRoutes } from "./Auth.routes"

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}