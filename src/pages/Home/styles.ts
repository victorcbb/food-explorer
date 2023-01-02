import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 6.5rem 1fr 7.75rem;

  grid-template-areas: 
  "header"
  "main"
  "footer";
`

export const Content = styled.main`
  grid-area: main;

  width: 70.75rem;
  min-height: 100vh;

  margin: 0 auto 6.125rem;

  h2 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2rem;
    line-height: 140%;
  }

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    margin: 2rem auto 0;
    color: ${({ theme }) => theme["Blue-750"]};

    transition: 0.5s all;

    &:hover {
      color: ${({ theme }) => theme["Blue-500"]};
    }
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 16.25rem;

  margin: 10.25rem 0 3.875rem;
  
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: linear-gradient(
    180deg, 
    ${({ theme }) => theme["Blue-750"]} 0%, 
    ${({ theme }) => theme["Blue-850"]} 100%
  );
  border-radius: 8px;

  img {
    position: absolute;
    left: -3.25rem;
    bottom: 0;
    z-index: 10;
  };

  div {
    padding-right: 2.875rem;

    h1 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 140%;
    };

    p {
      font-family: 'Poppins';
      line-height: 140%;
      margin-top: .5rem;
    }
  }
`
