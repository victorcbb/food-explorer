import { Plus, X } from "phosphor-react"
import { ChangeEvent, MouseEventHandler } from "react"
import { IngredientItemContainer } from "./styles"

interface IngredientItemProps {
  isNew: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  value: string
  onChange?: (e: ChangeEvent<any>) => void
}

export function IngredientItem({ 
  isNew, onChange, onClick, value, ...rest 
}: IngredientItemProps) {
  return (
    <IngredientItemContainer isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder="Adicionar"
        onChange={onChange}
        size={12}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <Plus size={20} /> : <X size={20} />}
      </button>
    </IngredientItemContainer>
  )
}