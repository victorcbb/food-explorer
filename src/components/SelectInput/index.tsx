import { CaretDown } from "phosphor-react"
import { useState } from "react"
import { toast } from "react-toastify"

import { Dot } from "../../pages/Order/styles"
import { api } from "../../services/api"
import { 
  SelectContent, 
  SelectIcon, 
  SelectInputContainer, 
  SelectItem, 
  SelectItemText, 
  SelectPortal, 
  SelectTrigger, 
  SelectValue, 
  SelectViewport 
} from "./styles"

interface SelectInputProps {
  orderId: number
  currentStatus: string
}

export function SelectInput({ orderId, currentStatus }: SelectInputProps) {
  const [status, setStatus] = useState("PENDING" || "PREPARING" || "DELIVERED")

  async function handleValueChange(selectedValue: string) {
    setStatus(selectedValue)

    try {
      await api.put('/requests/update', {
        id: orderId,
        status
      })
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error("Falha ao criar o produto.")
      }
    }
  }

  return (
    <SelectInputContainer 
      value={status} 
      onValueChange={handleValueChange} 
      defaultValue={currentStatus}
    >
      <SelectTrigger>
        <SelectValue />
        <SelectIcon>
          <CaretDown size={24} />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent>
          <SelectViewport>

            <SelectItem value="PENDING">
              <SelectItemText>
                <Dot variant="red">&bull; </Dot>
                Pendente
              </SelectItemText>
            </SelectItem>

            <SelectItem value="PREPARING">
              <SelectItemText>
                <Dot variant="yellow">&bull; </Dot>
                Preparando
              </SelectItemText>
            </SelectItem>

            <SelectItem value="DELIVERED">
              <SelectItemText>
                <Dot variant="green">&bull; </Dot>
                Entregue
              </SelectItemText>
            </SelectItem>

          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectInputContainer>
  )
}