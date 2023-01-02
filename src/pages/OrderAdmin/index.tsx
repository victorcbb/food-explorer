import { Content, OrderAdminContainer, TableWrapper } from "./styles"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { SelectInput } from "../../components/SelectInput"

export function OrderAdmin() {
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
              <tr>
                <td>
                  <SelectInput />
                </td>
                <td>00000004</td>
                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td>20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <SelectInput />
                </td>
                <td>00000003</td>
                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td>20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <SelectInput />
                </td>
                <td>00000002</td>
                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td>20/05 às 18h00</td>
              </tr>
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