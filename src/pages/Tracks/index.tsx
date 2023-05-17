import { InputSearch } from "../../components/Inputs";
import { Saveds } from "../../components/Saveds";
import { TrackContantWrapper } from "./tracks.styled";


export function Tracks() {
  return (
    <>
      <TrackContantWrapper>
        <div className="input">
          <h3>Rastrear Encomendas:</h3>
          <InputSearch />
        </div>
        <Saveds />
      </TrackContantWrapper>
    </>

  )
}