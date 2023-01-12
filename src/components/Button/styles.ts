import { HTMLProps } from "react"
import styled from "styled-components"

export const ButtonContainer = styled.button<HTMLProps<HTMLButtonElement>>`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme["red-500"]};
  padding-inline: .25rem;

  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;

  cursor: pointer;
  transition: all 0.15s;

  &:not(:disabled):hover {
    filter: brightness(140%);
  }

  &:not(:disabled):active {
    filter: brightness(40%);
  }

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(80%);
  }
`