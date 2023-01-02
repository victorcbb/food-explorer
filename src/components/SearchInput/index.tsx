import { MagnifyingGlass } from "phosphor-react"
import { ChangeEvent } from "react"
import { useAuth } from "../../hook/useAuth"

import { SearchInputContainer } from "./styles"

export function SearchInpit() {
  const { setSearch } = useAuth()

  return (
    <SearchInputContainer>
      <MagnifyingGlass size={24} />
      <input 
        placeholder="Busque pelas opções de pratos" 
        type="text" 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}  
      />
    </SearchInputContainer>
  )
}