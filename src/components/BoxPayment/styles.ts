import styled from "styled-components"

export const BoxPaymentContainer = styled.div`
  width: 33.125rem;

  .TabsRoot {
    display: flex;
    flex-direction: column;
    width: 100%;
  };

  .TabsList {
    flex-shrink: 0;
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme["white-opacity-10"]};
  }

  .TabsTrigger {
    height: 5.125rem;
    flex: 1;
    
    background-color: ${({ theme }) => theme["gray-900"]};
    border: 1px solid ${({ theme }) => theme["white-opacity-10"]};
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    
    line-height: 1;
    color: ${({ theme }) => theme.white};
    
    user-select: none;
  }

  .TabsTrigger:first-child {
    border-top-left-radius: 8px;
  }

  .TabsTrigger[data-state='active'] {
    background: ${({ theme }) => theme["white-opacity-05"]};
    border: 1px solid ${({ theme }) => theme["white-opacity-30"]};
  }

  .TabsContent {
    overflow-y: hidden;

    height: 22.75rem;

    flex-grow: 1;
    background-color: ${({ theme }) => theme["gray-900"]};
    border: 1px solid ${({ theme }) => theme["white-opacity-10"]};
    padding-top: 2.9375rem;

    outline: none;

    img {
      display: block;
      margin-inline: auto;
    }
  }

  .waiting-delivered {
    height: 22.75rem;

    flex-grow: 1;
    background-color: ${({ theme }) => theme["gray-900"]};
    border: 1px solid ${({ theme }) => theme["white-opacity-10"]};

    outline: none;
    
    color: ${({ theme }) => theme["white-opacity-30"]};
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  @media (max-width: 500px) {
    width: 100%;

    .TabsTrigger {
      height: 4rem;
    }

    .TabsContent {
      height: 20rem;
      padding-top: 1.5rem;

      img {
        display: block;
        margin-inline: auto;
      }
    }

    .waiting-delivered {
      height: 20rem;
      gap: 2.5rem;
      font-size: 1.125rem;
    }

  }
`

export const OrderForm = styled.form`
  width: 21.75rem;

  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  justify-content: flex-start;

  > div {
    width: 21.75rem;

    display: flex;
    gap: 1rem;

    input {
      width: 10.375rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0 1rem;

    gap: 1.75rem;

    > div {
      gap: 0.5rem;

      input {
        width: 9rem;
      }
    }
  }
`