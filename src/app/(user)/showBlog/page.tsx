import HidePart from "@/components/user/blockComonent/page";
import Footer1 from "@/components/user/footer1/page";
import FooterMain from "@/components/user/footerMain/page";
import Navbar from "@/components/user/navbar/page";
import React from "react";
import { FcLike } from "react-icons/fc";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import { TbLocationShare } from "react-icons/tb";

const BlogData = () => {
  return (
    <div className="bg-black text-white font-inter pb-28 md:pb-0">
     
      <div className="relative w-full h-[300px] lg:h-[400px]">
        <img
          src="/card1.png"
          className="w-full h-full object-cover"
          alt="The Rise of Artificial Intelligence in Healthcare"
        />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black to-transparent opacity-90"></div>
        <h1 className="absolute bottom-5 left-1/2 transform -translate-x-1/2  lg:text-3xl text-white z-10 text-center">
          The Rise of Artificial Intelligence in Healthcare
        </h1>
      </div>

      <div className="flex flex-col md:flex-row mt-5 px-5 lg:px-20">
        <div className="block md:hidden">
          <HidePart />
        </div>

        <div className="w-full md:w-[60%] space-y-6 lg:px-10">
          <div>
            <p className="text-xl lg:text-2xl">Introduction</p>
            <p className="mt-2 text-textRandom text-[14px] lg:text-base">
              Artificial Intelligence (AI) has emerged as a transformative force
              in the healthcare industry, reshaping patient care, diagnostics,
              and research. In this blog post, we explore the profound impact of
              AI in healthcare, from revolutionizing diagnostic accuracy to
              enhancing patient outcomes.
            </p>
          </div>

          <div>
            <p className="text-xl lg:text-2xl">Artificial Intelligence (AI)</p>
            <p className="mt-2 text-textRandom text-[14px] lg:text-base">
              Artificial Intelligence (AI) has permeated virtually every aspect
              of our lives, and healthcare is no exception. The integration of
              AI in healthcare is ushering in a new era of medical practice,
              where machines complement the capabilities of healthcare
              professionals, ultimately improving patient outcomes and the
              efficiency of the healthcare system.
            </p>
          </div>

          <div>
            <p className="text-xl lg:text-2xl">Predictive Analytics and Disease Prevention</p>
            <p className="mt-2 text-textRandom text-[14px] lg:text-base">
              Artificial Intelligence (AI) has permeated virtually every aspect
              of our lives, and healthcare is no exception. The integration of
              AI in healthcare is ushering in a new era of medical practice,
              where machines complement the capabilities of healthcare
              professionals, ultimately improving patient outcomes and the
              efficiency of the healthcare system.
            </p>
          </div>
        </div>

        <div className="hidden md:block w-full md:w-[40%]">
          <HidePart />
        </div>
      </div>
      <div className="flex justify-between lg:px-20 mt-10">
        <p className="pl-2">Similar News</p>
        <div className="h-[30px] rounded-lg w-[160px] font-kumbh text-textRandom border border-inputBg bg-black flex pl-3 items-center ">
            <p className="pr-2 text-[14px]">View All News</p>
            <GoArrowUpRight className="text-customYellow" size={16} />
          </div>
      </div>
      <Footer1/>

    </div>
  );
};

export default BlogData;
