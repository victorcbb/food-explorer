import { IngredientContainer } from "./styles"

import breadImg from '/ingredients/pao.png'

export function Ingredient() {
  return (
    <IngredientContainer>
      <img src={breadImg} alt="" />
      <span>pão</span>
    </IngredientContainer>
  )
}