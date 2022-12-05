import { InputContainer } from "./styles"
import InputMask from 'react-input-mask'

interface InputProps {
  label: string
  type: string
  placeholder: string
  mask?: string
  maxLength?: number
}

export function Input({ label, placeholder, type, mask, maxLength }: InputProps) {
  return (
    <InputContainer>
      {label}
      <InputMask mask={mask} type={type} placeholder={placeholder} maxLength={maxLength} />
    </InputContainer>
  )
}