/* eslint-disable react/prop-types */
import { AiFillFileMarkdown } from "react-icons/ai";
import { Link } from "react-router-dom";
import defaultProfile from "./../../assets/logo/deFaultProfile1.png";
import useAuth from "../../useHooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
export default function AssignmentCard({ data,setRefetch, refetch }) {
  const { _id, title, image, difficulty, marks, date, creator } = data || {};
  const { theme,user } = useAuth();

  //delete the document ============================================
  const handleDelete = (id,email) => {
    if(!user) {
        toast.error('Log in required to proceed with deletion.')
        return
    }
if(email !== user?.email) {
    toast.error("Denied! Only the creator can delete")
    return
}
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `http://localhost:5000/assignment/${id}`
          )
          .then((res) => {
            const data = res.data;
            if (data.deletedCount) {
              // toast.success('Data deleted successfully!')
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setRefetch(!refetch);
            }
          });
      }
    });
  };

  return (
    <>
      <div
        className={`flex flex-col  p-3 space-y-3 overflow-hidden rounded-lg shadow-md ${
          theme === "light" ? "bg-gray-50" : "border border-white/55"
        }`}
      >
        <div className=" flex justify-between w-full items-center ">
          <div className="flex  space-x-2 ">
            <img
              alt=""
              src={creator?.photo || defaultProfile}
              className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {creator?.name || "Anonymous"}
              </a>
              <span
                className={`text-xs ${
                  theme === "light" ? "text-gray-600" : "text-white/70"
                }`}
              >
                {date}
              </span>
            </div>
          </div>
          <Link
          to={`/assignmentDetails/${_id}`}
            className={`underline ${
              theme === "light" ? "decoration-black/65" : "decoration-white/65"
            }`}
          >
            View Details
          </Link>
        </div>

        <div>
          <img
            src={image}
            alt=""
            className="object-cover w-full rounded-md mb-2 h-48 lg:h-fit   "
          />
          <div className="flex justify-between">
            <button
              type="button"
              className="flex items-center p-1 space-x-1.5  "
            >
              Level: <span className="text-sm">{difficulty}</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <AiFillFileMarkdown
                className={`${theme === "light" ? "" : "text-white/70"}`}
              />
              <span className={`${theme === "light" ? "" : "text-white/70"}`}>
                {marks}
              </span>
            </button>
          </div>
          <h2 className="mb-1 text-xl font-medium">{title}</h2>
        </div>
        <div className="flex flex-wrap justify-between">
          <Link 
          to={`/updateAssignment/${_id}`}
          className="px-2 py-[2px] bg-teal-500 text-white rounded-md hover:bg-teal-600 duration-300 font-medium">
            Update
          </Link>
          <button 
            onClick={()=>handleDelete(_id,creator?.email)}
          className="px-2 bg-red-500 text-white rounded-md hover:bg-red-600 duration-300 font-medium">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
