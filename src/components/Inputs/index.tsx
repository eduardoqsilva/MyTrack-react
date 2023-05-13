import { Package, MagnifyingGlass } from "@phosphor-icons/react";
import { WrapperInput } from "./inputs.styled";
import { colors } from "../../styles/variables";

export function InputSearch() {
  return (
    <WrapperInput>
      <Package size={28} color={colors.blu}/>
      <input type="text" 
        placeholder="Ex: NL847547040BR"
      />
      <button>
        <MagnifyingGlass size={22} color={colors.white}/>
      </button>
    </WrapperInput>
  )
}