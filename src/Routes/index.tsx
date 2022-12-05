import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./App.routes"

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}