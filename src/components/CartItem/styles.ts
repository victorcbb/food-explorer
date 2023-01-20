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

  @media (max-width: 500px) {
    width: 22rem;
    gap: .75rem;
    padding-block: .625rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
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

  @media (max-width: 500px) {
    strong {
      font-size: 1rem;
    }

    span {
      margin-left: .375rem;
    }
  }
`
