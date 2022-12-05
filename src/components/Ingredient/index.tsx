import { IngredientContainer } from "./styles"

import breadImg from '/ingredients/bread.png'

export function Ingredient() {
  return (
    <IngredientContainer>
      <img src={breadImg} alt="" />
      <span>pão</span>
    </IngredientContainer>
  )
}