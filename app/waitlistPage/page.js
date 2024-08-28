"use client";
import React from "react";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";



export default function Waitlist() {
    return (
    <section id="Waitlist"> 
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4">
          <div className="flex text-center items-center bg-[#E8DBFF] bg-opacity-40 p-36 rounded-2xl">
            <div className="flex flex-col space-y-16">
              <div className="font-chillax font-medium text-[#f2eaff] text-6xl drop-shadow-4xl"> Get in on the action first! </div>
              <div className="font-chillax font-normal text-[#f2eaff]"> Excited for our launch? 
                <br/> 
                Sign up with your email to join the waitlist and stay updated.
              </div>                              

              <form className="flex flex-col space-y-6">
                <input required type="text" name="name" placeholder="Full Name" className="p-2 border-b border-[#f2eaff] bg-transparent" />
                <input required type="text" name="email" placeholder="Email" className="p-2 border-b border-[#f2eaff] bg-transparent" />
                <button className="font-chillax text-xl font-medium text-[#f2eaff] px-6 py-1 rounded-full cursor-pointer hover:-translate-y-2 duration-300 shadow-4xl shadow-[#17125D]"> Join! </button>
              </form>
            </div>
          </div>
          </div>
        </BackgroundGradientAnimation>
    </section>
    )
}