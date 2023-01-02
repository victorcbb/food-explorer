import { useAuth } from "../../hook/useAuth"
import { api } from "../../services/api"
import { CartItemContainer, InfosCart } from "./styles"

interface CardItemProps {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export function CartItem({ id, name, price, quantity, image }: CardItemProps) {
  const { removeProductCard } = useAuth()

  const imageUrl = image ? `${api.defaults.baseURL}/files/${image}` : ""

  const formatedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price / 100)

  function handleRemoveItem() {
    removeProductCard(id)
  }

  return (
    <CartItemContainer>
      <img src={imageUrl} alt="" />
      <div>
        <InfosCart>
          <strong>{quantity} x {name}</strong>
          <span>{formatedPrice}</span>
        </InfosCart>
        <button type="button" onClick={handleRemoveItem}>Excluir</button>
      </div>
    </CartItemContainer>
  )
}