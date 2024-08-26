import Image from "next/image";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation.jsx";
import SignupFormDemo from "@/components/example/signup-form-demo";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
      <section id="Waitlist">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4">
            <div className="absolute left-3 top-0 text-[#E8DBFF] p-4">
              {" "}
              LOGO{" "}
            </div>
            <div className="flex flex-col space-y-10 text-center items-center">
              <div className="font-chillax font-normal text-[#E8DBFF]">
                {" "}
                Get Answers, Connect, and Succeed with{" "}
              </div>
              <div className="font-chillax font-medium text-[#E8DBFF] text-9xl drop-shadow-4xl">
                {" "}
                Clarity AI{" "}
              </div>
              <hstack>
                <button className="font-chillax font-medium text-[#17125D] bg-[#E8DBFF] rounded-full px-6 py-2  mr-5 cursor-pointer hover:-translate-y-3 duration-300 ">
                  {" "}
                  About Us{" "}
                </button>
                <button className="font-chillax font-medium text-[#17125D] bg-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300">
                  <a href="#SignUp"> Early Access </a>
                </button>
              </hstack>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </section>

      <section id="SignUp" className="h-screen">
  <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <BackgroundBeams/> 
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Be the First to Unlock Clarity AI!
      </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Be among the first to experience Clarity AI—your ultimate student
        companion designed to provide instant answers to university-related
        questions and help you connect with fellow classmates. We’re almost
        ready to launch, and you’re invited to be part of the first wave!
      </p>
      <input
        type="text"
        placeholder="   hi@manuarora.in"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
      />
    </div>

    <div className="flex justify-center relative z-10">
      <button className="font-chillax font-medium text-[#17125D] bg-[#E8DBFF] rounded-full px-6 py-2 mt-5 cursor-pointer hover:-translate-y-3 duration-300">
        Join
      </button>
    </div>
  </div>
</section>

    </>
  );
}
