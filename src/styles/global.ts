import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme["gray-200"]};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;    
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;    
  }

  a {
    text-decoration: none;
  }
`