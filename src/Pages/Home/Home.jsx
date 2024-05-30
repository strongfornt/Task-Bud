import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Features from "../../Components/Features/Features";

import useAuth from "../../useHooks/useAuth";
import SuccessStories from "./SuccessStories/SuccessStories";
import { Fade } from "react-awesome-reveal";




export default function Home() {
  const {theme} = useAuth()



 
  const{setDropdown,setMenu} = useAuth()
  return (
    <>
     <Helmet>
    <title>
    TaskBud | Home
    </title>
    </Helmet>
      {/* banner start */}
          <div onClick={()=>{
            setDropdown(false)
            setMenu(false)
          }} >
        <Banner/>
          </div>
          <div>
            <Features/>
          </div>

          <div  className="mt-16 ">
      <Fade triggerOnce={true} direction="up" duration={1000} cascade={false} >
      <h2
              className={`text-2xl font-bold ml-2 mb-4 sm:text-3xl ${
                theme === "light" && "text-[#4b5664]"
              }`}
            >
              Success{" "}
              <span className="underline decoration-teal-400 ">Stories</span>
            </h2>
        <p
          className={`text-sm text-start px-2 mb-8 max-w-screen-sm  ${
            theme === "light" ? "text-[#4b5664]" : "text-white"
          }`}
        >
           Discover how TaskBud is transforming the way students study and collaborate. Read about real-life success stories from our users who have experienced remarkable academic improvement  through TaskBud.

        </p>
      </Fade>
        <SuccessStories/>
      </div>


          <div className="mb-6   xl:mt-6">
            <Faq/>
          </div>

          
     
       
        
    </>
  )
}
