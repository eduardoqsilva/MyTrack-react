/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useEffect, useState } from "react"
import type { Response } from "./useFetchTypes"
import { useNavigate } from "react-router-dom"

const URL = import.meta.env.VITE_URL_API


export function UseFetching(params: string | undefined ) {

  const [data, setData] = useState<Response>()
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(params !== undefined) {
      setIsFetching(true)

      axios<Response>(URL + params)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.error(err)
        navigate('/')
      })
      .finally(() => {
        setIsFetching(false)
      })
    }

  }, [params])
  
  return {data, isFetching}
}

