import {  useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function useTanstack(url,key) {
    
 const {data,isLoading,refetch} = useQuery ({
        queryKey:[key],
        queryFn: async () =>{
            const data = await  axios.get(url,{withCredentials:true})
            return data.data;
        }
 })


 return {data,isLoading,refetch}
}