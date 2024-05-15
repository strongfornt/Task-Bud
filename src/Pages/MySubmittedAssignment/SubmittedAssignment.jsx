import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../useHooks/useAuth";
import SubmitCard from "./SubmitCard";
import useTanstack from "../../useHooks/useTanstack";
import { useEffect, useState } from "react";

import AssignmentSpinner from "../../Shared/Spinner/AssignmentSpinner";
import NotFound from "./NotFound";



export default function SubmittedAssignment() {
    const {theme,user} = useAuth()
    const [api,setApi] = useState(null);
    const {data,isLoading} = useTanstack(api,"submittedAssignment")
   
    useEffect(()=>{
        if(user?.email){
            setApi(`https://online-study-server-ten.vercel.app/submit/${user?.email}`)
        }
    },[user?.email])

   
    
  return (
   <>
         <Helmet>
        <title>TaskBud | My Submitted</title>
      </Helmet>

      <div
        className={`${
          theme === "light" && "bg-[#F7F7F7]"
        } pt-24 pb-12 space-y-3`}
      >
        <h1
          className={`text-center text-3xl  md:text-4xl font-semibold ${
            theme === "light" && "text-[#4b5664]"
          }`}
        >
          My Submitted
        </h1>
        <div className="flex gap-1 justify-center items-center w-fit mx-auto  relative  ">
          <Link to="/">
            <p className={`${theme === "light" ? "text-black/65" : ""}`}>
              Homepage
            </p>
          </Link>

          <p
            className={`text-sm ${
              theme === "light" ? "text-black/45" : "text-white/55"
            } flex items-center`}
          >
            {" "}
            <p>
              <MdKeyboardArrowRight />
            </p>{" "}
           My Submitted
          </p>
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]" > </span>
        </div>
      </div>
            {
                isLoading ? <AssignmentSpinner/> : data?.length ? <SubmitCard data={data} /> :<NotFound/>
            }
            
   </>
  )
}
