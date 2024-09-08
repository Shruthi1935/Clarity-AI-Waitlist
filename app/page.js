"use client";
import './globals.css'; 
import React, {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { WobbleCard } from "@/components/ui/wobble-card";



export default function Waitlist() {

  const learnMoreRef = useRef(null);
  const thankYouRef = useRef(null);

  const learnMoreInView = useInView(learnMoreRef, { once: true });
  const thankYouInView = useInView(thankYouRef, { once: true });

  // animation functions
  const slideFromLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeZoomInOut = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }, 
    exit: { opacity: 0, scale: 0.8 }, 
  };

  const shake = {
    visible: {
      rotate: [0, -2, 2, -2, 2, -2, 2, 0], // keyframes
      transition: {
        delay: 2.0,
        duration: 1.2, 
        ease: "easeInOut"
      },
    },
  };

  const shakeTwo = {
    visible: {
      rotate: [0, -6, 6, -6, 6, -6, 6, 0], // keyframes
      transition: {
        delay: 2.0,
        duration: 1.2, 
        ease: "easeInOut"
      },
    },
  };

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
              <motion.div 
                  ref={learnMoreRef}
                  initial="hidden"
                  animate={learnMoreInView ? "visible" : "hidden"}
                  variants={fadeZoomInOut}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-shadow-custom">Your
                </motion.div> 
                
                <motion.div 
                  ref={learnMoreRef}
                  initial="hidden"
                  animate={learnMoreInView ? "visible" : "hidden"}
                  variants={fadeZoomInOut}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-shadow-custom">Ultimate
                </motion.div>
                
                <motion.div 
                  ref={learnMoreRef}
                  initial="hidden"
                  variants={fadeZoomInOut}
                  animate={learnMoreInView ? "visible" : "hidden"}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="text-shadow-custom">Campus Companion
                </motion.div>
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

            <motion.div 
              ref={learnMoreRef}
              initial="hidden"
              variants={shake}
              animate={learnMoreInView ? "visible" : "hidden"}
              className="flex flex-row space-x-9">

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
            </motion.div>
          </div>
        </div>
      </section>


      <section id="ThankYou" className="flex w-screen h-screen bg-[#CCB4FF]">
  
        <div className="flex flex-col space-y-24 m-24">
          <motion.div 
            ref={thankYouRef}
            initial="hidden"
            animate={thankYouInView ? "visible" : "hidden"}
            variants={slideFromLeft}
            transition={{ duration: 1.2 }}
            className="flex flex-col space-y-10">
            <div className="font-axiforma font-bold text-[#E8DBFF] text-7xl text-shadow-custom"> Thank you </div>    
            <div className="font-axiforma font-bold text-[#E8DBFF] text-7xl text-shadow-custom"> for your interest in Clarity AI! </div>
          </motion.div>

          <div className="flex flex-row space-x-44"> 
            <div className="flex flex-col space-y-8 text-[#2C174B] font-chillax font-normal leading-6">
              <div> To be considered for early access, we kindly ask that you follow us on our social media accounts. <br/> As a <span className="font-semibold"> non-profit organization, </span> every follow helps us grow our community and continue providing <br/> valuable resources for students like you. 
                    By joining our online community, you'll stay <br/> updated with the latest news, features, and developments about Clarity AI. </div>
              <div> Take a moment to follow us on Instagram, LinkedIn, & Discord. These platforms are where we share <br/> exciting updates and helpful information. </div>
              <div> Once you've followed us, navigate back to this page to unlock early access and start using our app. </div>
              <div> We appreciate your support! </div>
            </div>
            
            <motion.div 
              ref={thankYouRef}
              initial="hidden"
              variants={fadeZoomInOut}
              animate={thankYouInView ? "visible" : "hidden"}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col space-y-10 text-[#2C174B] font-chillax font-normal">

              <div className="flex flex-col space-y-4 justify-center items-center">
                <div className="font-semibold text-xl text-center"> Step 1:  Follow Us </div>
                <div className="font-normal"> Follow us on our socials, links below! </div>
                <motion.div 
                  ref={thankYouRef}
                  initial="hidden"
                  variants={shakeTwo}
                  animate={thankYouInView ? "visible" : "hidden"}
                  className="flex flex-row space-x-8 justify-center cursor-pointer"> 
                  <a href="https://www.linkedin.com/in/clarity-ai-016563327/" target="_blank" rel="noopener noreferrer"> 
                    <FaLinkedin href="" className="text-4xl hover:-translate-y-2 duration-300"></FaLinkedin>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer"> 
                    <FaDiscord href="" className="text-4xl hover:-translate-y-2 duration-300"></FaDiscord>
                  </a>
                  <a href="https://www.instagram.com/clarity_ai/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-4xl hover:-translate-y-2 duration-300" />
                  </a>                
                </motion.div>
              </div>
              <div className="flex flex-col space-y-4 justify-center items-center">
                <div className="font-semibold text-xl text-center"> Step 2:  Verify </div>
                <div className="font-normal"> Have you followed Clarity AI on our socials? </div>
                <Link href="/waitlistPage" className="font-chillax font-medium w-44 text-center text-[#E8DBFF] bg-[#64409D] rounded-full px-5 py-1 shadow-lg shadow-[#A781E2] border border-t-0 border-[#544072] cursor-pointer hover:-translate-y-2 duration-300"> Yes, Join Now! </Link>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

    </>
  );
}
