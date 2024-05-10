// import PropagateLoader from "react-spinners/PropagateLoader";

import Lottie from "lottie-react";
import loader from "./loader.json"

export default function Spinner() {
  return (
    <>
      <div className="flex item-center justify-center ">
      <div className="min-h-[93vh]  flex items-center justify-center" >
      {/* <PropagateLoader color="#66CCCC" />   */}
      <div className="max-w-sm" >
      <Lottie animationData={loader} />
      </div>
      </div>
      </div>
    </>
  )
}