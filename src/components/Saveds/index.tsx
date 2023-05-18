import { useEffect, useState } from "react";
import { Card } from "../Cards";
import { TextWrapper, WrapperSavedsContant } from "./saveds.styled";
import { Player } from "@lottiefiles/react-lottie-player";
import empty from '../../assets/lotties/empty-file.json'

interface Item {
  category: "tecnologia" | "comida" | "roupas" | "geral";
  title: string;
  cod: string;
}

export function Saveds() {

  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    const valueText = localStorage.getItem('saved')

    if(valueText) {
      setData(JSON.parse(valueText))
    }

  }, [])

  return (
    <WrapperSavedsContant>
      <TextWrapper><span>Encomendas salvas:</span> <span>{data.length}</span></TextWrapper>
      {data.length > 0 ? data.map((item, index) => {
        return (
          <Card 
            key={index}
            tag={item.category}
            text={item.title}
            cod={item.cod}
            index={index}
            data={[data, setData]}
          />
        )
      }) : <Player src={empty} autoplay loop/>}
    </WrapperSavedsContant>
  )
}