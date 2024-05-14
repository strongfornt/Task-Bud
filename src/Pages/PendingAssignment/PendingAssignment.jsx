import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../useHooks/useAuth";
import PendingCard from "./PendingCard";
import AssignmentSpinner from "../../Shared/Spinner/AssignmentSpinner";
import useTanstack from "../../useHooks/useTanstack";
import NotFound from "../MySubmittedAssignment/NotFound";

export default function PendingAssignment() {
  const { theme } = useAuth();

  const { data, isLoading } = useTanstack(
    "http://localhost:5000/pending",
    "pending"
  );

  return (
    <>
      <Helmet>
        <title>TaskBud | Pending Assignments</title>
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
          Pending Assignments
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
            Pending Assignments
          </p>
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]">
            {" "}
          </span>
        </div>
      </div>

      {isLoading ? (
        <AssignmentSpinner />
      ) : data?.length ? (
        <PendingCard data={data} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
