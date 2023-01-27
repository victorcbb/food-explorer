import { CaretLeft } from "phosphor-react"
import { useNavigate } from "react-router-dom"

import { TextButtonContainer } from "./styles"

export function TextButton({ ...rest }) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <TextButtonContainer {...rest} onClick={handleBack}>
      <CaretLeft weight="bold" size={window.innerWidth >= 500 ? 32 : 28} />
      voltar
    </TextButtonContainer>
  )
}