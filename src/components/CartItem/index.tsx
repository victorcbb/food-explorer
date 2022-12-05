import { CartItemContainer, InfosCart } from "./styles"

import DisheImg from "/dishes/parma-toast.png"

export function CartItem() {
  return (
    <CartItemContainer>
      <img src={DisheImg} alt="" />
      <div>
        <InfosCart>
          <strong>1 x Torradas de Parma</strong>
          <span>R$ 25,97</span>
        </InfosCart>
        <button>Excluir</button>
      </div>
    </CartItemContainer>
  )
}