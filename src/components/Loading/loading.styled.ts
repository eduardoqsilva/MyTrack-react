import styled from "styled-components";
import { colors } from "../../styles/variables";

interface LoadingType {
  $load: boolean
}

export const ContainerLoadingStyled = styled.div<LoadingType>`
  width: 100vw;
  height: 100vh;

  display: ${(props) => props.$load ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray1};

  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;


  & .containerPlayer {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`