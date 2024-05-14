import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Features from "../../Components/Features/Features";

import useAuth from "../../useHooks/useAuth";



export default function Home() {
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
          <div className="mb-6   xl:mt-6">
            <Faq/>
          </div>

      
        
    </>
  )
}
