import styled from "styled-components"
import * as Select from '@radix-ui/react-select'

export const SelectInputContainer = styled(Select.Root)`
  overflow-y: hidden;

  width: 100%;
`

export const SelectTrigger = styled(Select.Trigger)`
  overflow-y: hidden;

  height: 3rem;
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

  span {
    overflow-y: hidden;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`

export const SelectValue = styled(Select.Value)`
`

export const SelectIcon = styled(Select.Icon)`
`

export const SelectPortal = styled(Select.Portal)`
`

export const SelectContent = styled(Select.Content)`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme["gray-900"]};
  border-radius: 5px;
`

export const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["gray-300"]};
  
  cursor: pointer;
`

export const SelectViewport = styled(Select.Viewport)`
`

export const SelectItem = styled(Select.Item)`
  display: flex;
  align-items: center;
  
  cursor: pointer;
`

export const SelectItemText = styled(Select.ItemText)`
  display: flex;
  align-items: center;
`
