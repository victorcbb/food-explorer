import { MagnifyingGlass } from "phosphor-react"

import { SearchInputContainer } from "./styles"

export function SearchInpit() {
  return (
    <SearchInputContainer>
      <MagnifyingGlass size={24} />
      <input placeholder="Busque pelas opções de pratos" type="text" />
    </SearchInputContainer>
  )
}