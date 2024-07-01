import React from "react";
import Image from "next/image";

const OurClasses = () => {
  return (
    <section className="container" id="Classes">
      <div>
        <h2 className="text-2xl font-bold uppercase mb-4 text-primary-500">
          Our classes
        </h2>
        <p className="w-[100%] md:w-[60%] mt-3 text-primary-300">
          Led by awe-inspiring instructors who are certified masters of their
          crafts, {`Mike's`} Gym group fitness classes are designed for maximum
          results and maximum fun. Looking for new ways to stay fit? {`We’ve`}{" "}
          got you covered with all your favorites, including Cycling, Zumba,
          HIIT, Yoga, Les Mills and more. Whether you’re just starting out on
          your fitness journey, or are a conditioned fitness enthusiast, our
          group fitness classes make it easy to stay consistent and reach your
          goals, all while being a part of an inclusive and supportive
          community.
        </p>
        <div className="flex gap-5 mt-5 overflow-auto">
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/classesGraphic1.png"
              alt="Gym center image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/classesGraphic2.png"
              alt="Gym center image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/classesGraphic3.png"
              alt="Gym center image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/classesGraphic4.png"
              alt="Gym center image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClasses;
