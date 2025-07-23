"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection({sections}) {

  // console.log("inside sections",sections[1]?.text[1]);

  const services = [
    {
      title: "Couple Therapy",
      description:
        "Duis aute irure dolor reprehenderit in voluptate velit esse fugiat...",
      image: "/Services-section-img1.jpg",
      icon: "/type-img2.png",
    },
    {
      title: "Family Counseling",
      description:
        "Ruis aute irure dolor reprehenderit in voluptate velit esse fugiat...",
      image: "/services-section-img-2.jpg",
      icon: "/type-img3.png",
    },
    {
      title: "Anxiety Disorder",
      description:
        "Nuis aute irure dolor reprehenderit in voluptate velit esse fugiat...",
      image: "/Services-section-img-3.jpg",
      icon: "/type-img4.png",
    },
    {
      title: "Personal Meeting",
      description:
        "Guis aute irure dolor reprehenderit in voluptate velit esse fugiat...",
      image: "/services-section-img-4.jpg",
      icon: "/type-img1.png",
    },
  ];

  return (
    <section className="bg-[#f9f6f2] py-12">
      <div className="text-center mb-8 px-4">
        <p className="text-orange-500 font-medium text-sm md:text-base">
          {sections[1]?.text[0]}
        </p>
        <h2 className="text-2xl md:text-4xl font-serif mt-2 leading-tight">
          {sections[1]?.text[1]}
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-10 relative"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-4">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl w-full transition-transform duration-400 hover:translate-y-2 h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-[#ee8961] p-4 rounded-full shadow-md">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-green-700 font-medium hover:underline text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
