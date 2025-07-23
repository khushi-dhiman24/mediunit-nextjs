"use client";

import Navbar from "../components/navbar";
import Section from "../components/homesection";
import ServicesSection from "../components/servicesection";
import AboutUsSection from "../components/aboutsection";
import AppointmentSection from "../components/appointmentsection";
import CaseStudiesSection from "../components/projectsection";
import StatsSection from "../components/statssection";
import HowItWorksSection from "../components/worksection";
import TeamSection from "../components/teamsection";
import TestimonialsSection from "../components/testimonialsection";
import BlogSection from "../components/blogsection";
import Footer from "../components/footer";
import { fetchimage } from "@/components/fetchimage";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [sections, setSections] = useState([]);
 
  useEffect(() => {
    const getData = async () => {
      const data = await fetchimage(3792);
     
      console.log(data)
      if (data) setSections(data);    
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Section sections={sections}/>
      <ServicesSection sections={sections}/>
      <AboutUsSection sections={sections}/>
      <AppointmentSection sections={sections}/>
      <CaseStudiesSection sections={sections}/>
      <StatsSection sections={sections}/>
      <HowItWorksSection sections={sections}/>
      <TeamSection sections={sections}/>
      <TestimonialsSection sections={sections}/>
      <BlogSection sections={sections}/>
      <Footer sections={sections}/>
    </>
  );
}

