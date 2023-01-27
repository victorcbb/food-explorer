import { CaretDown, UploadSimple } from "phosphor-react"
import * as Select from '@radix-ui/react-select'
import { useNavigate } from "react-router-dom"
import { useState, FormEvent, ChangeEvent } from "react"

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
import { toast } from "react-toastify"
import { api } from "../../services/api"

export function EditDishe() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  const [newIngredient, setNewIngredient] = useState("")
  const [ingredients, setIngredients] = useState<string[]>([])

  const [imageFile, setImageFile] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngredient() {
    if (newIngredient.length === 0) {
      return toast.warn("Não é possível adicionar um campo vazio.")
    }

    setIngredients(prevState => [...prevState, newIngredient])

    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted: string) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  function handleValueChange(selectdCategory: string) {
    setCategory(selectdCategory)
  }

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!name || !description || !category || !price) {
      return toast.warn("Preencha todos os campo do produto.")
    }

    if (ingredients.length === 0) {
      return toast.warn("Deve haver ao menos um ingrediente.")
    }

    if (newIngredient) {
      return toast.warn("Existe um ingrediente para adicionar no campo")
    }

    const [, priceValue] = price.split(" ")

    const [int, decimal] = priceValue.split(",")

    const priceIsNumber = Number(int + decimal)

    try {
      setIsLoading(true)

      await api.post("/products", {
        name,
        description,
        price: priceIsNumber,
        category,
        ingredients
      })

      const response = await api.get("/products?name")

      if (imageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("image", imageFile)

        if (Array.isArray(response.data) && response.data.length > 0) {
          const product = response.data[response.data.length - 1]

          const newImage = await api.patch(`/products/image/${product.id}`,
            fileUploadForm,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          product.image = newImage.data.image
        }
      }

    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error("Falha ao criar o produto.")
      }
    } finally {
      setIsLoading(false)
    }

    handleBack()
  }

  return (
    <EditDisheContainer>
      <Header />
      <Content>
        <TextButton />
        <h1>Editar prato</h1>
        <Form onSubmit={(e) => handleRegister(e)}>
          <div>
            <InputFile>
              <span>Imagem do prato</span>
              <label htmlFor="fileImage">
                <UploadSimple size="24" />
                Selecione imagem
                <input
                  type="file"
                  id="fileImage"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setImageFile(e.currentTarget.files[0])}
                  accept="image/png, image/jpeg"
                />
              </label>
            </InputFile>
            <Input
              type="text"
              label="Nome"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <Label>
              Categoria
              <SelectInput onValueChange={handleValueChange} value={category}>
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
                {
                  ingredients.map((ingredient, index) => (
                    <IngredientItem
                      key={String(index)}
                      isNew={false}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }
                <IngredientItem
                  isNew={true}
                  value={newIngredient}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </Ingredients>
            <Input
              type="text"
              label="Preço"
              placeholder="R$ 00,00"
              mask="R$ 99,99"
              onChange={(e: ChangeEvent<any>) => setPrice(e.target.value)}
            />
          </div>

          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />

          <input type="submit" value="Adicionar pedido" disabled={isLoading} />
        </Form>
      </Content>
      <Footer />
    </EditDisheContainer>
  )
}