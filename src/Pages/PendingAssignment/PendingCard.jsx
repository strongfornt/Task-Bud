/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useAuth from "../../useHooks/useAuth";
import { calculateScrollbarWidth } from "../../Shared/Navbar/ScrollBar";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function PendingCard({ data }) {
  const { theme, user } = useAuth();
  const [modal, setModal] = useState(false);
  const [pdf, setPdf] = useState({});
  const queryClient = useQueryClient()
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

 //using tanstack mutation for put data================
  const{mutateAsync} = useMutation({
    mutationFn:async({id,AssignmentMark})=>{
        const {data} = await axios.put(`https://online-study-server-ten.vercel.app/pending/${id}`,AssignmentMark)
        console.log(data);
    },
    onSuccess: ()=>{
      toast.success("Assignment graded successfully!")
       setModal(false)
      // refetch()
      queryClient.invalidateQueries({queryKey:['pending']})
    }
 })


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (user?.email === pdf?.email) {
      toast.error("Denied! You cannot mark your own assignment");
      return;
    }
    const form = e.target;
    const grade = form.grade.value;
    const feedback = form.feedback.value;
    const AssignmentMark = {
      grade,
      feedback,
      status: "completed",
      
    };

    await mutateAsync({id:pdf?.id,AssignmentMark  })
  };
  return (
    <>
      <section className="  mb-6 mt-2">
        <div className="container px-2 md:px-6 mx-auto  dark:text-gray-800">
          <h2
            className={`mb-4 text-2xl font-semibold leading-tight ${
              theme === "light" ? "text-[#4b5664] " : "text-white"
            }`}
          >
            {" "}
            <span className="text-teal-500">Pending</span> Assignment
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Assignment Title</th>
                  <th className="p-3"></th>
                  <th className="p-3">Marks</th>
                  <th className="p-3"></th>
                  <th className="p-3 text-start">Examinee Name</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((data, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                  >
                    <td className="p-3">
                      <p>{data?.title}</p>
                    </td>
                    <td className="p-3">
                      <p></p>
                    </td>
                    <td className="p-3">
                      <p>{data?.marks}</p>
                    </td>
                    <td className="p-3">
                      {/* <p>{data?.obtainedMark || "N/A"}</p> */}
                      <p></p>
                    </td>
                    <td className="p-3 text-start">
                      <p> {data?.examinee?.name}</p>
                    </td>
                    <td className="p-3 text-start">
                      <span className="px-3 py-1 font-semibold rounded-md bg-teal-600 text-gray-50">
                        {/* <span>{data?.status}</span> */}
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            const modalData = {
                              pdf: data?.pdf,
                              note: data?.note,
                              mark: parseInt(data?.marks),
                              email: data?.examinee?.email,
                              id:data?._id
                            };
                            setPdf(modalData);
                            // document.getElementById('my_modal_5').showModal()
                            setModal(!modal);
                          }}
                        >
                          GiveMark
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* modal start */}

      {modal && (
        <div className="relative z-50 flex justify-center">
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

              <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform border   shadow-xl sm:max-w-sm rounded-xl bg-gray-900 sm:my-8 sm:w-full sm:p-4">
                <div className="flex items-center h-72 justify-center mx-auto">
                  <iframe
                    src={pdf?.pdf}
                    frameBorder="0"
                    className="min-h-full"
                  ></iframe>
                </div>

                {/* <div className="mt-2 mb-4 text-center">
                            <h3
                              className="text-lg font-medium text-gray-800 dark:text-white"
                              id="modal-title"
                            >
                              title goes here
                            </h3>
                          </div> */}
                <div className="">
                  <label htmlFor="" className="text-white text-xs">
                    PDF Link
                  </label>
                  <input
                    type="text"
                    name="pdf"
                    readOnly
                    defaultValue={pdf?.pdf}
                    placeholder="Embed PDF link"
                    className="flex-1 block w-full h-10 px-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-white text-xs">
                    Quick Text Note
                  </label>
                  <input
                    type="text"
                    name="note"
                    readOnly
                    defaultValue={pdf?.note}
                    placeholder="Quick note text"
                    className="flex-1 block w-full h-10 px-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="border-t border-white mt-2 mb-1"
                >
                  <div className="w-full space-y-2 mt-2">
                    <div>
                      <input
                        type="number"
                        name="grade"
                        required
                        min={0}
                        max={pdf?.mark}
                        placeholder="Give Mark"
                        className="flex-1 block w-full h-10 px-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        name="feedback"
                        required
                        placeholder="Feedback"
                        className="flex-1 block w-full h-10 px-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between sm:gap-2  sm:-mx-2">
                    <button
                      onClick={() => {
                        setPdf({});
                        setModal(false);
                      }}
                      className="px-4  sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-4 sm:mx-2 w-full py-2.5 mb-3 sm:mb-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}
