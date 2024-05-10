import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom/dist";

import useAuth from "../../useHooks/useAuth";

export default function TopHeader() {
    
    
  const { user, loading,theme,setTheme ,setMenu} = useAuth();

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("halloween");
      
    } else {
      setTheme("light");
      
    }
  };
  return (
    <div className=" bg-red-800 ">
      <div className="bg-[#232020]   hidden  md:flex justify-between items-center px-4  lg:px-8 md:py-2  ">
        <div className="flex items-center gap-6  md:gap-10">
          <div className="flex gap-2 items-center ">
            <h1 className="text-[#fdfcfc] text-[12px] font-medium">
              FOLLOW US:
            </h1>
            <div className="flex gap-2 items-center text-[12px] text-[#fdfcfc]   ">
              <FaFacebookF className="cursor-pointer hover:text-yellow-300 duration-300" />
              <FaTwitter className="cursor-pointer hover:text-yellow-300 duration-300" />
              <BiLogoInstagramAlt className="cursor-pointer hover:text-yellow-300 duration-300" />
            </div>
          </div>

          {/* call icons */}
          <div className="text-[#fdfcfc] flex  items-center gap-2 text-[12px] font-bold">
            <IoMdCall className="text-yellow-300 text-base" />
            <p className="font-semibold">13-543-135</p>
          </div>
        </div>

        {/* login and register button */}
        <div className="flex gap-3  ">
          <label className="cursor-pointer grid place-items-center">
            <input
            onChange={ handleTheme}
              type="checkbox"
              value="halloween"
              checked={theme === "light" ? false : true}
              className="toggle theme-controller bg-base-content row-start-1 h-5  col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          

          {loading ? (
            <div className="text-[#fdfcfc] flex  items-center gap-2 text-[12px] font-bold">
              <IoMdMail className="text-[#fcb040] text-base" />
              <p className="font-semibold">
                {user?.email || ".....@gmail.com"}
              </p>
            </div>
          ) : user ? (
            <div className="text-[#fdfcfc] flex  items-center gap-2 text-[12px] font-bold">
              <IoMdMail className="text-[#fcb040] text-base " />
              <p className="font-semibold">{user?.email}</p>
            </div>
          ) : (
            <>
              <Link onClick={()=>setMenu(false)} to="/login">
                <p className="text-[#fdfcfc] font-medium text-[12px]   hover:text-yellow-300 duration-300 ">
                  Login
                </p>
              </Link>
              <Link onClick={()=>setMenu(false)}  to="/register">
                <p className="text-[#fdfcfc] font-medium text-[12px]  hover:text-yellow-300 duration-300 ">
                  Register
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}