"use client"

import Contact from "@/component/Contact";
import Hero from "@/component/Hero";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import About from "@/component/About"; // Add this line
import Image from "next/image";
import { GrProjects } from "react-icons/gr";
import AOS from "aos"
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init ({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      offset: 160,

    });
    AOS.refresh(); 
  }, []);
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}