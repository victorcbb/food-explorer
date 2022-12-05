import { UploadSimple } from "phosphor-react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { IngredientItem } from "../../components/IngredientItem"
import { Input } from "../../components/Input"
import { TextButton } from "../../components/TextButton"
import { Content, EditDisheContainer, Form, Ingredients, InputFile } from "./styles"

export function EditDishe() {
  return (
    <EditDisheContainer>
      <Header />
      <Content>
        <TextButton />
        <h1>Editar prato</h1>
        <Form>
          <div>
            <InputFile>
              <span>Imagem do prato</span>
              <label htmlFor="fileImage">
                <UploadSimple size="24" />
                Selecione imagem
                <input type="file" id="fileImage" name="fileImage" />
              </label>
            </InputFile>
            <Input type="text" label="Nome" placeholder="Ex.: Salada Ceasar" />
          </div>
          <div>
            <Ingredients>
              <span>Ingredientes</span>
              <div>
                <IngredientItem isNew={false} value="Pão Naan" onChange={() => {}} onClick={() => {}} />
                <IngredientItem isNew={true} value="" onChange={() => {}} onClick={() => {}} />
              </div>
            </Ingredients>
            <Input type="text" label="Preço" placeholder="R$ 00,00" mask="R$ 99,99" />
          </div>

          <label htmlFor="description">Descrição</label>
          <textarea name="description" id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

          <input type="submit" value="Adicionar pedido" />
        </Form>
      </Content>
      <Footer />
    </EditDisheContainer>
  )
}