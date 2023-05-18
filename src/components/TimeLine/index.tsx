import { useEffect } from "react";
import { MapPin } from "@phosphor-icons/react";
import { ContantContainer, TimeLineWrapperCard } from "./timeLine.styled";
import { colors } from "../../styles/variables";
import { Event } from "../../services/api/useFetchTypes";

interface TimeLine {
  events: Event[] | undefined
}

export function TimeLine({ events }: TimeLine) {

  useEffect(() => {
    // console.log(events?.reverse())
  }, [events])

  function formatDate(dateString: string) {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString().substr(-2);
    const hour = dateObj.getHours().toString().padStart(2, '0');
    const minute = dateObj.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} • ${hour}:${minute}`;
  }


  return (
    <ContantContainer>
      {events ? events.map((item, index) => {
        return (
          <TimeLineWrapperCard key={index}>
            <h3 className="title">{item.events}</h3>
            <div className="locate">
              <MapPin size={20} color={colors.blu} />
              <p>
                {item.local} {`${item.city ? ' - ' + item.city + '/' : ''}${item.uf ? item.uf : ''}`} <br />
                {item.destination_local ? `Destino: ${item.destination_local}` : ''}
                {item.destination_city ? ` - ${item.destination_city}` : ''}
              </p>
            </div>
            <span className="date">{formatDate(item.date)}</span>
          </TimeLineWrapperCard>
        )
      }).reverse() :
        <h2>Código de rastreio não compatível com MyTracker</h2>
      }
    </ContantContainer>
  )
}