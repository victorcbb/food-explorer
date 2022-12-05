import { BoxPaymentContainer, OrderForm } from "./styles"
import * as Tabs from '@radix-ui/react-tabs'
import { CreditCard, DiamondsFour, Receipt } from "phosphor-react"

import { Input } from "../Input"
import { Button } from "../Button"

import qrCode from "../../assets/qrcode.svg"
import waitingIcon from "../../assets/waiting.svg"
import aprovedIcon from "../../assets/aproved.svg"
import deliveredIcon from "../../assets/delivered.svg"

export function BoxPayment() {
  let waiting = false
  let pending = true
  let preparing = false
  let delivered = false

  if (waiting) {
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
          <OrderForm action="">
            <Input
              label="Número do Cartão"
              type="text"
              placeholder="0000 0000 0000 000"
              mask="9999 9999 9999 9999"
            />

            <div>
              <Input
                label="Validade"
                type="text"
                placeholder="12/24"
                mask="99/99"
              />
              <Input
                label="CVC"
                type="text"
                placeholder="123"
                maxLength={3}
              />
            </div>

            <Button
              type="submit"
              title="Finalizar pagamento"
              icon={<Receipt size={32} />}
            />
          </OrderForm>
        </Tabs.Content>
      </Tabs.Root>
    </BoxPaymentContainer>
  )
}