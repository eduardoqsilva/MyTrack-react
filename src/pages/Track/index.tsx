import { Loading } from "../../components/Loading";
import { TimeLine } from "../../components/TimeLine";
import { UseFetching } from "../../services/api/useFetch";
import { ContainerHome } from "./home.styled";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { ButtonShare } from "../../components/ShareButton";


export function Track() {

  const num = useParams()
  const { data, isFetching } = UseFetching(num.cod)


  return (
    <>
      <Loading load={isFetching} />
      <ContainerHome>
        <Header cod={num.cod} transport={'Correios'} />
        <TimeLine events={data?.eventos} />
      </ContainerHome>
      <ButtonShare />
    </>
  )
}