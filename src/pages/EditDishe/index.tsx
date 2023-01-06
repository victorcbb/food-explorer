import { CaretDown, UploadSimple } from "phosphor-react"
import * as Select from '@radix-ui/react-select'

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { IngredientItem } from "../../components/IngredientItem"
import { Input } from "../../components/Input"
import { TextButton } from "../../components/TextButton"
import { 
  Content, 
  EditDisheContainer, 
  Form, 
  Ingredients, 
  InputFile, 
  Label, 
  SelectContent, 
  SelectInput, 
  SelectItem, 
  SelectTrigger
} from "./styles"

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
            <Label>
              Categoria
            <SelectInput>
              <SelectTrigger>
                <Select.Value placeholder="" />
                <Select.Icon>
                  <CaretDown size={24} />
                </Select.Icon>
              </SelectTrigger>
              <Select.Portal>
                <SelectContent>
                  <Select.Viewport>

                    <SelectItem value="main">
                      <Select.ItemText>
                        Principal
                      </Select.ItemText>
                    </SelectItem>
                    <SelectItem value="dessert">
                      <Select.ItemText>
                        Sobremesa
                      </Select.ItemText>
                    </SelectItem>
                    <SelectItem value="drink">
                      <Select.ItemText>
                        Bebida
                      </Select.ItemText>
                    </SelectItem>

                  </Select.Viewport>
                </SelectContent>
              </Select.Portal>
            </SelectInput>
            </Label>
          </div>
          <div>
            <Ingredients>
              <span>Ingredientes</span>
              <div>
                <IngredientItem isNew={false} value="Pão Naan" onChange={() => { }} onClick={() => { }} />
                <IngredientItem isNew={true} value="" onChange={() => { }} onClick={() => { }} />
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