import styled from "styled-components"

export const DetailsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 6.5rem 1fr 7.75rem;

  grid-template-areas: 
    "header"
    "main"
    "footer";
`

export const Content = styled.div`
  grid-area: main;

  width: 100%;
  max-width: 1132px;
  height: calc(100vh - 228px);

  margin: 0 auto;
  padding-block: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 40px;

    margin-top: 42px;

    > img {
      width: 390px;
      height: 390px;
    };
  }
`

export const Infos = styled.div`
  h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
  };

  p {
    width: 37.5rem;

    font-family: 'Poppins';
    font-size: 24px;
    line-height: 140%;
    margin-top: 8px;
  };

  > div {
    margin-top: 32px;

    display: flex;
    align-items: center;
    gap: 16px;
  }
`

export const Includes = styled.section`
  display: flex;
  align-items: center;
  gap: 3.25rem;

  margin-top: 2.75rem;

  span {
    font-family: 'Roboto';
    font-size: 32px;
    line-height: 160%;
    text-align: center;

    color: ${({ theme }) => theme["Blue-300"]};
  }

  div {
    width: 13.75rem;

    display: flex;
    align-items: center;
    gap: 24px;
  }
`