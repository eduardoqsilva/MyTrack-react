import { ShareNetwork } from "@phosphor-icons/react";
import { ButtonShareStyled } from "./buttonShare.styled";
import { colors } from "../../styles/variables";
import { useLocation } from "react-router-dom";

export function ButtonShare() {

  const location = useLocation()

  function share() {
    if (navigator.share !== undefined) {
      navigator.share({
        title: 'My Tracks\n',
        text: 'Veja o rastreio da encomenda!',
        url: location.search,
      })
        .then(() => console.log('Successful share: ' + location.search))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  return (
    <ButtonShareStyled onClick={share}>
      <ShareNetwork
        size={28}
        color={colors.blu}
        weight="regular"
      />
    </ButtonShareStyled>
  )
}