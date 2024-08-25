import Image from "next/image";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation.jsx";


export default function Home() {
  return (
    <>
    <section id="Waitlist"> 
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4">
            <div className="absolute left-3 top-0 text-[#E8DBFF] p-4"> LOGO </div>
          </div>
        </BackgroundGradientAnimation>
      </section>
    </>
  );
}
