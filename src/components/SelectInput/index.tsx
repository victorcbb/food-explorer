import { SelectContent, SelectIcon, SelectInputContainer, SelectItem, SelectItemText, SelectPortal, SelectTrigger, SelectValue, SelectViewport } from "./styles"
import * as Select from '@radix-ui/react-select'
import { CaretDown } from "phosphor-react"
import { Dot } from "../../pages/Order/styles"

export function SelectInput() {
  return (
    <SelectInputContainer>
      <SelectTrigger>
        <SelectValue placeholder="Etapa" />
        <SelectIcon>
          <CaretDown size={24} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <Select.ScrollDownButton>
            <CaretDown size={24} />
          </Select.ScrollDownButton>
          <SelectViewport>

            <SelectItem value="pending">
              <SelectItemText>
                <Dot variant="red">&bull; </Dot>
                Pendente
              </SelectItemText>
            </SelectItem>

            <SelectItem value="preparing">
              <SelectItemText>
                <Dot variant="yellow">&bull; </Dot>
                Preparando
              </SelectItemText>
            </SelectItem>

            <SelectItem value="delivered">
              <SelectItemText>
                <Dot variant="green">&bull; </Dot>
                Entregue
              </SelectItemText>
            </SelectItem>

          </SelectViewport>
          <Select.ScrollDownButton>
            <CaretDown size={24} />
          </Select.ScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectInputContainer>
  )
}