

import profile from "./../../assets/deFaultProfile1.png";
import { Helmet } from "react-helmet-async";
import auth from "../../Firebase/firebase.config";
import toast, { Toaster } from 'react-hot-toast';

import useAuth from "../../useHooks/useAuth";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function UpdateProfile() {
  const { user,theme, updateUserProfile, setUser } = useAuth()

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    
    
    updateUserProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success('Your profile has been updated! 🎉')
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .catch(() => toast.error('Update failed. Try again') );

    // e.target.name.defaultValue = user?.displayName;
   
    e.target.reset();
  };

  
  return (
    <>
      <Helmet>
        <title>TaskBud | Update Profile</title>
      </Helmet>

      <div
        className={`${
          theme === "light" && "bg-[#F7F7F7]"
        } pt-20 pb-10 space-y-3`}
      >
        <h1
          className={`text-center text-3xl font-semibold ${
            theme === "light" && "text-[#4b5664]"
          }`}
        >
         Update Profile
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
           Update Profile
          </p>
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]" > </span>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center items-center mb-5"
      >
        <div className="flex flex-col max-w-md w-full p-4 rounded-md sm:py-2 sm:px-10  ">
          <div className="mb-5 text-center">
            <h1
              data-aos="zoom-in"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className={`mb-5 text-3xl font-bold  ${theme ==="light" &&'text-[#4b5664]'}`}
            >
              Profile
            </h1>
            <div
              data-aos="zoom-in"
              data-aos-delay="1000 "
              data-aos-duration="1200"
              className="avatar "
            >
              <div className="w-20 rounded-full ring-[2px] ring-teal-500 ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || profile} />
              </div>
            </div>
          </div>
          <form onSubmit={handleFormSubmit} action="" className="space-y-8 ">
            <div className="space-y-4">
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="800"
                className="space-y-1"
              >
                <label htmlFor="name" className="block text-sm">
                  Name
                </label>
                <input
                  defaultValue={user?.displayName || ""}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="user name"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-accent"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="1500 "
                data-aos-duration="1000"
                className="space-y-1"
              >
                <label htmlFor="photoURL" className="block text-sm">
                  photoURL
                </label>
                <input
                  defaultValue={user?.photoURL || ""}
                  type="photo"
                  name="photo"
                  id="photo"
                  placeholder="Photo Url"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-accent"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="3000 "
                data-aos-duration="1200"
                className="space-y-1"
              >
                <label htmlFor="email" className="block text-sm">
                  Email
                </label>
                <input
                  readOnly
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
            <div className="">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-2 font-semibold text-xl rounded-md bg-transparent border border-teal-500 hover:bg-teal-500 text-teal-500 hover:text-white duration-300"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}