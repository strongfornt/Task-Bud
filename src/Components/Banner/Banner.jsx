import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import 'swiper/css/navigation';
import "./styles.css";
import { Pagination, Autoplay, Navigation, Keyboard } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
// import slide1 from './../../assets/house/VacationRentals2.jpg'
export default function Banner() {
  return (
    <>
      <Swiper
      style={{"--swiper-navigation-color": "#2DD4BF",
      "--swiper-navigation-size": "35px", // Adjust navigation size
    
      }}
      
        navigation={{
      
          clickable: true,
        
         
        }}
        pagination={{
          clickable: true,
          bulletClass:"swiper-pagination-bullet",
        }}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        className=" w-full"
      >
        <SwiperSlide className="">
          <div className=" slide slide1  h-[100vh]  md:h-[94vh]    ">
            <div className="w-full bg-black/45   h-full flex items-center justify-center ">
              <div className="text-white space-y-4">
              <Fade direction="up" delay={200} triggerOnce={true} cascade={false} >
              <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
              Collaborate and 
                  <span className="text-teal-500"> Succeed Together!</span>
                </h1>
                <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center px-2 ">
                join forces with your friends in our online group study platform. Collaborate on assignments, share knowledge, and achieve academic success as a team
                </p>
              </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide2   h-[100vh] md:h-[94vh]        ">
            <div className="w-full bg-black/55   h-full flex items-center justify-center ">
            <div className="text-white space-y-4">
               <Fade direction="up" delay={200} cascade={false} triggerOnce={true} >
               <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
               Build Your 
                  <span className="text-teal-500"> Study Network</span>
                </h1>
                <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                Connect with your friends and classmates in our vibrant study community. Expand your network, share resources, and support each other's academic journey every step of the way.  
                </p>
               </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide3    h-[100vh]  md:h-[94vh]    ">
            <div className="w-full bg-black/55   h-full flex items-center justify-center ">
            <div className="text-white space-y-4">
               <Fade  direction="up" delay={200} cascade={false} triggerOnce={true} >
               <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
               Anywhere, Anytime
                  <span className="text-teal-500">  Learning!</span>
                </h1>
                <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                Access our platform anytime, anywhere, from any device. Study on the go, collaborate on assignments, and stay connected with your friends, no matter where you are. 
                </p>
               </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}