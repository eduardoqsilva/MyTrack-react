import { ContainerLoadingStyled } from "./loading.styled";
import { Player } from "@lottiefiles/react-lottie-player";


import paperPlaner from '../../assets/lotties/Paperplane.json'
import { useEffect } from "react";

interface LoadingType {
  load?: boolean
}


export function Loading({ load = false }:LoadingType) {

  useEffect(() => {
    if(load) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 20)
      document.body.style.overflowY = 'hidden'
    }else {
      document.body.style.overflowY = ''
    }
  }, [load])

  return (
    <ContainerLoadingStyled $load={load} >
      <div className="containerPlayer">
        <Player src={paperPlaner} autoplay loop/>
      </div>
    </ContainerLoadingStyled>
  )
}