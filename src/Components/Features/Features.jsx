import useAuth from "../../useHooks/useAuth";

export default function Features() {
    const {theme} = useAuth()
  return (
    <section className="">
      <div className="container px-2 mt-10 mb-4 mx-auto">
        <h1 className={`text-2xl font-bold  ${theme ==='light'&& 'text-[#4b5664]'} capitalize lg:text-3xl`}>
          explore our <br /> awesome{" "}
          <span className="underline decoration-teal-500">Features</span>
        </h1>

        <p className={`mt-2 ${theme ==='light'&& 'text-[#4b5664]'} xl:mt-2 `}>
        Uncover the brilliance within. Explore our standout features designed to redefine your experience.
        </p>

        <div className="grid grid-cols-1 gap-4 mt-8 xl:gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-[1.5px]  dark:border-teal-500 rounded-xl">
            <span className="inline-block text-teal-500 dark:text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1 className={`text-xl font-semibold  capitalize`}>
              elegant Dark Mode
            </h1>

            <p className={`${theme ==='light'&& 'text-[#4b5664]'} `}>
            Dive into sophistication with our Dark Mode. Elevate focus and comfort in low-light settings. Embrace a sleek, refined interface.
            </p>

            <a
              href="#"
              className="inline-flex p-2 text-teal-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-teal-500 dark:text-white hover:underline  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>

          <div className="p-8 space-y-3 border-[1.5px]  dark:border-teal-500 rounded-xl">
            <span className="inline-block text-teal-500 dark:text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <h1 className={`text-xl font-semibold  capitalize`}>
            Team Assignment Collaboration
            </h1>

            <p className={`${theme ==='light'&& 'text-[#4b5664]'}`}>
            Boost teamwork in assignment creation. Collaborate in real-time to refine tasks, creating an interactive learning space for all participants.
            </p>

            <a
              href="#"
              className="inline-flex p-2 text-teal-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-teal-500 dark:text-white hover:underline  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>

          <div className="p-8 space-y-3 border-[1.5px]  dark:border-teal-500 rounded-xl">
            <span className="inline-block text-teal-500 dark:text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 className={`text-xl font-semibold  capitalize`}>
             
              Intuitive Assignment Filtering
            </h1>

            <p className={`${theme ==='light'&& 'text-[#4b5664]'}`}>
            Streamline your assignment search. With this intuitive feature, Easily categorize tasks by difficulty to locate the ideal challenge for your learning goals.
            </p>

            <a
              href="#"
              className="inline-flex p-2 text-teal-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-teal-500 dark:text-white hover:underline  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
