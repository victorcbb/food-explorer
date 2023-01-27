import styled from "styled-components"

export const OrderAdminContainer = styled.div`
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
  padding: 2.125rem 1rem 0;

  @media (max-width: 500px) {
    padding: 1.5rem 1rem 0;
    
    h1 {
      font-size: 1.625rem;
    }
  }
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

  @media (max-width: 500px) {
    overflow-x: auto;

    table {
      width: 50rem;
      thead {
        tr {
          th {
            padding: 0.5rem 1.5rem;

            &:nth-child(3) {
              width: 20rem;
            }
          }
        }
      };
      
      tbody {
        tr {
          td {
            height: 5rem;
            border: 2px solid ${({ theme }) => theme["gray-800"]};
            padding-inline: 1.5rem;
    
            &:nth-child(3) {
              width: 20rem;
            };

            &:last-child {
              width: 10rem;
            }
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
