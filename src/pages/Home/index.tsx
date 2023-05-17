import { useEffect } from "react";
import { Loading } from "../../components/Loading";
import { TimeLine } from "../../components/TimeLine";
import { UseFetching } from "../../services/api/useFetch";
import { ContainerHome } from "./home.styled";
import { useParams } from "react-router-dom";

export function Home() {

  const num = useParams()
  const {data, isFetching} = UseFetching(num.cod)

  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <>
      <Loading load={isFetching}/>
      <ContainerHome>
        <TimeLine events={data?.data.events}/>
      </ContainerHome>
    </>
  )
}