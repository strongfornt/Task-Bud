import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import useAuth from "../../useHooks/useAuth";
import { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import toast from "react-hot-toast";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, googleLogin, user, theme } = useAuth();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("You're in! Welcome back!");
      })
      .catch(() => {
        toast.error("invalid password or email");
      });
    e.target.reset();
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("You're in! Welcome back!");
      })
      .catch(() => {
        toast.error("Sign-in error. Check connection.");
      });
  };


  useEffect(() => {
    if (user) {
      navigate(location.state);
    }
  }, [location.state, navigate, user]);

  return (
    <>
      <Helmet>
        <title>TaskBud | Login</title>
      </Helmet>
      
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
          Login
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
            Login
          </p>
        </div>
      </div>
      <section className="flex justify-between mt-5 mb-10">
        {/* login site start */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex  border-r  flex-1 "
        >
          <div className="w-full  p-4 rounded-md  sm:p-8 ">
            <Fade
              direction="down"
              duration={1000}
              cascade={false}
              triggerOnce={true}
            >
              <h2
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
                className="mb-3 text-2xl  md:text-3xl font-semibold text-start   text-teal-400  "
              >
                Login{" "}
                <span
                  className={`${
                    theme === "light" ? "text-[#4b5664]" : "text-white"
                  } `}
                >
                  to your account
                </span>
              </h2>
            </Fade>
            <div className="my-6">
              <Fade
                direction="up"
                duration={1000}
                cascade={false}
                triggerOnce={true}
              >
                <button
                  onClick={handleGoogleLogin}
                  data-aos="zoom-in"
                  data-aos-delay="500 "
                  data-aos-duration="1000"
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center w-full p-4 space-x-4  border rounded-md  
              hover:bg-accent/5 hover:border-accent/5  duration-300"
                >
                  <FcGoogle className="text-2xl" />
                  <p>Login with Google</p>
                </button>
               
              </Fade>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-600" />
              <p className="px-3 dark:text-gray-600">OR</p>
              <hr className="w-full dark:text-gray-600" />
            </div>
            <form onSubmit={handleFormSubmit} action="" className="space-y-8">
              <div className="space-y-4">
                <Fade
                  direction="up"
                  delay={500}
                  cascade={false}
                  triggerOnce={true}
                >
                  <div
                    data-aos="zoom-out-right"
                    data-aos-delay="500 "
                    data-aos-duration="1000"
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="block text-sm">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      placeholder="@gmail.com"
                      className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-teal-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm">
                        Password
                      </label>
                      <a className="text-xs hover:underline dark:text-gray-600 cursor-pointer">
                        Forgot password?
                      </a>
                    </div>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      placeholder="******"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-transparent outline-none  focus:ring-1 focus:ring-teal-400"
                    />
                  </div>
                </Fade>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-2 font-semibold text-xl rounded-md bg-transparent border border-teal-400 hover:bg-teal-400 text-teal-400 hover:text-white duration-300"
              >
                Login
              </button>
             <div className=" flex justify-center" >
             <p
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
                className={`text-sm text-center flex  md:hidden  ${
                  theme === "light" ? "text-[#4b5664]" : "text-white"
                }`}
              >
                Don't have an account yet?
                <Link to="/register" className="underline text-teal-300">
                  Create One
                </Link>
              </p>
             </div>
            </form>
          </div>
        </div>
        {/* login site end */}

        {/* another part start */}
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
                Don't have an account?
              </h1>

              <p
                className={` lg:text-base md:text-sm ${
                  theme === "light" ? "text-black/55" : "text-white/60"
                }`}
              >
                Join a community of curious minds! Sign up today to access
                engaging content, connect with experts, and embark on a journey
                of discovery. Start your learning experience now!
              </p>

             <Link 
                to='/register'
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
                  Register
                </span>
              </button>
             </Link>
            </div>
            </Fade>
          </div>
        </div>
        {/* another part end */}
      </section>
    </>
  );
}
