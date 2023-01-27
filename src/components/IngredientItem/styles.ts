import styled from "styled-components"

interface IProps {
  isNew: boolean
}

export const IngredientItemContainer = styled.div<IProps>`
  display: flex;
  align-items: center;

  padding: 0 1rem;

  background: ${({ theme, isNew }) => isNew ? "transparent" : theme["white-opacity-10"]};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme["gray-500"]}` : "none"};
  border-radius: 8px;

  input {
    height: 2rem;

    background: transparent;
    border: none;
    color: ${({ theme }) => theme.white};
  }

  button {
    line-height: 0;
    color: ${({ theme }) => theme.white};

    background: none;
    border: none;

    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 10rem;
  }
`