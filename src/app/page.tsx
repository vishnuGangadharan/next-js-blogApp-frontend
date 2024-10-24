import CardOne from "@/components/user/cardsOne/page";
import FeaturedCards from "@/components/user/featuerdCards/page";
import Footer1 from "@/components/user/footer1/page";
import FooterMain from "@/components/user/footerMain/page";
import HeroSection from "@/components/user/heroSection/page";
import HeroSectionCard from "@/components/user/heroSectionCard/page";
import Navbar from "@/components/user/navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className='min-h-screen w-full '>
        <Navbar/>
        <HeroSection/>
        <HeroSectionCard/>
        <CardOne/>
        <FeaturedCards/>
        <Footer1/>
        <FooterMain/>
    </div>   
  );
}
