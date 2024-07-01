"use client";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { openAsBlob } from "fs";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      path: "#",
    },
    {
      id: 2,
      title: "Benefits",
      path: "#Benefits",
    },
    {
      id: 3,
      title: "Our Classes",
      path: "#Classes",
    },
    {
      id: 4,
      title: "Contact Us",
      path: "#Contact",
    },
  ];

  return (
    <header className="w-full h-[60px] flex items-center fixed py-5 font-semibold text-white md:text-primary-500 bg-gray-200 z-50">
      <div className="container flex justify-between items-center">
        <div>
          <Image
            width={250}
            height={120}
            src="/images/logo/mikegym.svg"
            alt=""
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <nav
          className={`${
            open ? "right-0" : "right-[-100%]"
          } w-[70%] md:block md:w-auto h-screen md:h-auto px-5 md:px-0 pt-20 md:pt-0 absolute 
          md:static top-0 duration-500 ease-in bg-primary-400 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row gap-5">
            {links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.id}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <Link href="#About">About Us</Link>
          <button className="bg-primary-400 px-10 py-2 text-white rounded-full transition-all duration-300 hover:bg-primary-400/70">
            Join
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
