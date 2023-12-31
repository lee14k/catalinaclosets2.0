import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from "../Components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Homehead from "@/Components/Homehead";
import Imagegrid from "@/Components/Imagegrid";
import CTA from "@/Components/CTA";
import Footer from "@/Components/Footer";
import Rightphoto from "@/Components/Rightphoto";
import Conbar from "@/Components/Conbar";
import Leftphoto from "@/Components/Leftphoto";
import { Oooh_Baby } from "next/font/google";
import Twophotobutton from "@/Components/Twophotobutton";
import Iconbar from "@/Components/Iconbar";
const Oooh = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const homeImages = [
    { link: "/bedroom.jpg", header: "Bedroom", page: '/Bedrooms'},
    { link: "/homeoffice.jpg", header: "Home Office", page: '/Office' },
    { link: "/kitchenpantry.jpg", header: "Kitchen Pantry", page: '/Kitchen' },
    { link: "/laundryroom.jpg", header: "Laundry Room", page: '/Laundry' },
    { link: "/living.jpg", header: "Living Room", page: '/Livingrooms' },
    { link: "/mudroom.jpg", header: "Mudroom", page: '/Mudrooms' },
    { link: "/library.jpg", header: "Library", page: '/Library' },
    { link: "/library.jpg", header: "Garage", page: '/Garage' },
  ];
  return (
    <div className="mainbodywrapper">
      <Conbar phone="608-205-5000" email="info@catalinaclosets.com" />
      <Navbar />
      <Homehead />
      <span className="text-6xl flex justify-center my-10">
        <h1>Custom solutions for your entire home</h1>
      </span>
      <Imagegrid images={homeImages} />
   <Rightphoto 
    heading="Your Heading Here"
    description="Your description here."
    imageSrc="/homeoffice.jpg"
    imageAlt="Description of the image"
    imageWidth={600}
    imageHeight={900}
/>

      <CTA
        headlineone="Get started with a free consultation"
        headlinetwo="We'll help you find the right solution for your home"
        buttontext="Schedule a free consultation"
      />
     <Leftphoto 
    heading="Your Heading Here"
    description="Your description here."
    imageSrc="/finish.jpg"
    imageAlt="Description of the image"
    imageWidth={600}
    imageHeight={500}
/>
      <Twophotobutton header="Customize your Space" />
      <Iconbar />
      <Footer />
    </div>
  );
}
