import styled from "styled-components"

export const SearchInputContainer = styled.div`
  width: 25.625rem;
  height: 3rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme["Blue-800"]};
  border-radius: 5px;

  svg {
    color: ${({ theme }) => theme["gray-300"]}
  };

  input {
    width: 100%;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme["gray-300"]};
    font-family: 'Roboto', sans-serif;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]}
    }
  }
`