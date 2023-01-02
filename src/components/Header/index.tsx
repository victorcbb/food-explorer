import { SignOut } from "phosphor-react"

import { Content, HeaderContainer, LogOut, SearchContent } from "./styles"
import { MyRequest } from "../MyRequest"
import { SearchInpit } from "../SearchInput"

import logoImage from '../../assets/logo.svg'
import { useAuth } from "../../hook/useAuth"
import { Link, useNavigate } from "react-router-dom"

export function Header() {
  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <HeaderContainer>
      <Content>
        <Link to ="/">
          <img src={logoImage} alt="losangolo azul" />
          <strong>food explorer</strong>
        </Link>

        <SearchContent>
          <Link to="#">Meus favorito</Link>
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