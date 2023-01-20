import styled from "styled-components"

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-inline: auto;
  padding-inline: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 3.125rem;
      height: 3.125rem;
    };

    h1 {
      font-size: 2.625rem;
      font-weight: bold;
      color: ${({ theme }) => theme.white};
    };
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    div {
      img {
        width: 2.5rem;
        height: 2.5rem;
      };

      h1 {
        font-size: 2.25rem;
        font-weight: bold;
        color: ${({ theme }) => theme.white};
      };
    }
  }
`

export const Form = styled.form`
  width: 29.75rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  padding: 4rem;

  background: ${({ theme }) => theme["Blue-900"]};
  border-radius: 16px;

  h2 {
    font-size: 2rem;
    font-weight: 500;

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.white};
  };

  a {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.white};
    font-weight: 500;
    font-size: 0.875rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 500px) {
    border-radius: 0;
  }
`