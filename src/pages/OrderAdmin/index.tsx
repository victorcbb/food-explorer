import { formatInTimeZone } from 'date-fns-tz'

import { Content, OrderAdminContainer, TableWrapper } from "./styles"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { SelectInput } from "../../components/SelectInput"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from '../../hook/useAuth'

interface IDetails {
  id: string
  name: string
}

interface IOrders {
  id: number
  userId: string
  createdAt: string
  status: "PENDING" | "PREPARING" | "DELIVERED"
  details: IDetails[]
}

export function OrderAdmin() {
  const [orders, setOrders] = useState<IOrders[]>([])
  const { cartItems } = useAuth()

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/requests/admin")

      setOrders(response.data)
    }

    fetchOrders()
  }, [])

  return (
    <OrderAdminContainer>
      <Header />
      <Content>
        <h1>Pedidos</h1>

        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              {
                orders &&
                orders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <SelectInput
                        orderId={order.id}
                        currentStatus={order.status}
                      />
                    </td>
                    <td>{("00000000" + order.id).slice(-8)}</td>

                    <td>
                      {
                        order.details.map(detail => (
                          ` ${cartItems
                            .filter(items => items.userId === order.userId)
                            .find(item => item.id === detail.id).quantity} 
                          x 
                          ${detail.name},`
                        ))
                      }
                    </td>

                    <td>{formatInTimeZone(new Date(order.createdAt), "America/Chihuahua", "dd/MM ' às ' HH:mm")}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </TableWrapper>
      </Content>
      <Footer />
    </OrderAdminContainer>
  )
}