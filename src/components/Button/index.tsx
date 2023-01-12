import { HTMLProps, ReactNode } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps {
  title: string
  icon?: ReactNode
  type: "button" | "submit"
  onClick?: () => void
  loading?: boolean
}

export function Button({ title, icon, loading=false, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} disabled={loading}>
      {icon}
      {title}
    </ButtonContainer>
  )
}