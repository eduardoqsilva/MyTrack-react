import { Package, MagnifyingGlass } from "@phosphor-icons/react";
import { FormStyled, WrapperInput } from "./inputs.styled";
import { colors } from "../../styles/variables";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function InputSearch() {

  const [value, setValue] = useState('')
  const navigate = useNavigate()

  function HandleOnSubmit(e:FormEvent) {
    e.preventDefault()
    if(value.length >= 10 ) {
      navigate(`/home/${value}`)
    }
  }

  return (
    <FormStyled onSubmit={HandleOnSubmit}>
      <WrapperInput>
        <Package size={28} color={colors.blu}/>
        <input type="text"
          placeholder="Ex: NL847547040BR"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button type="submit">
          <MagnifyingGlass size={22} color={colors.white}/>
        </button>
      </WrapperInput>
    </FormStyled>
  )
}