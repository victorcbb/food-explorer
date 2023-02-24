import styled from "styled-components"

export const DetailsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 6.5rem 1fr 7.75rem;

  grid-template-areas: 
    "header"
    "main"
    "footer";

  @media (max-width: 500px) {
    grid-template-rows: 4rem 1fr 7.75rem;
  }
`

export const Content = styled.div`
  grid-area: main;

  width: 100%;
  max-width: 70.75rem;
  height: calc(100vh - 228px);

  margin: 0 auto;
  padding: 1.5rem 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 2.5rem;

    margin-top: 42px;

    > img {
      width: 24.375rem;
      height: 24.375rem;
    };
  }

  @media (max-width: 500px) {
    height: 100%;

    > div {
      flex-direction: column;
      gap: 1.5rem;
      
      > img {
        width: 20rem;
        height: 20rem;
      };
    }
  }
`

export const Infos = styled.div`
  width: 37.5rem;
  
  h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 140%;
  };

  > span {

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 140%;
    margin-top: .5rem;
  };

  > div {
    margin-top: 2rem;

    display: flex;
    align-items: flex-end;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    width: 100%;

    h1 {
      font-size: 1.75rem;
      text-align: center;
    };

    > span {
      display: inline-block;
      width: 100%;
      font-size: 1rem;
      text-align: center;
    };

    > div {
      margin-top: 1rem;
      gap: 1rem;
      justify-content: center;
    }
  }
`

export const Includes = styled.section`
  display: flex;
  align-items: center;
  gap: 3.25rem;

  margin-top: 2.75rem;

  > span {
    font-family: 'Roboto';
    font-size: 2rem;
    line-height: 160%;
    text-align: center;

    color: ${({ theme }) => theme["Blue-300"]};
  }

  > div {
    width: 13.75rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 500px) {
    justify-content: center;
    gap: 1rem;
    margin-top: 1.75rem;
  
    > span {
      width: 6.5rem;
      font-size: 1.5rem;
    }
  }
`