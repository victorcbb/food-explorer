import { Receipt } from 'phosphor-react'

import { MyRequestContainer } from "./styles"

export function MyRequest() {
  return (
    <MyRequestContainer to="/myorder">
      <Receipt size={32} />
      Meus Pedidos (0)
    </MyRequestContainer>
  )
}