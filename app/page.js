"use client";
import './globals.css'; 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


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
                <a href="#Chatbot" className="font-chillax font-medium text-[#E8DBFF] border border-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Learn More </a>
                <Link href="/clarityPages/loginPage" className="font-chillax font-medium text-[#2C174B] bg-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Chat with Clarity </Link>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </section>
    </>
  );
}
