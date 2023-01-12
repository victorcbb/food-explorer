import styled from "styled-components"

export const InputContainer = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: .5rem;

  
  input {
    padding: 1rem 0.875rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 5px;
    
    font-family: 'Roboto', sans-serif;
    line-height: 100%;
    color: ${({ theme }) => theme.white};
    
    &.error {
      border: 1px solid ${({ theme }) => theme["red-400"]};
    }
  }
`
