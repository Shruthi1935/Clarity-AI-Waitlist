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

              <div className="font-chillax font-medium text-[#E8DBFF] text-9xl drop-shadow-4xl"> Clarity AI </div>
              <div className="font-chillax font-normal text-[#E8DBFF]"> We're almost ready to launch, and you're invited to be part of the first wave. <br/> Drop your email to join the waitlist, we'll keep you in the loop! </div>

              <div className="flex flex-row space-x-6">
                <a href="#LearnMore" className="font-chillax font-medium text-[#E8DBFF] border border-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Learn More </a>
                <a href="#ThankYou" className="font-chillax font-medium text-[#2C174B] bg-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Early Access </a>
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

            <a href="#ThankYou">
              <button className="font-chillax font-medium w-44 text-[#E8DBFF] bg-[#64409D] rounded-full px-5 py-1 shadow-lg shadow-[#A781E2] border border-t-0 border-[#544072] cursor-pointer hover:-translate-y-3 duration-300"> Join Clarity AI </button>
            </a>

            <div className="flex flex-row space-x-9">
              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Career Guidance and Networking </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal text-sm"> 
                  Receive personalized career advice and connect with classmates from your courses. Find study partners, join project teams, and explore internship and job opportunities by leveraging connections with peers who share your academic and career interests. </p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Instant Answers, Anytime: </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal text-sm"> 
                  Got a question about campus life, course details, or university events? Our AI-powered <br/> chatbot is available 24/7 to provide quick and accurate answers, whether you need to find the nearest study spot or learn about upcoming activities.</p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Join Now! </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal text-sm"> 
                  Join the waitlist now to be the first to experience Clarity AI, your ultimate companion for navigating university life with ease and connecting with peers. Get quick answers, make new friends, and enhance your campus experience—all in one app! </p>
              </WobbleCard>
            </div>
          </div>
        </div>
      </section>


      <section id="ThankYou" className="flex w-screen h-screen bg-[#CCB4FF]">
  
        <div className="flex flex-col space-y-24 m-24">
          <div className="flex flex-col space-y-10">
            <div className="font-axiforma font-bold text-[#E8DBFF] text-6xl text-shadow-custom"> Thank you </div>
            <div className="font-axiforma font-bold text-[#E8DBFF] text-6xl text-shadow-custom"> for your interest in </div>
            <div className="font-axiforma font-bold text-[#E8DBFF] text-6xl text-shadow-custom"> Clarity AI! </div>
          </div>

          <div className="flex flex-row space-x-44"> 
            <div className="flex flex-col space-y-8 text-[#2C174B] font-chillax font-normal">
              <div> To be considered for early access, we kindly ask that you follow us on our social media accounts. <br/> As a <span className="font-semibold"> non-profit organization, </span> this helps us grow our community with your support <br/> and keep you updated with the latest news. </div>
              <div> Please take a moment to follow us on Instagram and LinkedIn. <br/> Once you've done that, navigate back to this page to have get access for Clarity AI.  </div>
              <div> We appreciate your support! </div>
            </div>
            
            <div className="flex flex-col space-y-8 text-[#2C174B] font-chillax font-normal">
              <div className="font-semibold"> Step 1:  Follow Us </div>
              <div className="font-semibold"> Step 2:  Verify </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
}
