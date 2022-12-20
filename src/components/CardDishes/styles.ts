import styled from "styled-components";

export const CardDishesContainer = styled.div`
  width: 18.75rem;
  height: 32rem;
  
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;
  
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  > svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
  
      color: ${({ theme }) => theme["gray-400"]};
      cursor: pointer;
    };

  a {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    cursor: pointer;

    > img {
      width: 11rem;
      height: 11rem;
    };
  
    > strong {
      font-family: 'Poppins';
      font-size: 1.5rem;
      line-height: 140%;
      color: ${({ theme }) => theme["gray-200"]};
    }
  
    > p {
      width: 13.75rem;
      font-family: 'Roboto';
      font-size: .875rem;
      line-height: 160%;
      text-align: center;
      color: ${({ theme }) => theme["gray-300"]};
    };
  
    > span {
      font-family: 'Roboto';
      font-size: 2rem;
      line-height: 160%;
      text-align: center;
  
      color: ${({ theme }) => theme["Blue-300"]};
    };
  }

  div {
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`