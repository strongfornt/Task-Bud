import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../useHooks/useAuth";
import AssignmentCard from "./AssignmentCard";


export default function Assignments() {
  const {theme} = useAuth()
  return (
    <>
      <Helmet>
        <title>TaskBud | Assignments</title>
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
          Assignments
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
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]" > </span>
        </div>
        
      </div>

      <section className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 px-2 gap-4 my-4">
         <AssignmentCard/>
      </section>
    </>
  );
}
