import styled from "styled-components"

export const HeaderContainer = styled.header`
  grid-area: header;

  width: 100%;
  height: 6.5rem;

  padding: 0 3rem;
  background: ${({ theme }) => theme["Blue-900"]};

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1132px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.3125rem;

  > a:first-child {
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
      line-height: 1.8125rem;
      color: ${({ theme }) =>  theme.white}
    }
  };
`

export const SearchContent = styled.div`
  width: fit-content;
    
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a:first-child {
    color: ${({ theme }) => theme["gray-200"]};
    line-height: 160%;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const LogOut = styled.button`
  background: transparent;
  border: none;

  color: ${({ theme }) => theme.white};
  line-height: 0;

  cursor: pointer;
`