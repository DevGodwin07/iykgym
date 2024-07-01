import Benefits from "@/components/benefits/Benefits";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurClasses from "@/components/ourclasses/OurClasses";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="flow-root">
        <Hero />
        <Benefits />
        <OurClasses />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
