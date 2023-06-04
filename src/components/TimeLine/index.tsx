import React, { useEffect } from "react";
import { MapPin } from "@phosphor-icons/react";
import { ContantContainer, TimeLineWrapperCard } from "./timeLine.styled";
import { colors } from "../../styles/variables";

interface TimeLine {
  events: {
    data: string;
    hora: string;
    local: string;
    status: string;
    subStatus: string[];
  }[] | undefined
}

export function TimeLine({ events }: TimeLine) {

  useEffect(() => {
    // console.log(events?.reverse())
  }, [events])

  return (
    <ContantContainer>
      {events ? events.map((item, index) => {
        return (
          <TimeLineWrapperCard key={index}>
            <h3 className="title">{item.local}</h3>
            <p>{item.status}</p>
            <div className="locate">
              <MapPin size={20} color={colors.blu} />
              <p>
                {item.subStatus.map((i, index) => {
                  if(!i.includes('span')) {
                    return (
                      <React.Fragment key={index + i}>{i}<br/></React.Fragment>
                    )
                  } else {
                    return( 
                      <React.Fragment key={index + i}>Saiba mais em <a href="https://rastreamento.correios.com.br/" target="_blank">minhas importações</a></React.Fragment>
                    )
                  }
                })}
              </p>
            </div>
            <span className="date">{`${item.data} • ${item.hora}`}</span>
          </TimeLineWrapperCard>
        )
      }):
        <h2>Código de rastreio não compatível com MyTracker</h2>
      }
    </ContantContainer>
  )
}