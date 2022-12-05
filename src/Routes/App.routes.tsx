import { Routes, Route } from "react-router-dom"

import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Order } from "../pages/Order"
import { MyOrder } from "../pages/MyOrder"

export function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/myorder" element={<MyOrder />} />
    </Routes>
  )
}