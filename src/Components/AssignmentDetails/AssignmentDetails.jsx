import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../useHooks/useAuth";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { calculateScrollbarWidth } from "../../Shared/Navbar/ScrollBar";
import toast from "react-hot-toast";
import axios from "axios";


export default function AssignmentDetails() {
  const { theme,user } = useAuth();
  const [modal,setModal] = useState(false)
  const data = useLoaderData();
const {  title, image, difficulty, marks, date, description } =
    data || {};
   const {email,displayName} = user || {}
  useEffect(() => {
    if (modal) {
      const scrollbarWidth = calculateScrollbarWidth();

      document.body.style.paddingRight = `${scrollbarWidth}px`;

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0";

      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const handleSubmit = (e) =>{
    e.preventDefault()
    // if(email === creator?.email){
    //     toast.error("You can't submit your own assignment.")
    //     return
    // }
    const form = e.target;
    const pdf = form.pdf.value;
    const note = form.note.value;
    const AssignmentSubmit ={
        pdf,
        note,
        title,
        status:"pending",
        marks,
        examinee:{
            email,
           name:displayName
        }
    }
        axios.post('http://localhost:5000/submit',AssignmentSubmit)
        .then((res)=>{
            const data = res.data;
            if (data.insertedId) {
                toast.success("Assignment submitted successfully!")
                form.reset();
                setModal(false)
              }
        })
        .catch(()=>{
            toast.error("Failed to submit assignment. Try again later.")
        })
  }

  return (
    <>
      <Helmet>
        <title>TaskBud | AssignmentDetails</title>
      </Helmet>

      <div
        className={`${
          theme === "light" && "bg-[#F7F7F7]"
        } pt-20 pb-6 space-y-1 `}
      >
        <h1
          className={`text-center text-xl  md:text-2xl font-semibold ${
            theme === "light" && "text-[#4b5664]"
          }`}
        >
          AssignmentDetails
        </h1>

        <div className="flex gap-1 justify-center items-center w-fit mx-auto  relative  ">
          <Link to="/">
            <p
              className={` ${
                theme === "light" ? "text-black/45" : "text-white/55"
              }`}
            >
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
            Assignments
          </p>
          <p
            className={`text-sm ${
              theme === "light" ? "text-black/75" : ""
            } flex items-center`}
          >
            {" "}
            <p>
              <MdKeyboardArrowRight />
            </p>{" "}
            AssignmentDetails
          </p>
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]">
            {" "}
          </span>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="1000 "
        data-aos-duration="1000"
        className="px-4 md:px-8 lg:px-10"
      >
        <section className="  ">
          <div className="container flex flex-col-reverse justify-center  my-6 md:my-8  mx-auto  lg:mt-8 lg:mb-16 lg:flex-row-reverse lg:justify-between xl:justify-evenly ">
            <div className="flex flex-col justify-center text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <div className="">
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="1200 "
                  data-aos-duration="1200"
                  className={`text-2xl font-bold leading-none sm:text-3xl ${
                    theme === "light" ? "text-[#383737] " : "text-white"
                  }`}
                >
                  {title}
                </h1>
                <p
                  data-aos="zoom-in-right"
                  data-aos-delay="1400 "
                  data-aos-duration="1400"
                  className="flex items-center gap-1 mt-1 "
                >
                  {/* <CiCalendarDate className="text-2xl" /> */}
                  <span
                    className={`text-base ${
                      theme === "light" ? "text-[#383737] " : "text-white"
                    }`}
                  >
                    {date}
                  </span>
                </p>
              </div>

              {/* rent and price */}

              <div className="space-x-4 mt-4 sm:space-x-6 my-2 ">
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="1600 "
                  data-aos-duration="1600"
                  className="px-4 py-1 bg-info rounded-md text-white font-semibold"
                >
                  Difficulty -{" "}
                  <span className="text-sm text-gray-100">{difficulty}</span>
                </button>
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="2000 "
                  data-aos-duration="2000"
                  className="px-4 py-1 bg-error rounded-md  text-white font-semibold"
                >
                  Mark - {marks}
                </button>
              </div>
              <div></div>
              <p
                data-aos="zoom-in-right"
                data-aos-delay="2200 "
                data-aos-duration="2200"
                className="mt-1 mb-3 text-base text-[#968f8f] sm:mb-3  "
              >
                <span
                  className={`text-lg font-semibold ${
                    theme === "light" ? "text-[#383737] " : "text-white"
                  }`}
                >
                  Description
                </span>{" "}
                - {description}
              </p>
              <div className="mt-3">
                <button
                  onClick={() =>
                   setModal(!modal)
                  }
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 duration-300 font-medium"
                >
                  Take assignment
                </button>

                {
                    modal &&    <div className="relative flex z-50 justify-center">
                   

                    <div
                      className="fixed inset-0  overflow-y-auto"
                      aria-labelledby="modal-title"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>

                        <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform border   shadow-xl sm:max-w-sm rounded-xl bg-gray-900 sm:my-8 sm:w-full sm:p-6">
                          <div className="flex items-center justify-center mx-auto">
                            <img
                              className="h-full rounded-lg"
                              src={image}
                              alt=""
                            />
                          </div>

                          <div className="mt-2 mb-4 text-center">
                            <h3
                              className="text-lg font-medium text-gray-800 dark:text-white"
                              id="modal-title"
                            >
                              {title}
                            </h3>
                          </div>

                         <form onSubmit={ handleSubmit}>
                          <div className="w-full space-y-2">
                          <div>
                            <input
                              type="text"
                              name="pdf"
                              required
                              placeholder="Embed PDF link"
                              className="flex-1 block w-full h-10 px-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                          </div>
                            <div>
                                
                            <textarea
                              type="text"
                              name="note"
                              required
                              placeholder="Quick note text"
                              className="flex-1 block w-full h-10 px-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            </div>
                          </div>

                          <div className="mt-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between sm:gap-2  sm:-mx-2">
                          <button 
                          onClick={()=>setModal(false)}
                          className="px-4  sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                              </button>

                            <button
                       
                          type="submit"
                          className="px-4 sm:mx-2 w-full py-2.5 mb-3 sm:mb-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                              Submit
                            </button>
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                }

                {/* modal end================================= */}
              </div>
            </div>
            <div className="flex   items-center lg:px-6 xl:px-0   justify-center rounded-xl  mb-5  lg:mt-0 h-80 sm:h-80 lg:h-80 xl:h-112 2xl:h-128">
              <img
                data-aos="zoom-in"
                data-aos-delay="1000 "
                data-aos-duration="1000"
                src={image}
                alt=""
                className={`sm:object-cover  -z-20 ${
                  theme !== "light" && "border-2 border-gray-500"
                } lg:object-cover w-full  rounded-xl h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128`}
              />
            </div>
          </div>
        </section>
      </div>

      <div>
     
    
      </div>
    </>
  );
}
