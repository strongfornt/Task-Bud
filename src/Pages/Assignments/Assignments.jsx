import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../useHooks/useAuth";
import AssignmentCard from "./AssignmentCard";
import { useEffect, useState } from "react";
import useTanstack from "../../useHooks/useTanstack";
import AssignmentSpinner from "../../Shared/Spinner/AssignmentSpinner";
import axios from "axios";


export default function Assignments() {
  const { theme } = useAuth();
  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter,setFilter] = useState('');
  const [width,setWidth] = useState(0)
  const [itemPerPages, setItemPerPages] = useState(0 || 4);
  const [count,setCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(1);
//   const { data, isLoading, refetch } = useTanstack(api, key);

//data fetch hook===============================================
  useEffect(() => {
    const getData = async () => {
        const {data} =  await axios(`https://online-study-server-ten.vercel.app/assignment?page=${currentPage}&size=${itemPerPages}&filter=${filter}`)
        setData(data)
        setIsLoading(false)
    }

    getData()
    // setApi(`http://localhost:5000/assignment?page=${currentPage}&size=${itemPerPages}&filter=${filter}`)
    // setKey("assignments")
   
  }, [currentPage,itemPerPages,filter]);

  //data count hook========================================
  useEffect(()=>{
    const getCount = async () =>{
        const {data} = await axios(`https://online-study-server-ten.vercel.app/assignmentCount?filter=${filter}`)
        setCount(data.count)
    }
    getCount()
  },[filter])
 
 
  
  //dynamic responsive detector hook ===================================

  useEffect(()=>{
    const handleScroll = () => {
        setWidth(window.innerWidth);
      };
      if (width >= 1280) {
        setItemPerPages(4)
      } else if (width >= 1024) {
        setItemPerPages(3)
      } else if (width >= 768) {
        setItemPerPages(2)
      }  else if(width >= 640){
        setItemPerPages(4)
      }
  
      window.addEventListener("resize", handleScroll);
      return () => {
        window.removeEventListener("resize", handleScroll);
      };
  },[width])
  console.log(itemPerPages);
  const numberOfPages = Math.ceil(count / itemPerPages);
  const paginationCount = [
    ...Array(numberOfPages)
      .keys()
      .map((idx) => idx + 1),
  ];

const handlePrev =() =>{
    if(currentPage > 1){
        setCurrentPage(currentPage -1)
        
    }
    
}
const handleNext = () =>{
    if(currentPage < paginationCount.length){
        setCurrentPage(currentPage +1)   
    }
}
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
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]">
            {" "}
          </span>
        </div>
      </div>
      <div className="my-2 flex items-center justify-center gap-10">
        <select
        onChange={(e)=>{
            setFilter(e.target.value)
            setCurrentPage(1)
        }}
        value={filter}
          className="px-4 py-1  border cursor-pointer ring-1 ring-teal-400 outline-none rounded-md "
          name="difficulty"
          id="difficulty"
        >
          <option value="">Filter By Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button 
        onClick={()=> setFilter('')}
        className="px-4 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 duration-300 font-medium">
          Reset
        </button>
      </div>

      {isLoading ? (
        <AssignmentSpinner />
      ) : (
        <>
          <section className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 px-2 gap-6 xl:gap-4 my-4">
            {data?.map((data, idx) => (
              <AssignmentCard key={idx} data={data} />
            ))}
          </section>{" "}
        </>
      )}
{/* section end======================================================================= */}
      <div className="mb-6 mt-6 flex items-center  justify-center">
       
        <nav
          aria-label="Pagination"
          className="inline-flex -space-x-px bg-gray-50  rounded-md shadow-sm"
        >
          <button
          onClick={handlePrev}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-300"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
       {
        paginationCount?.map((c,i)=>  <button
           key={i}
            type="button"
            aria-current="page"
            className={`inline-flex items-center px-4 py-2 text-sm font-semibold border ${currentPage === c ?'bg-teal-400 text-white':'text-black'   } 
            dark:border-gray-300`}
            
            
            onClick={()=> setCurrentPage(c)}
          >
            {c}
          </button>
        )
       }

          <button
          onClick={handleNext}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-300"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black "
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
        
      </div>
    </>
  );
}
