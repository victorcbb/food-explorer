import { HeartStraight } from "phosphor-react"
import { CardDishesContainer } from "./styles"

import { Amount } from "../Amount"
import { Button } from "../Button"

import { IProducts } from "../../pages/Home"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hook/useAuth"
import { useState } from "react"

interface CardDishesProps {
  product: IProducts
}

export function CardDishes({ product }: CardDishesProps) {
  const [quantity, setQuantity] = useState(1)
  const { user } = useAuth()
  
  const imageUrl = product.image && `${api.defaults.baseURL}/files/${product.image}`
  
  const formatedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price / 100)

  const { addProductToCart } = useAuth()
  const navigate = useNavigate()

  function handleIncrease() {
    setQuantity(prevState => prevState + 1)
  }

  function handleDecrease() {
    setQuantity(prevState => prevState - 1)
  }

  function handleAddToCart() {
    if (typeof user.id === "string") {
      const productToAdd = {
        userId: user.id,
        ...product,
        quantity,
        createdAt: new Date(),
      }

      addProductToCart(productToAdd)
    }
  }

  function handleNavigate(id: string) {
    navigate(`/details/${id}`)
  }

  return (
    <CardDishesContainer>
      <HeartStraight weight="regular" size={window.innerWidth >= 500 ? 32 : 28} />
      <button onClick={() => handleNavigate(product.id)}>
        <img src={imageUrl} alt="imagem do produto" />
        <strong>{product.name} &gt;</strong>
        <p>{product.description}</p>
        <span>{formatedPrice}</span>
      </button>
      <div>
        <Amount 
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <Button type="button" title="incluir" onClick={handleAddToCart} />
      </div>
    </CardDishesContainer>
  )
}