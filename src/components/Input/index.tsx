import { InputContainer } from "./styles"
import InputMask from 'react-input-mask'
import { createRef, HTMLProps } from "react"
import { useFormContext } from "react-hook-form"

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string
  type: string
  placeholder: string
  mask?: string
  maxLength?: number
}

export function Input({
  label,
  placeholder,
  type,
  mask,
  maxLength,
  ...rest
}: InputProps) {

  return (
    <InputContainer>
      {label}
      <InputMask
        mask={mask}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        {...rest}
        ref={createRef()}
      />
    </InputContainer>
  )
}