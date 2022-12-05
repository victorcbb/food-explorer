import styled from "styled-components"

export const EditDisheContainer = styled.div`
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

  width: 100%;
  max-width: 1132px;
  height: calc(100vh - 228px);

  margin: 0 auto;
  padding-block: 1.5rem;

  h1 {
    margin-top: 1.5rem;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2rem;
    line-height: 140%;
  }
`

export const Form = styled.form`
  width: 100%;

  > div {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }

  div:first-child {
    grid-template-columns: 14.3125rem 1fr;
  }

  div:nth-child(2) {
    grid-template-columns: 1fr 14.3125rem;
  }

  > label {
    display: inline-block;
    margin-top: 2rem;
    margin-bottom: .5rem;
  }

  textarea {
    width: 100%;
    height: 10.75rem;

    padding: 1rem 0.875rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 5px;
    
    font-family: 'Roboto', sans-serif;
    line-height: 100%;
    color: ${({ theme }) => theme.white};

    overflow-y: auto;
  }

  > input:last-child {
    width: 22.25rem;
    height: 3rem;

    margin-top: 1.5rem;
    margin-left: calc(100% - 22.25rem);

    background: ${({ theme }) => theme["white-opacity-10"]};
    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 5px;

    color: ${({ theme }) => theme.white};
    cursor: pointer;

    opacity: 0.8;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
      background: ${({ theme }) => theme["white-opacity-30"]};
      color: ${({ theme }) => theme["gray-100"]};
    }
  }
`
export const InputFile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  label {
    width: 100%;
    height: 3.25rem;

    display: flex;
    align-items: center;
    gap: .5rem;
    
    padding: 1rem 0.875rem;
    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 5px;
    background: transparent;
    
    cursor: pointer;

    input {
      display: none;
      font-family: 'Roboto', sans-serif;
      line-height: 100%;
      color: ${({ theme }) => theme.white};
    }
  }
`

export const Ingredients = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  font-family: 'Roboto', sans-serif;
  line-height: 100%;
  color: ${({ theme }) => theme.white};

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    padding: .5rem;
    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 5px;
    background: transparent;
  }
`