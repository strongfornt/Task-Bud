import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Features from "../../Components/Features/Features";



export default function Home() {
  return (
    <>
     <Helmet>
    <title>
    TaskBud | Home
    </title>
    </Helmet>
      {/* banner start */}
          <div>
        <Banner/>
          </div>
          <div>
            <Features/>
          </div>
          <div className="mb-6   xl:mt-6">
            <Faq/>
          </div>

          {/* <div>
            <Spinner/>
          </div> */}
    </>
  )
}
