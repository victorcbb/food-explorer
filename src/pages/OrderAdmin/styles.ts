import styled from "styled-components"

export const OrderAdminContainer = styled.div`
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
  max-width: 70.75rem;
  height: calc(100vh - 14.25rem);

  margin: 0 auto;
  padding-top: 2.125rem;
`

export const TableWrapper = styled.div`
  margin-top: 2.125rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme["gray-800"]};
  border-radius: 8px 8px 0 0;
  border-bottom: none;

  table {
    width: 100%;
  
    border-collapse: collapse;
    
    thead {
      font-size: .875rem;
      line-height: 160%;
      tr {
        th {
          text-align: start;
          border-radius: 8px 0 0 0;
          
          padding: 1.3125rem 1.5rem;
          border: 2px solid ${({ theme }) => theme["gray-800"]};
          border-top: none;
          
          &:first-child {
            border-left: none;
          }

          &:last-child {
            border-right: none;
          }
        }
      }
    }
  
    tbody {
      font-size: .875rem;
      line-height: 160%;
      color: ${({ theme }) => theme["gray-300"]};

      tr {
        td {
          text-align: start;
  
          height: 5rem;
          border: 2px solid ${({ theme }) => theme["gray-800"]};
          padding-inline: 1.5rem;
  
          &:first-child {
          width: 13.9375rem;
          border-left: none;
          
          };

          &:last-child {
            border-right: none;
          }
        }
      }
    }
  }
`

export const Select = styled.select`
    padding: .8125rem 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 5px;
    
    font-family: 'Roboto', sans-serif;
    line-height: 100%;
    color: ${({ theme }) => theme.white};

  option {
    display: flex;          
    gap: 0.5em;           
    align-items: center;
  }
`

interface IProps {
  variant: "red" | "yellow" | "green"
}

export const Dot = styled.span<IProps>`
 font-size: 1.5rem;

${({ theme, variant }) => {
    switch (variant) {
      case "red":
        return `
        color: ${theme["red-400"]}
      `
      case "yellow":
        return `
        color: ${theme.yellow}
      `
      case "green":
        return `
        color: ${theme.green}
      `
    }
  }
  }
`
