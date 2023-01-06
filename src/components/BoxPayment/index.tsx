import { BoxPaymentContainer, OrderForm } from "./styles"
import * as Tabs from '@radix-ui/react-tabs'
import { CreditCard, DiamondsFour, Receipt } from "phosphor-react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

import { Input } from "../Input"
import { Button } from "../Button"

import qrCode from "../../assets/qrcode.svg"
import waitingIcon from "../../assets/waiting.svg"
import aprovedIcon from "../../assets/aproved.svg"
import deliveredIcon from "../../assets/delivered.svg"
import { api } from "../../services/api"
import { useAuth } from "../../hook/useAuth"
import { useNavigate } from "react-router-dom"

interface Details {
  id: string
  name: string
}

interface IRequests {
  id: string
  userId: string
  status: "PENDING" | "PREPARING" | "DELIVERED"
  createdAt: string
  detais: Details[]
}

export function BoxPayment() {
  const { filteredCartOfUser, cleanCartItems, cartItemsTotalPrice } = useAuth()

  const [numberCard, setNumberCard] = useState("")
  const [validity, setValidity] = useState("")
  const [CVC, setCVC] = useState("")
  const [waitting, setWaitting] = useState(false)
  const [pending, setPending] = useState(true)
  const [preparing, setPreparing] = useState(false)
  const [delivered, setDelivered] = useState(false)
  const [order, SetOrder] = useState<IRequests[]>([])

  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!numberCard || !validity || !CVC) {
      return toast.error("Preencha todos os campos do cartão!")
    }

    if (cartItemsTotalPrice === 0) {
      return toast.error("Adicione pelo menos um produto no carrinho.")
    }

    try {
      await api.post("/requests", {
        requests: filteredCartOfUser.map(cartItem => cartItem.name)
      })
      
      toast.success("Seu pedido será preparado e jaja estará chegando ai!")
      setWaitting(true)
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível realizar o pagamento.")
      }
    }
  }

  useEffect(() => {
    async function fetchOrder() {
      const response = await api.get('/requests/myrequests')
      
      SetOrder(response.data)
    }

    fetchOrder()
  }, [waitting])

  useEffect(() => {
    const lastOrderStatus = order?.at(-1)?.status
    const lastOrderCreatedAt = String(order?.at(-1)?.createdAt)

    const dateCartToString = String(filteredCartOfUser.at(-1)?.createdAt)

    if (Date.parse(dateCartToString) < Date.parse(lastOrderCreatedAt)) {
      if (lastOrderStatus === "PENDING") {
        setWaitting(true)
        setPending(true)
        setPreparing(false)
        setDelivered(false)
      }

      if (lastOrderStatus === "PREPARING") {
        setWaitting(true)
        setPending(false)
        setPreparing(true)
      }

      if (lastOrderStatus === "DELIVERED") {
        setWaitting(true)
        setPending(false)
        setPreparing(false)
        setDelivered(true)

        setTimeout(() => {
          setWaitting(false)
          cleanCartItems()
          navigate('/')
        }, 10000);
      }
    }
  }, [order])

  if (waitting) {
    return (
      <BoxPaymentContainer>
        <Tabs.Root className="TabsRoot" defaultValue="pix">
          <Tabs.List className="TabsList" aria-label="Manage your account">
            <Tabs.Trigger className="TabsTrigger" value="pix" data-state='inactive'>
              <DiamondsFour size={24} />
              Pix
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="creditCard" data-state='inactive'>
              <CreditCard />
              Crédito
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="waiting-delivered" forceMount value="">
            {pending &&
              <>
                <img src={waitingIcon} alt="" />
                <strong>Aguardando pagamento no caixa</strong>
              </>
            }
            {preparing &&
              <>
                <img src={aprovedIcon} alt="" />
                <strong>Pagamento aprovado!</strong>
              </>
            }
            {delivered &&
              <>
                <img src={deliveredIcon} alt="" />
                <strong>Pedido entregue!</strong>
              </>
            }
          </Tabs.Content>
        </Tabs.Root>
      </BoxPaymentContainer>
    )
  }

  return (
    <BoxPaymentContainer>
      <Tabs.Root className="TabsRoot" defaultValue="pix">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="pix">
            <DiamondsFour size={24} />
            Pix
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="creditCard">
            <CreditCard />
            Crédito
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="pix">
          <img src={qrCode} alt="" />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="creditCard">
          <OrderForm action="" onSubmit={handleSubmit} >
            <Input
              label="Número do Cartão"
              type="text"
              placeholder="0000 0000 0000 000"
              mask="9999 9999 9999 9999"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNumberCard(e.target.value)}
            />

            <div>
              <Input
                label="Validade"
                type="text"
                placeholder="12/24"
                mask="99/99"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValidity(e.target.value)}
              />
              <Input
                label="CVC"
                type="text"
                placeholder="123"
                maxLength={3}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCVC(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              title="Finalizar pagamento"
              icon={<Receipt size={32} />}
            />

            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </OrderForm>
        </Tabs.Content>
      </Tabs.Root>
    </BoxPaymentContainer>
  )
}