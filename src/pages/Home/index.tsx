import { useEffect, useState } from "react";
import { InputSearch } from "../../components/Inputs";
import { Loading } from "../../components/Loading";
import { Saveds } from "../../components/Saveds";
import { TrackContantWrapper } from "./tracks.styled";


export function Home() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => {
      setLoad(false)
    }, 1500)

    return () => clearTimeout(time)
  },[])

  return (
    <>
      <TrackContantWrapper>
        <div className="input">
          <h3>Rastrear Encomendas:</h3>
          <InputSearch />
        </div>
        <Saveds />
      </TrackContantWrapper>
      <Loading load={load}/>
    </>

  )
}