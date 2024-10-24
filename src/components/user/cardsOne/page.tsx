import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { TbLocationShare } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

const CardOne = () => {
  return (
    <div className="min-h-full bg-black text-white md:px-24 md:pt-16 ">
      <Card className="bg-black font-inter md:flex border-none">
        <div className="flex justify-center items-center px-4 md:px-0">
          <Image
            src="/evng.png"
            height={500}
            width={600}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="p-10 w-full">
          <h1 className="text-white font-inter text-2xl mb-3">
            Global Climate Summit Addresses Urgent Climate Action
          </h1>
          <p className="font-inter text-textRandom text-[15px]">
            World leaders gathered at the Global Climate Summit to discuss urgent
            climate action, emissions reductions, and renewable energy targets.
          </p>
          <div className="flex gap-5 mb-3 mt-3">
            <div>
              <p className="text-textRandom font-inter">Category</p>
              <p className="text-white font-inter">Environment</p>
            </div>
            <div>
              <p className="text-textRandom font-inter">Publication Date</p>
              <p className="text-white font-inter">October 10, 2023</p>
            </div>
            <div>
              <p className="text-textRandom font-inter">Author</p>
              <p className="text-white font-inter">Jane Smith</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-textRandom font-inter">Like Share</div>
            <Button style={{ backgroundColor: "#1A1A1A" }} className="text-white font-inter">
              Read More
            </Button>
          </div>
        </div>
      </Card>

      {/* Responsive Card Grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3 px-4 md:px-0">
        {/* Card 1 */}
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <CiHeart className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <TbLocationShare className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
              </div>
              <Button style={{ backgroundColor: "#1A1A1A" }} className="pb-2 text-textRandom">
                Read More <GoArrowUpRight className="text-customYellow" size={16} />
              </Button>
            </div>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <CiHeart className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <TbLocationShare className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
              </div>
              <Button style={{ backgroundColor: "#1A1A1A" }} className="pb-2 text-textRandom">
                Read More <GoArrowUpRight className="text-customYellow" size={16} />
              </Button>
            </div>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <CiHeart className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <TbLocationShare className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
              </div>
              <Button style={{ backgroundColor: "#1A1A1A" }} className="pb-2 text-textRandom">
                Read More <GoArrowUpRight className="text-customYellow" size={16} />
              </Button>
            </div>
          </div>
        </Card>
        <Card className="bg-black border-none">
          <Image
            src="/card1.png"
            alt=""
            className="rounded-xl"
            height={500}
            width={700}
          />
          <div>
            <p className="font-inter text-white mt-2">
              A Decisive Victory for Progressive Policies
            </p>
            <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <CiHeart className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
                <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                  <TbLocationShare className="text-textRandom mr-2" />
                  <p className="text-textRandom">22k</p>
                </div>
              </div>
              <Button style={{ backgroundColor: "#1A1A1A" }} className="pb-2 text-textRandom">
                Read More <GoArrowUpRight className="text-customYellow" size={16} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardOne;
