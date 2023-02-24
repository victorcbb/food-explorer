import { Receipt } from "phosphor-react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Content, DetailsContainer, Includes, Infos } from "./styles"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { TextButton } from "../../components/TextButton"
import { api } from "../../services/api"

import { Ingredient } from "../../components/Ingredient"
import { Amount } from "../../components/Amount"
import { Button } from "../../components/Button"

import { IProducts } from "../Home"
import { useAuth } from "../../hook/useAuth"

export function Details() {
  const [product, setProduct] = useState<IProducts>({} as IProducts)
  const [quantity, setQuantity] = useState(1)

  const { addProductToCart, user } = useAuth()

  const params = useParams()
  const navigate = useNavigate()
  const formatedPrice = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 100)
  
  const imageUrl = product.image ? `${api.defaults.baseURL}/files/${product.image}` : ''
  

  function handleBack() {
    navigate(-1)
  }

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

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`products/details/${params.id}`)

      setProduct(response.data)
    }

    fetchProduct()
  }, [])

  return (
    <>
      <DetailsContainer>
        <Header />
        <Content>
          <TextButton onClick={handleBack} />
          <div>
            {
              imageUrl &&
              <img 
                src={imageUrl} 
                referrerPolicy="no-referrer" 
                alt={product.name} 
              />
            }

            <Infos>
              <h1>{product.name}</h1>
              <span>
                {product.description}
              </span>
              <div>
                {
                  product.ingredients && product.ingredients.map(ingredient => (
                    <Ingredient key={ingredient.name} name={ingredient.name} image={ingredient.image} />
                  ))
                }

              </div>
              <Includes>
                <span>{formatedPrice}</span>
                <div>
                  <Amount
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    quantity={quantity}
                  />
                  <Button
                    title="incluir"
                    type="button"
                    icon={<Receipt size={window.innerWidth > 500 ? 32 : 28} />}
                    onClick={handleAddToCart}
                  />
                </div>
              </Includes>
            </Infos>
          </div>
        </Content>
        <Footer />
      </DetailsContainer>
    </>
  )
}