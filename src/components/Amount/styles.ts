import styled from "styled-components"

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;

    line-height: 0;
    color: ${({ theme }) => theme.white};
    
    cursor: pointer;
  };

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${({ theme }) => theme["gray-200"]};
  }
`