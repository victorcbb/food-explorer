import { Content, FooterContainer } from "./styles"

import logoImage from '../../assets/logo-gray.svg'

export function Footer() {
  return (
    <FooterContainer>
      <Content>
        <div>
          <img src={logoImage} alt="losangolo azul" />
          <strong>food explorer</strong>
        </div>

        <span>© 2022 - Todos os direitos reservados.</span>
      </Content>
    </FooterContainer>
  )
}