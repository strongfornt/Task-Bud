import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export default function TopReviewSlider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        keyboard={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[Pagination, Autoplay, Keyboard]}
        className="w-full"
      >
        <SwiperSlide className="">
          <div className="flex   flex-col sm:items-center sm:justify-center  lg:justify-start">
            <div className=" flex flex-col justify-center items-center gap-1 mb-3">
              <h1 className="text-2xl font-bold text-white">
              Achieving Better Grades
              </h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 text-base mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <div className="mb-2   flex items-center">
              <p className="text-white text-xs text-center  max-w-screen-sm ">
              TaskBud has completely changed my study habits. The collaborative environment and the ability to get feedback from my friends have been game-changers. My grades have never been better!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-base text-white font-semibold">
                Ahsan Ullah
              </h1>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://lh3.googleusercontent.com/a/ACg8ocLeOiZZmyCNk0XEGrOfOTx0oEgCqrtAvyml-8dcu46b1Lkr8P0s=s96-c" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex   flex-col sm:items-center sm:justify-center  lg:justify-start">
            <div className=" flex flex-col justify-center items-center gap-1 mb-3">
              <h1 className="text-2xl font-bold text-white">Collaborative Success</h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 text-base mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-white text-xs text-center max-w-screen-sm">
              Thanks to TaskBud, studying has become a collaborative and fun experience. I love how easy it is to track my progress and stay on top of my assignments. It’s like having a virtual study group with me all the time.
                
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-base text-white font-semibold">
                Halil pasha
              </h1>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://i.postimg.cc/XY81wR9N/profile-Three.jpg" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col -800  sm:items-center sm:justify-center  lg:justify-start">
            <div className=" flex flex-col justify-center items-center gap-1 mb-3">
              <h1 className="text-2xl font-bold text-white">Academic Growth</h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 text-base mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-white text-xs text-center max-w-screen-sm">
              TaskBud has been an invaluable resource during my first year of college. The structured environment and supportive community have made a huge difference in my academic life.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-base text-white font-semibold">
                Bali Bey
              </h1>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://i.postimg.cc/2y5GzyVP/profile-Two.jpg" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}