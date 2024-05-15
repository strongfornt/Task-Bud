import {  useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function useTanstack(url,key) {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    
 const {data,isLoading,refetch} = useQuery ({
        queryKey:[key],
        queryFn: async () =>{
          try{
            const data = await  axios.get(url,{withCredentials:true})
            return data.data;
          }catch(err){
          
            if(err.response.status === 401 || err.response.status === 403){
                toast.error(err.response.data.message)
                
                await logOut()
                navigate('/login')
            }
            
          }
           
        }
 })


 return {data,isLoading,refetch}
}