import { HeartStraight } from "phosphor-react"
import { CardDishesContainer } from "./styles"

import { Amount } from "../Amount"
import { Button } from "../Button"

import dishesImg from "/dishes/torradas-de-parma.png"

export function CardDishes({ ...rest }) {
  return (
    <CardDishesContainer>
      <HeartStraight size={32} />
      <a href="" {...rest}>
        <img src={dishesImg} alt="" />
        <strong>Torradas de Parma &gt;</strong>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <span>R$ 25,97</span>
      </a>
      <div>
       <Amount />
       <Button type="button" title="incluir" />
      </div>
    </CardDishesContainer>
  )
}