/* eslint-disable no-dupe-keys */
import {   useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

import { useForm } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

import { Fade } from "react-awesome-reveal";
import useAuth from "../../useHooks/useAuth";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Register() {
  const {createUser,updateUserProfile,theme} = useAuth()
  const [passToggle, setPassToggle] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors, isSubmitted },
  } = useForm();

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Missing Uppercase letters in your password!";
    }
    if (!/[a-z]/.test(password)) {
      return "Missing lowercase letters in your password!";
    }

    return true;
  };

  const formSubmit = (data) => {
    const { name, photo, email, password } = data;
    createUser(email, password)
      .then((users) => {
        const user = users.user;
        toast.success("Account created! Welcome!");
        //update profile
        updateUserProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch(() => {});
      })
      .catch(() => toast.error("User already exist!"));

    reset();
  };
  
  return (
    <>
      <Helmet>
        <title>TaskBud | Register</title>
      </Helmet>
      <Toaster />
      <div
        className={`${
          theme === "light" && "bg-[#F7F7F7]"
        } pt-24 pb-12 space-y-3`}
      >
        <h1
          className={`text-center text-3xl  md:text-4xl font-semibold ${
            theme === "light" && "text-[#4b5664]"
          }`}
        >
          Register
        </h1>

        <div className="flex gap-1 justify-center items-center  ">
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
            Register
          </p>
        </div>
      </div>
      <section className="flex justify-between mt-5 mb-10">
        {/* register side start */} 
        <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex border-r flex-1  "
      >
        <div className="flex flex-col w-full  p-6  rounded-md  ">
          <div className="mb-4 md:text-start text-center">
           <Fade direction="down" delay={200} triggerOnce={true} cascade={false} >
           <h1
              data-aos="zoom-in"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className="mt-1 text-2xl  md:text-3xl font-semibold text-start  text-teal-400
              "
            >
              Register   <span
                  className={`${
                    theme === "light" ? "text-[#4b5664]" : "text-white"
                  } `}
                >
                  here
                </span>
            </h1>
            {/* <p
              data-aos="zoom-in-up"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className={`text-sm  ${theme ==="light"?'text-[#4b5664]':'text-white'} mb-2`}
            >
              Register now and be part of our community!
            </p> */}
           </Fade>
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            action=""
            className="space-y-10"
          >
            <div className="space-y-4">
             <Fade direction="up" delay={300} triggerOnce={true} cascade={false}>
             <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  {...register("name")}
                  
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-transparent outline-none focus:ring-1 focus:ring-teal-300"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Photo Url
                </label>
                <input
                  {...register("photo")}
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="photo url"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent  outline-none focus:ring-1 focus:ring-teal-300 "
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  {...register("email")}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent  outline-none focus:ring-1 focus:ring-teal-300"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  required
                  {...register("password", {
                    validate: validatePassword,
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer!",
                    },
                  })}
                  type={passToggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent  outline-none focus:ring-1 focus:ring-teal-300"
                />

                {errors.password && isSubmitted && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPassToggle(!passToggle);
                  }}
                  className="absolute top-10 right-2"
                >
                  {passToggle ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </button>
              </div>
             </Fade>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-2 font-semibold text-xl rounded-md bg-transparent border border-teal-400 hover:bg-teal-400 text-teal-400 hover:text-white duration-300"
                >
                  Register
                </button>
              </div>
              <p className={`px-6  md:hidden text-sm text-center ${theme === "light"?'text-gray-600':'text-white'}`}>
                Already have an account?
                <Link
                  to="/login"
                  className="hover:underline dark:text-teal-400"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
        {/* register side end */} 

         {/* Another side start          */} 
         <div className="flex-1 md:flex hidden px-4  ">
          <div className=" flex items-center justify-center">
            <Fade 
                direction="up"
                duration={1500}
                cascade={false}
                triggerOnce={true} 
            >
            <div className="space-y-2">
              <h1
                className={`md:text-3xl font-medium ${
                  theme === "light" && "text-[#4b5664]"
                }`}
              >
               Already Have an Account?
              </h1>

              <p
                className={` lg:text-base md:text-sm ${
                  theme === "light" ? "text-black/55" : "text-white/60"
                }`}
              >
              Welcome back! If you already have an account, simply log in to access your personalized dashboard, continue your learning journey, and connect with our vibrant community of learners. We're thrilled to have you back!
              </p>

             <Link 
                to='/login'
             >
             <button
                data-aos="fade-up"
                data-aos-delay="500 "
                data-aos-duration="1000"
                href="#_"
                className="relative px-5 py-2 mt-2 overflow-hidden font-bold text-teal-400  border border-gray-300 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-teal-400 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-teal-400 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-400 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-400 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-teal-400 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Login
                </span>
              </button>
             </Link>
            </div>
            </Fade>
          </div>
        </div>
         {/* Another side end          */} 

      </section>
    </>
  );
}