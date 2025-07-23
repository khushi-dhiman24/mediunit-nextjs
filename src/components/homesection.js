"use client";

import React from "react";
import Button from "./button";
import SocialIcons from "./socialicons";

export default function Section({sections}) {

// console.log("inside sections",sections[0]?.text[4]);

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/Home-01-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(46,116,103,0.8)]"></div>
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row justify-between items-center h-full px-4 md:px-8">
        <div className="text-white max-w-lg text-center md:text-left">
          <p className="text-sm uppercase mb-2"><img src={sections[0]?.images[0]} alt="Line" className="h-5w-auto" />{sections[0]?.text[0]}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1">{sections[0]?.text[1]}</h1>

          <p className="mb-2 text-sm sm:text-base">{sections[0]?.text[2]}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button  text={sections[0]?.text[3]} className="bg-[#EE8961]"/>
            <Button text={sections[0]?.text[4]} />
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <SocialIcons />
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4 mb-8 md:mb-0 items-center">
          <div className="white-box w-[40vh] h-[40vh] rounded-3xl  bg-white">
            <img
              src={sections[0]?.images[5]}
              alt="Big Session"
              className="object-cover rounded-3xl w-full h-full"
            />
          </div>
          <div className=" translate-y-20 h-[80vh]">
            <div className="w-[200vh] h-[220vh] sm:w-[260px] sm:h-[260px] rounded-3xl overflow-hidden drop-shadow-lg border-opacity-10">
              <img
                src={sections[0]?.images[7]}
                alt="Small Session Top"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
            <div className="w-[340vh] h-[340px] sm:w-[300px] sm:h-[280px] rounded-3xl overflow-hidden drop-shadow-lg border-opacity-10">
              <img
                src={sections[0]?.images[8]}
                alt="Small Session Bottom"
                className="object-cover w-full h-full rounded-3xl mt-15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
