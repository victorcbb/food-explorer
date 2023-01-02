import styled from "styled-components"

export const MyOrderContainer = styled.div`
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

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  max-width: 70.75rem;
  height: calc(100vh - 14.25rem);

  margin: 0 auto;
  padding-top: 2.125rem;

  h2 {
    margin-bottom: 2rem;
  }
  
  > div {


    > span {
      width: 27.75rem;
      display: block;
      padding-top: 1rem;
      
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 160%;
    }
  }
  `

export const Cart = styled.ul`
  list-style: none;

  width: 27.75rem;
  height: 26.75rem;
  overflow-y: auto;
  overflow-x: hidden;
  
`