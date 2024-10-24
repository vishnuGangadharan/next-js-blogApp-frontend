
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <div className="h-auto bg-black px-4 md:px-24">
      <div className=" md:flex">
        <div className="md:w-[60%]">
          <div className="">
            <p className="text-customGrayHome text-[20px] pt-10  md:pt-20  mb-4">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="text-kumbh text-white text-2xl md:text-5xl">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-customGrayHome hidden md:block font-inter text-[15px] mt-3">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
            <p className="text-customGrayHome block md:hidden font-inter text-[15px] mt-3">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future.
            </p>
          </div>
          <div className="text-white flex border-customGray mt-16">
            <div className="flex-1 border-[0.5px] border-customGray p-6 text-center">
              <p className="text-2xl">
                300<span className="text-customYellow">+</span>
              </p>
              <p className="text-[10px]">Resources available</p>
            </div>

            <div className="flex-1 border-[0.5px] border-customGray p-6 text-center">
              <p className="text-2xl">
                12k<span className="text-customYellow">+</span>
              </p>
              <p className="text-[10px]">Total Downloads</p>
            </div>

            <div className="flex-1 border-[0.5px] border-customGray p-6 text-center">
              <p className="text-2xl">
                10k<span className="text-customYellow">+</span>
              </p>
              <p className="text-[10px]">Active Users</p>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-[40%] mt-10 md:mt-0 ">
          <Image
            src="/Layer 1.png"
            alt="AI Image"
            // layout="responsive"
            width={300}
            height={200}
            className="object-cover"
          />
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6  font-inter">
            <div className="flex mt-16 mb-6">
              {["/man1.png", "/man2.png", "/man3.png", "/man4.png"].map(
                (src, index) => (
                  <div
                    className={index === 0 ? "" : "ml-[-0.75rem]"}
                    key={index}
                    style={{ zIndex: index }}
                  >
                    <Avatar className="rounded-full">
                      <AvatarImage
                        src={src}
                        alt={`Avatar ${index + 1}`}
                        className="object-cover rounded-full"
                        style={{
                          boxShadow: "0 0 0 2px #d1d5db",
                        }}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                )
              )}
            </div>
            <p className="sm:text-3xl text-white font-inter md:text-lg">Explore 1000+ resources</p>
            <p style={{color:'#98989A'}} className="text-sm font-inter mb-3 mt-2">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <Button style={{color:'#98989A'}} className=" border font-inter w-full sm:w-[250px] mt-2">
              Explore Resources
              <span className="text-customYellow">
                <GoArrowUpRight />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

