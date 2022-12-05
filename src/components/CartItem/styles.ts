import styled from "styled-components";

export const CartItemContainer = styled.li`
  width: 25.25rem;

  display: flex;
  align-items: center;
  gap: .75rem;

  padding-block: 1rem;

  img {
    width: 4.5rem;
    height: 4.5rem;
  };

  & + li {
    margin-top: .25rem;
  }

  
  button {
    border: none;
    background: none;

    font-size: .75rem;
    line-height: 160%;
    color: ${({ theme }) => theme["red-300"]};

    cursor: pointer;
    transition: all .2s;

    &:hover {
    color: ${({ theme }) => theme["red-400"]};
    }
  }
`

export const InfosCart = styled.div`
  strong {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 160%;
  };

  span {
    font-size: .75rem;
    line-height: 160%;
    color: ${({ theme }) => theme["gray-300"]};

    margin-left: .625rem;
  };

`
