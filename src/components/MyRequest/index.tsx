import { Receipt } from 'phosphor-react'
import { useAuth } from '../../hook/useAuth'

import { MyRequestContainer } from "./styles"

export function MyRequest() {
  const { cartQuantity } = useAuth()

  return (
    <MyRequestContainer to="/myorder">
      <Receipt size={32} />
      Meus Pedidos ({ cartQuantity })
    </MyRequestContainer>
  )
}