import React from "react";
import Card from "../card/Card";
import { HiAcademicCap, HiUsers } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import Image from "next/image";
import Button from "../button/Button";

const Benefits = () => {
  const cards = [
    {
      id: 1,
      icon: <HiAcademicCap size={25} />,
      title: "Expert And Qualified Trainers",
      desc: `We have best, skilled, and qualified trainers in Mike's gym. We have trainers 
      with over 10 years of working, teaching and training experience.`,
    },
    {
      id: 2,
      icon: <IoCalendarOutline size={25} />,
      title: "Flexible Workout Time",
      desc: `We have special plans that allows families to access our fitness services at
    cheap and discount prices. We also provide bonuses to our VIP members.`,
    },
    {
      id: 3,
      icon: <HiUsers size={25} />,
      title: "Special Plans And Bonus",
      desc: `Mike's gym has one of the best flexible workout time schedule. We
    provide fitness services for our members, base on their convinient time.`,
    },
  ];
  return (
    <section className="w-full py-10" id="Benefits">
      <div className="container">
        <h1 className="text-2xl font-bold uppercase text-primary-500">
          {`It's`} more than just gym
        </h1>
        <p className="text-primary-300 mt-3">
          We have world best fitness equipments, instructors and we provide
          amazing and <br /> affordable fitness classes for everyone.
        </p>
        <div className="flex flex-col md:flex-row mt-5 gap-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-14">
          <div className="flex-1 min-h-[300px] relative">
            <Image
              fill
              src="/images/benefitsGraphic.png"
              alt="Benefits Section Image"
            />
          </div>
          <div className="flex-[2]">
            <h2 className="text-2xl font-bold uppercase mb-4 text-primary-500">
              MILLIONS OF MEMBERS GETTING FIT DAILY
            </h2>
            <p className="w-[85%] text-primary-300">
              Millions of members around the world always go for workout to have
              good shapes and to improve health status. Regular physical
              activity is one of the most important things you can do for your
              health. Being physically active can improve your brain health,
              help manage weight, reduce the risk of disease, strengthen bones
              and muscles, and improve your ability to do everyday activities.
            </p>
            <button className="font-bold bg-primary-400 px-10 py-2 mt-6 text-white rounded-full transition-all duration-300 hover:bg-primary-400/70">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
