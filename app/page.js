"use client";
import './globals.css'; 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { WobbleCard } from "@/components/ui/wobble-card";



export default function Waitlist() {
  
  return (
    <>
      <section id="Hero"> 
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4">
            <div className="absolute left-3 top-0 text-[#E8DBFF] p-4"> LOGO </div>
            <div className="flex flex-col space-y-10 text-center items-center">
              <div className="font-chillax font-normal text-[#E8DBFF]"> Get Answers, Connect, and Succeed with </div>
              <div className="font-chillax font-medium text-[#E8DBFF] text-9xl drop-shadow-4xl"> Clarity AI </div>
              <div className="flex flex-row space-x-6">
                <a href="#LearnMore" className="font-chillax font-medium text-[#E8DBFF] border border-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Learn More </a>
                <a href="#Waitlist" className="font-chillax font-medium text-[#2C174B] bg-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Early Access </a>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </section>

      <section id="LearnMore" className="flex w-screen h-screen bg-[#CCB4FF]">    
        <div className="m-24">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-row space-x-48"> 
              <div className="flex flex-col space-y-11 font-axiforma font-bold text-[#E8DBFF] text-7xl"> 
                <div className="text-shadow-custom">Your</div> 
                <div className="text-shadow-custom">Ultimate</div>
                <div className="text-shadow-custom">Campus Companion</div>
              </div>
              <div className="font-chillax font-normal text-md text-right leading-7"> 
                <div className="mb-6 text-[#2C174B] font-normal"> Clarity AI is like that one friend who always <br/> knows what's up. </div>
                <div className="text-[#2C174B]"> 
                  <div className="font-semibold"> Need quick answers? </div> 
                  <div className="mb-6"> We've got you. </div> 
                </div>
                <div className="text-[#2C174B]"> 
                  <div className="font-semibold"> Want to connect with classmates? </div> 
                  <div className="mb-6"> We've got that too. </div> 
                </div>
                <div className="text-[#2C174B]"> It's like having a cheat code for <br/> university, minus the actual cheating. </div>
              </div>
            </div>

            <a href="#Waitlist">
              <button className="font-chillax font-medium w-44 text-[#E8DBFF] bg-[#64409D] rounded-full px-5 py-1 shadow-lg shadow-[#A781E2] border border-t-0 border-[#544072] cursor-pointer hover:-translate-y-3 duration-300"> Try Clarity AI </button>
            </a>

            <div className="flex flex-row space-x-9">
              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Connect for Advice </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal"> 
                  Reach out to fellow students for academic guidance or career advice. Tap into the collective wisdom of your campus community. 
                </p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Build Study Groups </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal"> 
                  Form or join study groups with classmates to collaborate and learn together. Boost your understanding and make studying more enjoyable!
                </p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Make New Friends </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal"> 
                  Grow your circle by connecting with classmates who share your courses and major. Discover new friends and build your network!                
                </p>
              </WobbleCard>
            </div>
          </div>
        </div>
      </section>

      <section id="Waitlist"> 
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4">
          <div className="flex text-center items-center bg-[#E8DBFF] bg-opacity-50 p-32 rounded-xl">
            <div className="flex flex-col space-y-10">
              <div className="font-chillax font-medium text-[#ece0ff] text-5xl drop-shadow-4xl"> Be the First to Unlock Clarity AI </div>
              <div className="font-chillax font-normal text-[#ece0ff]"> We're almost ready to launch, and you're invited to be part of the first wave. 
                <br/> 
                Drop your email below to join the waitlist, we'll keep you in the loop!
              </div>                              



              
              <form className="flex flex-col space-y-6">
                <input required type="text" name="name" placeholder="Full Name" className="p-2 border-b border-[#ece0ff] bg-transparent" />
                <input required type="text" name="email" placeholder="Email" className="p-2 border-b border-[#ece0ff] bg-transparent" />
                <button className="font-chillax text-xl font-medium text-[#ece0ff] px-6 py-1 rounded-full cursor-pointer hover:-translate-y-2 duration-300 shadow-4xl shadow-[#17125D]"> Let's Go </button>
              </form>
            </div>
          </div>
          </div>
        </BackgroundGradientAnimation>
      </section>
    </>
  );
}
