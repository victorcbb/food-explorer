import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-area: footer;

  width: 100%;
  height: 7.75rem;

  padding: 0 3rem;
  background: ${({ theme }) => theme["Blue-900"]};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 70.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: fit-content;


    display: flex;
    align-items: center;
    gap: .625rem;

    img {
      width: 1.825rem;
      height: 1.825rem;
    };

    strong {
      font-weight: 700;
      font-size: 1.5625rem;
      line-height: 1;
      color: ${({ theme }) => theme["white-opacity-30"]};
    };
  };

  span {
    font-family: 'DM Sans';
    font-size: .875rem;
    line-height: 1.125rem;
    color: ${({ theme }) => theme["gray-100"]}
  }
`