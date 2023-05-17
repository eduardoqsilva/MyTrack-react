import { ContainerLoadingStyled } from "./loading.styled";
import { Player } from "@lottiefiles/react-lottie-player";


import paperPlaner from '../../assets/lotties/Paperplane.json'

interface LoadingType {
  load?: boolean
}


export function Loading({ load = false }:LoadingType) {
  return (
    <ContainerLoadingStyled $load={load} >
      <div className="containerPlayer">
        <Player src={paperPlaner} autoplay loop/>
      </div>
    </ContainerLoadingStyled>
  )
}