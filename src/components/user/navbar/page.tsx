"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from 'next/navigation'; 
import Image from "next/image";
import { useUserStore } from "@/lib/store/store";
import Cookies from 'js-cookie';


const Navbar = () => {
 
  const router = useRouter();
   const clearUser = useUserStore((state) => state.clearUser);
  const [isOpen, setIsOpen] = useState(false);
  const user = useUserStore((state) => state.user);


  const NavigateProfile = () =>{
    router.push('/profile')
  }


  const handleLogin = () =>{
    router.push('/login')
  }

  const handleLogout =() => {
    clearUser()
    Cookies.remove('authToken');
      router.push('/');
  }
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        style={{ backgroundColor: "#141414" }}
        className="text-customGray text-[15px] text-center py-4 flex justify-center items-center "
      >
        Subscribe to our Newsletter For
        <span className="hidden md:inline"> New & Latest</span>
        Blogs and Resources
        <span className="text-customYellow ml-2">
          <GoArrowUpRight size={16} />
        </span>
      </div>

      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className=" text-white py-4 px-4 flex justify-between  md:justify-around items-center"
      >
        <div className="flex justify-center  sm:justify-start ">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={150}
            height={150}
            className=""
          />
        </div>

        <div className="hidden md:flex space-x-8 text-[18px]">
          <a href="#" className="text-customGray hover:text-customYellow">
            Home
          </a>
          <a href="#" className="text-customGray hover:text-customYellow">
            News
          </a>
          <a href="#" className="text-customGray hover:text-customYellow">
            Podcasts
          </a>
          <a href="#" className="text-customGray hover:text-customYellow">
            Resources
          </a>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <button className="bg-yellow-500 text-sm text-black py-2 px-3 rounded-md hover:bg-yellow-600">
            Contact Us
          </button>
          { user && 
          <Avatar  onClick={NavigateProfile} className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> }

          {user ?
          <p  onClick={ handleLogout} className="hover:text-customYellow cursor-pointer">
           Logout
          </p>
            :
          <p  onClick={ handleLogin} className="hover:text-customYellow cursor-pointer">
           Login
          </p> }

        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <HiOutlineMenuAlt3 size={24} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          style={{ backgroundColor: "#1A1A1A" }}
          className=" text-white md:hidden flex flex-col space-y-4 px-6 py-4"
        >
          <a href="#" className="hover:text-customYellow">
            Home
          </a>
          <a href="#" className="hover:text-customYellow">
            News
          </a>
          <a href="#" className="hover:text-customYellow">
            Podcasts
          </a>
          <a href="#" className="hover:text-customYellow">
            Resources
          </a>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600">
            Contact Us
          </button>
          { user && 
          <Avatar  onClick={NavigateProfile} className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> }
          <a href="#" className="hover:text-customYellow">
         {user ? 'Logout' : 'Login'}   
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
