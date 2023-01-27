import { CaretDown } from "phosphor-react"
import { useEffect, useState } from "react"
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

interface IOrder {
  id: number
  status: "PENDING" | "PREPARING" | "DELIVERED"
}

export function SelectInput({ orderId, currentStatus }: SelectInputProps) {
  const [status, setStatus] = useState(currentStatus)
  const [order, setOrder] = useState<IOrder>({} as IOrder)

  async function handleValueChange(selectedValue: string) {
    setStatus(selectedValue)
  }

  useEffect(() => {

    async function fetchOrder() {
      try {
        if (status !== currentStatus) {
          toast.info("Aguarde os Status serem atualizadas")
        }

        await api.put('/requests/update', {
          id: orderId,
          status: status
        })
        
        if (status !== currentStatus) {
          toast.success("Status atualizadas com sucesso!")
        }

        const response = await api.get('/requests/admin')

        const ordersList: IOrder[] = response.data
        const filteredOrder = ordersList.find(order => order.id === orderId)
        
        setOrder(filteredOrder)        
      } catch (err: any) {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Falha ao carregar o status do produto.")
        }
      }
    }

    fetchOrder()
  }, [status])

  return (
    <SelectInputContainer
      value={status}
      onValueChange={handleValueChange}
      defaultValue={order.status}
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