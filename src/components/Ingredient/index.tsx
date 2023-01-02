import { IngredientContainer } from "./styles"

import breadImg from '/ingredients/pao.png'

interface IngredientProps {
  name: string
  image: string
}

export function Ingredient({ name, image }: IngredientProps) {
  return (
    <IngredientContainer>
      <img src={`/ingredients/${image}`} alt="" />
      <span>{name}</span>
    </IngredientContainer>
  )
}