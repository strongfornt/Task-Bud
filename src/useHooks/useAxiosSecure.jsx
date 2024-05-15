import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://online-study-server-ten.vercel.app',
    withCredentials:true
})
export default function useAxiosSecure() {
   

    return axiosSecure;
}
