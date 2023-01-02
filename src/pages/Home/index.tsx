import { useEffect, useState } from "react"

import { Header } from "../../components/Header"
import { Banner, Content, HomeContainer } from "./styles"
import { Carousel } from "../../components/Carousel"
import { Footer } from "../../components/Footer"

import bannerImg from "../../assets/banner.png"
import { api } from "../../services/api"
import { useAuth } from "../../hook/useAuth"

interface Ingredients {
  name: string
  image: string
}

export interface IProducts {
  id: string
  name: string
  description: string
  image: string
  price: number
  ingredients: Ingredients[]
  category: "main" | "dessert" | "drink"
}

export function Home() {
  const [products, setProducts] = useState<IProducts[]>([])
  const { search } = useAuth()

  const main = products.filter(product => product.category === "main")
  const dessert = products.filter(product => product.category === "dessert")
  const drink = products.filter(product => product.category === "drink")

  useEffect(() => {
    async function fetcchProducts() {
      const response = await api.get(`/products?name=${search}`)

      setProducts(response.data)
    }

    fetcchProducts()
  }, [search])

  return (
    <>
      <HomeContainer>
        <Header />
        <Content>
          <Banner>
            <img src={bannerImg} alt="Macaron de diversas cores com amoras " />

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Banner>

          {
            main.length > 0 && 
            <>
              <h2>Pratos principais</h2>
              <Carousel products={main} />
            </> 
          }

          {
            dessert.length > 0 &&
            <>
              <h2>Sobremesas</h2>
              <Carousel products={dessert} />
            </>
          }

          {
            drink.length > 0 &&
            <>
              <h2>Bebidas</h2>
              <Carousel products={drink} />
            </>
          }
        </Content>
        <Footer />
      </HomeContainer>
    </>
  )
}