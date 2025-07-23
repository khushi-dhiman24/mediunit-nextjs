"use client";

import { useEffect, useState } from "react";


export default function StatsSection({sections}) {
  // console.log("inside sections",sections[5]?.text[3]);
  const stats = [
    { image: sections[5]?.images[0], number: 2850, label: sections[5]?.text[0] },
    { image: sections[5]?.images[1], number: 1245, label: sections[5]?.text[1] },
    { image: sections[5]?.images[2], number: 3358, label: sections[5]?.text[2] },
    { image: sections[5]?.images[3], number: 2496, label: sections[5]?.text[3] },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, i) =>
          count < stats[i].number ? count + Math.ceil(stats[i].number / 50) : stats[i].number
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative  bg-cover bg-center bg-no-repeat text-white py-16"
      style={{
        backgroundImage: `url('/bg-image.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(46,116,103,0.9)]"></div>

      <div className="relative container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10  p-6 "
          >
            <div className="bg-[#EE8961] rounded-full p-7 mb-4">
              <img
                src={stat.image}
                alt={stat.label}
                className="w-13 h-13 object-contain mx-auto"
              />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold">{counters[index]}</h3>
            <p className="text-base sm:text-lg mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
