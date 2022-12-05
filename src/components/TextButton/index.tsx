import { CaretLeft } from "phosphor-react"

import { TextButtonContainer } from "./styles"

export function TextButton({ ...rest }) {
  return (
    <TextButtonContainer {...rest}>
      <CaretLeft weight="bold" size={32} />
      voltar
    </TextButtonContainer>
  )
}