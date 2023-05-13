import { Laptop, Trash, TShirt, Hamburger, Package, IconContext } from "@phosphor-icons/react";
import { CardWrapper, IconWrapper } from "./cards.styled";
import { colors } from "../../styles/variables";


interface CardType {
  tag: 'tecnologia' | 'comida' | 'roupas' | 'geral'
  text: string
}
export function Card({ tag, text }: CardType) {

  const icon = () => {
    switch (tag) {
      case 'tecnologia':
        return <Laptop />
      case 'roupas':
        return <TShirt />
      case 'comida':
        return <Hamburger />
      case 'geral':
        return <Package />
    }
  }

  return (
    <CardWrapper tag={tag}>
      <IconWrapper tag={tag}>
        <IconContext.Provider
          value={{
            size: 28,
            color: colors.white,
            weight: 'regular'
          }}
        >
          {icon()}
        </IconContext.Provider>
      </IconWrapper>
      <p>{text}</p>
      <button><Trash size={28} /></button>
    </CardWrapper>
  )
}