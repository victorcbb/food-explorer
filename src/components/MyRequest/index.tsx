import { Receipt } from 'phosphor-react'
import { useAuth } from '../../hook/useAuth'

import { MyRequestContainer } from "./styles"

export function MyRequest() {
  const { cartQuantity } = useAuth()

  return (
    <MyRequestContainer to="/myorder">
      <Receipt size={window.innerWidth >= 500 ? 32 : 28} />
      {window.innerWidth >= 500 && "Meus Pedidos"}
      ({cartQuantity})
    </MyRequestContainer>
  )
}