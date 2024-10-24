import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Card } from "@/components/ui/card";

const Footer1 = () => {
  return (
    <div className="bg-inputBackground pt-10 pb-14 px-4 md:px-24 text-white gap-5">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
        <Image src='/Logo2.png' height={100} width={100} alt="Logo" />

        <div className="text-center lg:text-left">
          <p
            style={{ backgroundColor: "#333333" }}
            className="p-2 font-inter inline-block"
          >
            Learn, Connect, and Innovate
          </p>

          <h1 className="text-2xl md:text-4xl font-kumbh mt-2 mb-3">
            Be Part of the Future Tech Revolution
          </h1>
          <p
            style={{ color: "#7E7E81" }}
            className="text-[13px] md:text-[15px]"
          >
            Explore the latest news from around the world. We bring you
            up-to-the-minute updates on the most significant events, trends, and
            stories. Discover the world through our news coverage.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 md:gap-10 mt-8 md:mt-10  p-4">
        <Card className="bg-inputBackground w-full md:w-[300px] border-none">
          <div className="md:ml-10">
            <div className="flex justify-between mb-5">
              <p className="font-inter text-white mt-3">Resource Access</p>
              <div className="w-10 h-10 rounded-full bg-customYellow flex justify-center items-center">
                <GoArrowUpRight className="text-black" size={24} />
              </div>
            </div>
            <p style={{ color: "#98989A" }} className="font-inter text-textRandom mb-6 text-[13px]">
              Visitors can access a wide range of resources, including ebooks,
              whitepapers, reports.
            </p>
          </div>
        </Card>

        <Card className="bg-inputBackground w-full md:w-[300px] border-none">
          <div className="md:ml-10">
            <div className="flex justify-between mb-5">
              <p className="font-inter text-white mt-3">Community Forum</p>
              <div className="w-10 h-10 rounded-full bg-customYellow flex justify-center items-center">
                <GoArrowUpRight className="text-black" size={24} />
              </div>
            </div>
            <p style={{ color: "#98989A" }} className="font-inter text-textRandom mb-6 text-[13px]">
              Join our active community forum to discuss industry trends, share insights,
              and collaborate with peers.
            </p>
          </div>
        </Card>

        <Card className="bg-inputBackground w-full md:w-[300px] border-none">
          <div className="md:ml-10">
            <div className="flex justify-between mb-5">
              <p className="font-inter text-white mt-3">Tech Events</p>
              <div className="w-10 h-10 rounded-full bg-customYellow flex justify-center items-center">
                <GoArrowUpRight className="text-black" size={24} />
              </div>
            </div>
            <p style={{ color: "#98989A" }} className="font-inter text-textRandom mb-6 text-[13px]">
              Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Footer1;
