import { HeartStraight, Receipt, SignOut } from "phosphor-react"

import { Content, HeaderContainer, LogOut, SearchContent } from "./styles"
import { MyRequest } from "../MyRequest"
import { SearchInpit } from "../SearchInput"

import logoImage from '../../assets/logo.svg'
import { useAuth } from "../../hook/useAuth"
import { Link, useNavigate } from "react-router-dom"

export function Header() {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <HeaderContainer>
      <Content>
        <Link to="/">
          <img src={logoImage} alt="losangolo azul" />
          {window.innerWidth >= 500 && <strong>food explorer</strong>}
        </Link>

        <SearchContent>
          {
            user.role === "ADMIN" ?
              <Link to="/orderadmin">
                {
                  window.innerWidth >= 500 ?
                    "Todos pedidos" :
                    <Receipt size={28} />
                }
              </Link>
              :
              <Link to="#">
                {
                  window.innerWidth >= 500 ?
                    "Meus favorito" :
                    <HeartStraight size={28} />
                }
              </Link>

          }
          <SearchInpit />
          <MyRequest />
        </SearchContent>

        <LogOut onClick={handleSignOut}>
          <SignOut size={32} />
        </LogOut>
      </Content>
    </HeaderContainer>
  )
}