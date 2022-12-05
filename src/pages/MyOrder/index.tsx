import { BoxPayment } from "../../components/BoxPayment"
import { CartItem } from "../../components/CartItem"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Cart, Content, MyOrderContainer } from "./styles"

export function MyOrder() {
  return (
    <MyOrderContainer>
      <Header />
      <Content>
        <div>
          <h2>Meu Pedido</h2>
          <Cart>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Cart>
          <span>Total: R$ 103,88</span>
        </div>
        <div>
          <h2>Pagamento</h2>
          <BoxPayment />
        </div>
      </Content>
      <Footer />
    </MyOrderContainer>
  )
}