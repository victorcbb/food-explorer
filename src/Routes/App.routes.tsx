import { Routes, Route } from "react-router-dom"

import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Order } from "../pages/Order"
import { MyOrder } from "../pages/MyOrder"
import { EditDishe } from "../pages/EditDishe"
import { useAuth } from "../hook/useAuth"
import { OrderAdmin } from "../pages/OrderAdmin"

export function AppRoutes() {
  const { user } = useAuth()


  return (
    <Routes>
      {
        user.role === 'ADMIN' ?
          <>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/myorder" element={<MyOrder />} />
            <Route path="/editdishe" element={<EditDishe />} />
            <Route path="/orderadmin" element={<OrderAdmin />} />
          </>
          :
          <>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/myorder" element={<MyOrder />} />
          </>
      }
    </Routes>
  )
}