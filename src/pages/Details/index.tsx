import { Receipt } from "phosphor-react"
import { useNavigate } from "react-router-dom"

import { Content, DetailsContainer, Includes, Infos } from "./styles"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { TextButton } from "../../components/TextButton"

import { Ingredient } from "../../components/Ingredient"
import { Amount } from "../../components/Amount"
import { Button } from "../../components/Button"

import dishesImg from "/dishes/torradas-de-parma.png"

export function Details() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  
  return (
    <>
      <DetailsContainer>
        <Header />
        <Content>
          <TextButton onClick={handleBack} />
          <div>
            <img src={dishesImg} alt="" />

            <Infos>
              <h1>Torradas de Parma</h1>
              <span>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </span>
              <div>
                <Ingredient />
                <Ingredient />
                <Ingredient />
              </div>
              <Includes>
                <span>R$ 25,97</span>
                <div>
                  <Amount />
                  <Button
                    title="incluir"
                    type="button"
                    icon={<Receipt size={32} />}
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