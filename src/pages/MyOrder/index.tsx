import { BoxPayment } from "../../components/BoxPayment"
import { CartItem } from "../../components/CartItem"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useAuth } from "../../hook/useAuth"
import { Cart, Content, MyOrderContainer } from "./styles"

export function MyOrder() {
  const { cartItemsTotalPrice, filteredCartOfUser } = useAuth()

  const totalPriceFormated = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cartItemsTotalPrice / 100)

  return (
    <MyOrderContainer>
      <Header />
      <Content>
        <div>
          <h2>Meu Pedido</h2>
          <Cart>
            {
              filteredCartOfUser &&
              filteredCartOfUser.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  id={cartItem.id}
                  name={cartItem.name}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                  image={cartItem.image}
                />
              ))
            }
          </Cart>
          <span>Total: {totalPriceFormated}</span>
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