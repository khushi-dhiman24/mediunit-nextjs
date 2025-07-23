"use client";

import Image from "next/image";

export default function HowItWorksSection({sections}) {
    
    // console.log("inside sections",sections[6]?.text[8]);

    const steps = [
        {
            title: sections[6]?.text[2],
            description: sections[6]?.text[3],
            icon: sections[6]?.images[1],
        },
        {
            title: sections[6]?.text[4],
            description: sections[6]?.text[5],
            icon: sections[6]?.images[2],
        },
        {
            title: sections[6]?.text[6],
            description:sections[6]?.text[7],
            icon: sections[6]?.images[3],
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <img
                        src= {sections[6]?.images[0]}
                        alt="Therapy Session"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-lg"
                    />
                </div>
                <div>
                    <p className="text-orange-500 uppercase tracking-wide mb-2">{sections[6]?.text[0]}</p>
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">{sections[6]?.text[1]}</h2>

                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex items-center justify-center border-2 border-dashed border-[#FF9B91] rounded-full w-16 h-16 sm:w-20 sm:h-20">
                                    <img
                                        src={step.icon}
                                        alt="Step Icon"
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-6 text-white bg-[#257568] hover:bg-[#EE8961]  hover:-translate-y-2 focus:ring-4 focus:ring-[#257568] font-medium rounded-lg text-sm px-6 py-3 transition duration-300">
                        {sections[6]?.text[8]}
                    </button>
                </div>
            </div>
        </section>
    );
}
