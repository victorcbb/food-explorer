import { CaretLeft } from "phosphor-react"

import { TextButtonContainer } from "./styles"

export function TextButton({ ...rest }) {
  return (
    <TextButtonContainer {...rest}>
      <CaretLeft weight="bold" size={window.innerWidth >= 500 ? 32 : 28} />
      voltar
    </TextButtonContainer>
  )
}