import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-60px)] mt-[60px] pt-[90px] bg-hero bg-no-repeat bg-cover bg-right md:bg-top">
      <div className="container">
        <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold leading-tight text-white">
          Where Fitness <br className="hidden md:block" /> Becomes Your{" "}
          <br className="hidden md:block" /> Lifestyle
        </h1>
        <h3 className="mt-7 text-2xl uppercase text-center md:text-left text-accent-500">
          Become a member
        </h3>
        <p className="mt-3 text-center md:text-left text-white">
          Mike&apos;s gym is the best gym center in the city of Ibadan, we have
          <br className="hidden md:block" />
          skillful and profesional instructors.
        </p>
        <div className="mt-7 flex items-center flex-col md:flex-row justify-center md:justify-start gap-5">
          <button className="px-10 py-2 rounded-full cursor-pointer text-white bg-primary-400">
            Book Now
          </button>
          <Link href="#" className="underline text-accent-400">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
