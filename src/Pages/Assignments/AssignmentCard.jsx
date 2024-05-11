import { AiFillFileMarkdown } from "react-icons/ai";
import { Link } from "react-router-dom";


import image from "./../../assets/banner/Physics.jpg"

import defaultProfile from "./../../assets/logo/deFaultProfile1.png"
import useAuth from "../../useHooks/useAuth";
export default function AssignmentCard() {
    const { theme,user } = useAuth();
  const { displayName,  photoURL } = user || {};
  return (
   <>
    <div className={`flex flex-col  p-3 space-y-3 overflow-hidden rounded-lg shadow-md ${theme==="light" ?'bg-gray-50':'border border-white/55'}`}>
          <div className=" flex justify-between w-full items-center ">
          <div className="flex  space-x-2 ">
            <img
              alt=""
              src={photoURL || defaultProfile}
              className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {displayName || "Anonymous"}
              </a>
              <span className={`text-xs ${theme ==="light" ?'text-gray-600':'text-white/70'}`}>Mar 11, 2024</span>
            </div>
           
          </div>
          <Link className={`underline ${theme ==="light" ? 'decoration-black/65':'decoration-white/65'}`}>View Details</Link>
          
          </div>
          
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-full rounded-md mb-2 h-48 lg:h-fit   "
            />
            <div className="flex justify-between" >
            <button
                type="button"
                className="flex items-center p-1 space-x-1.5  "
              >
             
                Level: <span className="text-sm" > Hard</span>
                
              </button>
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
               
               <AiFillFileMarkdown className={`${theme ==="light"?'':'text-white/70'}`} />
                <span className={`${theme ==="light"?'':'text-white/70'}`} >100</span>
              </button>
            </div>
            <h2 className="mb-1 text-xl font-medium">
              Nam cu platonem posidonium 
            </h2>
           
          </div>
          <div className="flex flex-wrap justify-between">
                <button className="px-2 py-[2px] bg-teal-500 text-white rounded-md hover:bg-teal-600 duration-300 font-medium" >Update</button>
                <button className="px-2 bg-red-500 text-white rounded-md hover:bg-red-600 duration-300 font-medium" >Delete</button>
          </div>
        </div>
   </>
  )
}
