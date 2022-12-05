import { Header } from "../../components/Header"
import { Banner, Content, HomeContainer } from "./styles"

import bannerImg from "../../assets/banner.png"
import { Carousel } from "../../components/Carousel"
import { Footer } from "../../components/Footer"

export function Home() {
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

          <h2>Pratos principais</h2>
          <Carousel />

          <h2>Sobremesas</h2>
          <Carousel />

          <h2>Bebidas</h2>
          <Carousel />
        </Content>
        <Footer />
      </HomeContainer>
    </>
  )
}