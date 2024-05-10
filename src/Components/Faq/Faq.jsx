import Lottie from "lottie-react";
import useAuth from "../../useHooks/useAuth";
import Faqs from "./Faq2.json";

export default function Faq() {
  const { theme } = useAuth();
  return (
    <>
      <section className="flex gap-2  flex-row-reverse">
        <div className=" lg:flex flex-1 hidden ">
          <Lottie animationData={Faqs} />
        </div>
        <section className="flex-1 ">
          <div className="container flex flex-col justify-center px-2 py-8 mx-auto ">
            <h2
              className={`text-2xl font-bold sm:text-3xl ${
                theme === "light" && "text-[#4b5664]"
              }`}
            >
              Frequently Asked{" "}
              <span className="underline decoration-teal-400 ">Questions</span>
            </h2>
            <p className={`mt-4 mb-8 ${theme === "light" && "text-[#4b5664]"}`}>
              Explore commonly asked questions to find quick answers and helpful
              insights. Discover solutions to common queries and make the most
              of your experience with our platform.
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  How do I create an assignment?
                </summary>
                <p
                  className={`px-4 py-6 pt-0 ml-4 -mt-4 ${
                    theme === "light" && "text-[#4b5664]"
                  }`}
                >
                  Creating an assignment is simple! Just navigate to the "Create
                  Assignment" page, fill in the required details, and submit.
                  Your assignment will be available for all users to access.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  Can I filter assignments based on difficulty?
                </summary>
                <p
                  className={`px-4 py-6 pt-0 ml-4 -mt-4 ${
                    theme === "light" && "text-[#4b5664]"
                  }`}
                >
                  Absolutely! Our intuitive filtering feature allows you to sort
                  assignments based on difficulty levels. Simply use the
                  filtering options provided to find assignments that match your
                  preferred challenge level.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6   focus:outline-none focus-visible:dark:ring-violet-600">
                  Is collaborative assignment editing available?
                </summary>
                <p
                  className={`px-4 py-6 pt-0 ml-4 -mt-4 ${
                    theme === "light" && "text-[#4b5664]"
                  }`}
                >
                  Yes, it is! Collaborate with other users in real-time to
                  create and refine assignments. Enjoy a dynamic learning
                  environment where multiple minds come together to craft
                  engaging tasks.
                </p>
              </details>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
