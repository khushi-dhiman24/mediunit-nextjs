"use client";

import { CheckCircle } from "lucide-react";


export default function AboutUsSection({sections}) {

  // console.log("inside sections",sections[2]?.text[]);
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        <div className="relative md:w-1/2 mb-10 md:mb-0">

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={sections[2]?.images[0]}
              alt="Couple Therapy"
              width={467}
              height={483}
              className=" object-cover"
            />
          </div>
          <div className="absolute left-8 bottom-[-50px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={sections[2]?.images[1]}
              alt="Group Therapy"
              width={341}
              height={246}
              className="w-64 h-auto object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <p className="text-orange-500 font-medium mb-2">{sections[2]?.text[0]}</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            {sections[2]?.text[1]}
          </h2>
          <p className="text-gray-600 mb-6">{sections[2]?.text[2]}.</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              "Psychodynamic Therapy",
              "Couple Problem Therapy",
              "Free Consultants",
              "Mental Satisfactions",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="text-orange-500 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 text-white bg-[#257568] hover:bg-[#EE8961]  hover:-translate-y-2 focus:ring-4 focus:ring-[#257568] font-medium rounded-lg text-sm px-6 py-3 transition duration-300">
            {sections[2]?.text[3]}
          </button>
        </div>
      </div>
    </section>
  );
}
