import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../useHooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";
import axios from "axios";

export default function AssignmentUpdate() {
    const {theme } = useAuth();
    const data = useLoaderData();
    const {  _id,title, image, difficulty, marks,description,date:prevDate } = data || {};
    
    const navigate = useNavigate()
  
    const [startDate, setStartDate] = useState(new Date(prevDate));
    const date = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const difficulty = form.difficulty.value;
        const marks = form.marks.value;
        const description = form.description.value;
    
        const updateAssignment = {
          image,
          title,
          difficulty,
          description,
          marks,
          date,
        };
    
        axios
          .put(
            // "https://online-study-server-ten.vercel.app/assignment",
            `http://localhost:5000/assignment/${_id}`,
            updateAssignment,
          )
          .then((res) => {
            const data = res.data;
            if (data.modifiedCount) {
              toast.success(" Data updated smoothly!");
              form.reset();
              navigate('/assignments')
            }
          })
          .catch(() => {
            toast.error("Data update failed. Please check your connection and try again.");
          });     
      };

  return (
    <>
    <Helmet>
    <title>TaskBud | UpdateAssignment</title>
  </Helmet>

  <div
    className={`${
      theme === "light" && "bg-[#F7F7F7]"
    } pt-24 pb-12 space-y-3 `}
  >
    <h1
      className={`text-center text-3xl  md:text-4xl font-semibold ${
        theme === "light" && "text-[#4b5664]"
      }`}
    >
       Update Assignment 
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
        Assignments
      </p>
      <p
        className={`text-sm ${
          theme === "light" ? "text-black/45" : "text-white/55"
        } flex items-center`}
      >
        {" "}
        <p>
          <MdKeyboardArrowRight />
        </p>{" "}
        Update Assignment
      </p>
      <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]">
        {" "}
      </span>
    </div>
  </div>

    {/* form start */}
    <section className="px-6 py-2  ">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-4 "
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <Fade
                direction="up"
                delay={200}
                cascade={false}
                triggerOnce={true}
              >
                <p className="font-medium text-lg text-teal-400 ">
                  <span
                    className={`${
                      theme == "light" ? "text-[#4b5664]" : "text-white"
                    }`}
                  >
                    Update
                  </span>{" "}
                  Assignment{" "}
                </p>
                <p
                  className={`text-xs  ${
                    theme == "light" ? "text-[#4b5664]" : "text-[#d4cccc]"
                  } `}
                >
                  Customize assignments easily on our update page
                </p>
              </Fade>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="block text-sm">
                  Assignment Title
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={title}
                  placeholder="Assignment title "
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-teal-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="image" className="block text-sm    ">
                  Thumbnail image URL
                </label>
                <input
                  required
                  type="text"
                  name="image"
                  id="image"
                  defaultValue={image}
                  placeholder="image URL"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-teal-400"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="difficulty" className="block text-sm">
                  Assignment Difficulty
                </label>

                <select
                  required
                  id="difficulty"
                  name="difficulty"
                  defaultValue={difficulty}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-teal-400"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="marks" className="block text-sm">
                  Assignment Marks
                </label>
                <input
                  required
                  type="number"
                  name="marks"
                  id="marks"
                  min={1}
                  max={100}
                  defaultValue={marks}
                  placeholder="marks"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-teal-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="location" className="block text-sm">
                  Date
                </label>

                <DatePicker
                  className=" px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-teal-400"
                  selected={ startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="col-span-full ">
                <label htmlFor="description" className="block text-sm">
                  Short description
                </label>
                <textarea
                  required
                  type="text"
                  name="description"
                  id="description"
                  defaultValue={description}
                  placeholder="description "
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-teal-400"
                />
              </div>
              <div className="col-span-full md:col-span-2 lg:col-span-1     ">
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    className="relative w-full px-5 py-3 overflow-hidden font-bold   border border-gray-200 rounded-lg shadow-inner group"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-teal-400 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-teal-400  group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-400  group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-400  group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-teal-400 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                      Update
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        
        </form>
      </section>


</>
  )
}
