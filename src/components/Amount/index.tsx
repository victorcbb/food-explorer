import { Minus, Plus } from "phosphor-react";
import { AmountContainer } from "./styles";

export function Amount() {
  return (
    <AmountContainer>
      <button type="button">
        <Minus size={24} weight="bold" />
      </button>
      <span>01</span>
      <button type="button">
        <Plus size={24} weight="bold" />
      </button>
    </AmountContainer>
  )
}