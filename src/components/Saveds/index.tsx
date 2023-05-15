import { Card } from "../Cards";
import { TextWrapper, WrapperSavedsContant } from "./saveds.styled";

export function Saveds() {
  return (
    <WrapperSavedsContant>
      <TextWrapper><span>Encomendas salvas:</span> <span>4</span></TextWrapper>
      <Card 
        tag="tecnologia"
        text="Notebook samsung i5"
      />
      <Card 
        tag="roupas"
        text="Roupas shein casacos"
      />
      <Card 
        tag="comida"
        text="Chocolates cacau show"
      />
      <Card 
        tag="geral"
        text="Adesivos para o carro"
      />
    </WrapperSavedsContant>
  )
}