import styled from "styled-components"
import { Link } from "react-router-dom"

export const MyRequestContainer = styled(Link)`
  width: 13.5rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  background: ${({ theme }) => theme["red-500"]};
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.15s;
  color: ${({ theme }) => theme.white};

  &:hover {
    filter: brightness(140%);
  }
`