import React from "react";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { CiTwitter } from "react-icons/ci";
import { FaMedium } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const FooterMain = () => {
  return (
    <div className="text-customGrayHome bg-black pb-80 md:pb-0">
      <div className=" flex flex-wrap lg:flex-nowrap justify-around p-6 lg:gap-5 md:px-24">
        <div className="flex flex-col space-y-2 mb-6 lg:mb-0 lg:w-1/4">
          <p className="font-inter text-white mb-6">Home</p>
          <p>Features</p>
          <p>Blogs</p>
          <div className="flex gap-2 items-center">
            <p className="mt-2">Resources</p>
            <Button className="pb-2 text-textRandom bg-black">New</Button>
          </div>
          <p>Testimonials</p>
          <p>Contact Us</p>
          <p>Newsletter</p>
        </div>

        {/* Second column */}
        <div className="flex flex-col space-y-2 mb-6 lg:mb-0 lg:w-1/4">
          <p className="font-inter text-white mb-6">News</p>
          <p>Trending Stories</p>
          <p>Featured Videos</p>
          <p>Technology</p>
          <p>Testimonials</p>
          <p>Health</p>
          <p>Politics</p>
          <p>Environment</p>
        </div>

        <div className="flex flex-col space-y-2 mb-6 lg:mb-0 lg:w-1/4">
          <p className="font-inter text-white mb-6">Blogs</p>
          <p>Quantum Computing</p>
          <p>AI Ethics</p>
          <p>Space Exploration</p>
          <p>Renewable Energy</p>
          <p>Biohacking</p>
        </div>

        <div className="flex flex-col space-y-2 mb-6 lg:mb-0 lg:w-1/4">
          <p className="font-inter text-white mb-6">Podcasts</p>
          <p>AI Revolution</p>
          <div className="flex gap-2 items-center">
            <p className="mt-2">AI Revolution</p>
            <Button className="pb-2 text-textRandom bg-black">New</Button>
          </div>
          <p>TechTalk AI</p>
          <p>AI Conversations</p>
        </div>

        <div className="grid sm:grid-cols-3  md:flex md:flex-col md:space-y-4 lg:w-1/4">
  <p className="font-inter text-white mb-6 col-span-3 md:col-auto">Resources</p>

  <div className="h-[30px] rounded-lg md:w-[160px]  w-[120px] font-inter text-textRandom border border-inputBg bg-black flex pl-3 items-center ">
    <p className="pr-2 text-[14px]">Whitepapers</p>
    <GoArrowUpRight className="text-customYellow" size={16} />
  </div>

  <div className="h-[30px] rounded-lg  w-[100px] md:w-[160px] font-inter text-textRandom border border-inputBg bg-black flex pl-3 items-center ">
    <p className="pr-2 text-[14px]">Ebooks</p>
    <GoArrowUpRight className="text-customYellow" size={16} />
  </div>

  <div className="h-[30px] rounded-lg md:w-[160px] w-[100px] font-inter text-textRandom border border-inputBg bg-black flex pl-3 items-center ">
    <p className="pr-2 text-[14px]">Reports</p>
    <GoArrowUpRight className="text-customYellow" size={16} />
  </div>

  <div className="h-[30px] rounded-lg w-[160px] font-inter text-textRandom border border-inputBg bg-black flex pl-3 items-center ">
    <p className="pr-2 text-[14px]">Research Papers</p>
    <GoArrowUpRight className="text-customYellow" size={16} />
  </div>
</div>

      </div>
      <hr className="border-t border-textRandom mx-24 pt-3 pb-4" />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around font-inter text-inputText">
        <div className="flex justify-center space-x-4 my-2 md:hidden">
          <CiTwitter className="text-white hover:text-customYellow transition-colors" />
          <FaMedium className="text-white hover:text-customYellow transition-colors" />
          <CiLinkedin className="text-white hover:text-customYellow transition-colors" />
        </div>
        <div className="flex items-center space-x-4">
          <p className="cursor-pointer">Terms & Conditions</p>
          <div className="border-l h-4 mx-2"></div>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>

        <div className="hidden md:flex justify-center space-x-4 my-2">
          <CiTwitter className="text-white hover:text-customYellow transition-colors" />
          <FaMedium className="text-white hover:text-customYellow transition-colors" />
          <CiLinkedin className="text-white hover:text-customYellow transition-colors" />
        </div>
        <p className="text-center mt-2 md:mt-0">
          © 2024 FutureTech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
