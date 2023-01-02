import { Minus, Plus } from "phosphor-react";
import { AmountContainer } from "./styles";

interface AmountProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function Amount({ onIncrease, onDecrease, quantity }: AmountProps) {
  return (
    <AmountContainer>
      <button type="button" disabled={quantity === 1} onClick={onDecrease}>
        <Minus size={24} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={onIncrease}>
        <Plus size={24} weight="bold" />
      </button>
    </AmountContainer>
  )
}