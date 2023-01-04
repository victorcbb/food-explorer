import { Content, OrderAdminContainer, TableWrapper } from "./styles"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { SelectInput } from "../../components/SelectInput"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface IDetails {
  id: string
  name: string
}

interface IOrders {
  id: number
  createdAt: string
  status: "PENDING" | "PREPARING" | "DELIVERED"
  details: IDetails[]
}

export function OrderAdmin() {
  const [orders, setOrders] = useState<IOrders[]>([])

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
                      <SelectInput />
                    </td>
                    <td>{order.id}</td>

                    <td>
                      {
                        order.details.map(detail => (` x ${detail.name},`))
                      }
                    </td>

                    <td>{order.createdAt}</td>
                  </tr>
                ))
              }
              <tr>
                <td>
                  <SelectInput />
                </td>
                <td>00000001</td>
                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td>20/05 às 18h00</td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </Content>
      <Footer />
    </OrderAdminContainer>
  )
}