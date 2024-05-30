import banner from "./../../../assets/Success/studyBg1.jpg"
import bg from "./../../../assets/Success/reviewBanner.jpg";
import TopReviewSlider from "./TopReviewSlider";

export default function SuccessStories() {
 
 
  // console.log((recipes?.length));
  

  return (
    <>
      <section className=" dark:text-gray-800" >
        <div className="container min-w-full flex flex-col relative justify-center  mx-auto  lg:flex-row lg:justify-between">
          <div
            className="flex items-center bg-center bg-cover justify-center absolute -translate-y-24 lg:-translate-y-0 lg:static -z-10   w-full   lg:mt-0 h-96 xl:h-112 2xl:h-128"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="h-full w-full bg-black/45 lg:bg-black/30">
              <div className=" flex  flex-col items-center h-full justify-start lg:justify-center gap-4">
               
               
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center h-96 xl:h-112 2xl:h-128     mt-44 lg:mt-0  z-10  text-center rounded-sm  bg-cover bg-center   w-full lg:text-left"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className=" h-full  bg-black/35 ">
              <div className="flex flex-col justify-center items-center  h-full">
                <h1 className="text-4xl text-center md:text-5xl font-bold leading-none text-white mb-6">
                User Testimonials
                </h1>
                <div className=" max-w-xs md:max-w-lg lg:max-w-md">
                  <TopReviewSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
