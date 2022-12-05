import styled from "styled-components"

export const TextButtonContainer = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 140%;
  color: ${({ theme }) => theme["gray-200"]};

  cursor: pointer;
`