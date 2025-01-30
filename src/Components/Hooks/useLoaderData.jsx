import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useDataLoader = (endPoint,dep) => {
  const {data,isLoading,isError,error} =useQuery({
    queryKey :[dep],
    queryFn:async()=>{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}${endPoint}`)
        return res.data;
    }
  })

  return {data,isLoading,isError,error}
}

export default useDataLoader
