import { Laptop, Trash, TShirt, Hamburger, Package, IconContext } from "@phosphor-icons/react";
import { CardWrapper, IconWrapper } from "./cards.styled";
import { colors } from "../../styles/variables";
import { useNavigate } from "react-router-dom";


interface CardType {
  tag: 'tecnologia' | 'comida' | 'roupas' | 'geral'
  text: string
  cod: string
  index: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: [object[], (value:any) => void]
}
export function Card({ tag, text, cod, index, data }: CardType) {

  const navigator = useNavigate()
  const [dat, setData] = data

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

  function handleOnClick() {
    const newDate = [...dat]
    newDate.splice(index, 1)
    console.log(newDate)
    localStorage.setItem('saved', JSON.stringify(newDate))
    setData(newDate)
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
      <p onClick={() => navigator(`/home/${cod}`)}>
        {text}
      </p>
      <button onClick={handleOnClick}>
        <Trash size={28} />
      </button>
    </CardWrapper>
  )
}