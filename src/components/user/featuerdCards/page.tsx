import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const FeaturedCards = () => {
  return (
    <div className="bg-black min-h-screen pb-10  md:px-0">
      <div className="pt-20 w-full h-auto md:pb-10">
        <div
          style={{ backgroundColor: "#1A1A1A" }}
          className="w-full flex flex-col justify-center items-center py-20"
        >
          <div className="flex justify-between items-center w-full max-w-6xl px-4 md:px-10">
            <div>
              <Button
                style={{ backgroundColor: "#333333" }}
                className="pb-2 text-textRandom"
              >
                Featured Blog
              </Button>

              <h1 className="text-white font-kumbh text-4xl mt-2">
                Visual Insights for the Modern Viewer
              </h1>
            </div>
            <Button className="pb-2 text-textRandom bg-black">
              View All <GoArrowUpRight className="text-customYellow" size={16} />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 justify-around mt-10 max-w-6xl mx-auto px-3 md:px-0">
        {/* Card 1 */}
        <Card className="bg-black border-none flex flex-col justify-between pt-6">
          <Image
            src="/cardimg1.png"
            alt="Mars Exploration"
            className="rounded-xl object-cover"
            height={400}
            width={600}
          />
          <div className="mt-4">
            <p className="font-inter text-white text-lg">
              Mars Exploration: Unveiling Alien Landscapes
            </p>
            <p className="font-inter text-textRandom text-sm mt-2 mb-2">
              Embark on a journey through the Red Planet's breathtaking
              landscapes and uncover the mysteries of Mars.
            </p>
          </div>
        </Card>

        <Card className="bg-black border-none flex flex-col justify-between">
          <Image
            src="/cardimg2.png"
            alt="Blockchain Explained"
            className="rounded-xl object-cover"
            height={400}
            width={600}
          />
          <div className="mt-4">
            <p className="font-inter text-white text-lg">
              Blockchain Explained: A Revolution in Finance
            </p>
            <p className="font-inter text-textRandom text-sm mt-2 mb-2">
              Delve into the world of blockchain technology and its transformative
              impact on the financial industry.
            </p>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="bg-black border-none flex flex-col justify-between">
          <Image
            src="/cardImg3.png"
            alt="Mental Health Awareness"
            className="rounded-xl object-cover"
            height={400}
            width={600}
          />
          <div className="mt-4">
            <p className="font-inter text-white text-lg">
              Breaking the Silence: Mental Health Awareness in the Workplace
            </p>
            <p className="font-inter text-textRandom text-sm mt-2 mb-2">
              An exploration of the importance of mental health awareness and the
              initiatives reshaping workplaces for employee well-being.
            </p>
          </div>
        </Card>

        <Card className="bg-black border-none flex flex-col justify-between">
          <Image
            src="/cardImg4.png"
            alt="Investment Strategies"
            className="rounded-xl object-cover"
            height={400}
            width={600}
          />
          <div className="mt-4">
            <p className="font-inter text-white text-lg">
              Revolutionizing Investment Strategies
            </p>
            <p className="font-inter text-textRandom text-sm mt-2 mb-2">
              An in-depth look at global efforts to conserve biodiversity and
              safeguard endangered species from extinction.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedCards;
