import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import Icons from "../icons/Icons";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-primary-200" id="About">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-xl font-bold uppercase text-primary-500">
            ABOUT MIKE FITNESS GYM
          </h3>
          <p className="text-justify text-primary-300">
            Mikegym is a gym founded on the pursuit of self-improvement. Our gym
            is architecturally designed to give you the best atmosphere for a
            satisfactory workout and a beautiful view of the city of Ibadan.{" "}
            <br />
            We make fitness fun, effective and simple. Our coaches lead the
            fitness industry when it comes to helping people get into the best
            shape of their lives and reaching their fitness goals safely.
          </p>
          <div className="hidden md:block">
            <Icons />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-xl font-bold uppercase text-primary-500">
            CONTACT US
          </h3>
          <div className="flex items-center gap-3 text-primary-300">
            <FaLocationArrow size={20} />
            <p>139, Mokola, Ibadan, Oyo state, Nigeria.</p>
          </div>
          <div className="flex items-center gap-3 text-primary-300">
            <FaPhone size={20} />
            <p>+2348166551122</p>
          </div>
          <div className="flex items-center gap-3 text-primary-300">
            <MdEmail size={20} />
            <p>mike@gmail.com</p>
          </div>
          <div className="md:hidden">
            <Icons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
