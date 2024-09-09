"use client";
import React from "react";
import Swal from "sweetalert2";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Waitlist() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");

    // Send form data to Web3Forms
    formData.append("access_key", "23967d50-3be6-44b1-afb6-7971b65b89f8");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (web3Res.success) {
      const emailRes = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (emailRes.ok) {
        Swal.fire({
          title: "Pigeon Sent!",
          text: "You just signed up for early access. Check your email!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There was a problem sending the confirmation email.",
          icon: "error",
        });
      }
    } else {
      console.log("Error sending confirmation email.");
    }
  };

  return (
    <section id="Waitlist">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4">
          <div className="flex text-center items-center bg-[#E8DBFF] bg-opacity-100 p-36 rounded-2xl">
            <div className="flex flex-col">
              <div className="font-chillax font-medium text-[#2C174B] text-6xl drop-shadow-4xl mb-16">
                Get in on the action first!
              </div>
              <div className="font-chillax font-normal text-[#2C174B] mb-10">
                Excited for our launch?
                <br />
                Sign up with your email to join the waitlist and stay updated.
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="p-2 border-b border-[#2C174B] bg-transparent"
                />
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="p-2 border-b border-[#2C174B] bg-transparent"
                />
                <button
                  type="submit"
                  name="message"
                  className="font-chillax text-xl font-medium text-[#2C174B] px-6 py-1 rounded-full cursor-pointer hover:-translate-y-2 duration-300 shadow-4xl shadow-[#17125D]"
                >
                  Join!
                </button>
              </form>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
