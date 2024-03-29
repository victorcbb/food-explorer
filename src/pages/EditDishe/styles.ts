import styled from "styled-components"
import * as Select from '@radix-ui/react-select'

export const EditDisheContainer = styled.div`
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
export const Content = styled.main`
  grid-area: main;

  width: 100%;
  max-width: 70.75rem;
  min-height: calc(100vh - 11.25rem);

  margin: 0 auto;
  padding: 1.5rem 1rem;

  h1 {
    margin-top: 1.5rem;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2rem;
    line-height: 140%;
  }

  @media (max-width: 500px) {
    h1 {
      margin-top: 1rem;
      font-size: 1.625;
    }
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
    grid-template-columns: 14.3125rem 1fr 14.3125rem;
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
    };

    &:disabled:not(:hover) {
      cursor: not-allowed;
    }
  }

  @media (max-width: 500px) {
    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    /* div:first-child {
      grid-template-columns: 14.3125rem 1fr 14.3125rem;
    }

    div:nth-child(2) {
      grid-template-columns: 1fr 14.3125rem;
    } */
  }
`

export const InputFile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  label {
    overflow-y: hidden;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap:.5rem;
`

export const SelectInput = styled(Select.Root)`
  width: 100%;
`

export const SelectTrigger = styled(Select.Trigger)`  
  height: 3.25rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  font-size: .875rem;
  line-height: 160%;
  color: ${({ theme }) => theme["gray-300"]};
  
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 5px;
  padding: 0 1rem;
`

export const SelectContent = styled(Select.Content)`
  width: 14.3125rem;
  overflow: hidden;

  display: flex;
  align-items: flex-start;

  background-color: ${({ theme }) => theme["gray-900"]};
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 5px;
`

export const SelectItem = styled(Select.Item)`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: .875rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme["Blue-750"]};
  }
`

export const Ingredients = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  font-family: 'Roboto', sans-serif;
  line-height: 100%;
  color: ${({ theme }) => theme.white};

  > span {
    overflow-y: hidden;
  }

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