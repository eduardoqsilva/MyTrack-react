import { MapPin } from "@phosphor-icons/react";
import { ContantContainer, TimeLineWrapperCard } from "./timeLine.styled";
import { colors } from "../../styles/variables";

export function TimeLine() {
  return (
    <ContantContainer>
      <TimeLineWrapperCard>
        <h3 className="title">Seu pacote está em movimentação</h3>
        <div className="locate">
          <MapPin size={20} color={colors.blu} />
          <p>
            Unidade de Logística Integrada - CURITIBA/PR <br />
            Destino: Unidade de Tratamento - APARECIDA DE GOIANIA/GO
          </p>
        </div>
        <span className="date">11/05/12 • 12:37</span>
      </TimeLineWrapperCard>
    </ContantContainer>
  )
}