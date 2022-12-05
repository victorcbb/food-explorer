import { SignOut } from "phosphor-react"

import { Content, HeaderContainer, LogOut, SearchContent } from "./styles"
import { MyRequest } from "../MyRequest"
import { SearchInpit } from "../SearchInput"

import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <div>
          <img src={logoImage} alt="losangolo azul" />
          <strong>food explorer</strong>
        </div>

        <SearchContent>
          <a href="#">Meus favorito</a>
          <SearchInpit />
          <MyRequest />
        </SearchContent>

        <LogOut>
          <SignOut size={32} />
        </LogOut>
      </Content>
    </HeaderContainer>
  )
}