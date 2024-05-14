/* eslint-disable react/prop-types */
import { useState } from "react"
import useAuth from "../../useHooks/useAuth"
export default function SubmitCard({data}) {
    const {theme} = useAuth()
    const [pdf,setPdf] = useState(null);
   
    
  return (
    <>
           <section className="  mb-6 " >
      <div className="container p-2 mx-auto  dark:text-gray-800">
	<h2 className={`mb-4 text-2xl font-semibold leading-tight ${theme ==="light" ?'text-[#4b5664] ':'text-white'}`}><span className="text-teal-500" >Submitted</span>  Assignment</h2>
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
					<th className="p-3">Marks</th>
					<th className="p-3">PDF</th>
					<th className="p-3">Obtained Mark</th>
					<th className="p-3 text-start">Feedback</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
            {
                data?.map((data,idx) => <tr key={idx} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                    <p>{data?.title}</p>
                </td>
                <td className="p-3">
                    <p>{data?.marks}</p>
                </td>
                <td className="p-3">
                    <button onClick={()=>{
                        setPdf(data?.pdf)
                        document.getElementById('my_modal_5').showModal()
                        
                    }} >Show</button>    
                </td>
                <td className="p-3">
                    <p>{data?.grade || "N/A"}</p>
                    
                </td>
                <td className="p-3 text-start">
                    <p>{data?.feedback || "Feedback Pending"}</p>
                </td>
                <td className="p-3 text-right">
                    <span className={`px-3 py-1 font-semibold rounded-md ${data?.status ==="pending"?'text-blue-500 bg-blue-100/60':'bg-emerald-100/60 text-emerald-500'}`}>
                        <span>{data?.status}</span>
                    </span>
                </td>
            </tr>)
            }
                    
            
			</tbody>
		</table>
	</div>
</div>
      </section>


      {/* modal start */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  
    <div className="relative flex justify-center">
                   <div
                     className="fixed inset-0 z-10 overflow-y-auto"
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

                       <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform border   shadow-xl sm:max-w-sm rounded-xl bg-gray-900 sm:my-8 sm:w-full ">
                         <div className="flex items-center h-72 justify-center mx-auto">
                          <iframe src={pdf} frameBorder="0" className="min-h-full" ></iframe>
                         </div>
                            <div className="mt-4">
                                <label htmlFor="" className="text-white" >PDF Link</label>
                           <input
                             type="text"
                             name="pdf"
                             defaultValue={pdf}
                             readOnly
                             placeholder="Embed PDF link"
                             className="flex-1 block w-full h-10 px-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                           />
                         </div>
                         <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:gap-2  sm:-mx-2">
                         <form method="dialog" className="w-full md:px-2" >
                         <button 
                        onClick={()=> setPdf(null)}
                        className="px-4   w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                              Close
                            </button>
                         </form>

                          
                         </div>
                         
                       </div>
                     </div>
                   </div>
                 </div>
</dialog>
    </>
  )
}
