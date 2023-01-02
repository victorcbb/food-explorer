import { ReactNode } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps {
  title: string
  icon?: ReactNode
  type: "button" | "submit"
  onClick?: () => void
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {icon}
      {title}
    </ButtonContainer>
  )
}