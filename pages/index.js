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
    { link: "/bedroom.jpg", header: "Bedroom" },
    { link: "/homeoffice.jpg", header: "Home Office" },
    { link: "/kitchenpantry.jpg", header: "Kitchen Pantry" },
    { link: "/laundryroom.jpg", header: "Laundry Room" },
    { link: "/living.jpg", header: "Living Room" },
    { link: "/mudroom.jpg", header: "Mudroom" },
    { link: "/library.jpg", header: "Library" },
    { link: "/library.jpg", header: "Garage" },
  ];
  return (
    <div>
      <Conbar phone="608-205-5000" email="info@catalinaclosets.com" />
      <Navbar />
      <Homehead />
      <span className="text-6xl flex justify-center my-10">
        <h1>Custom solutions for your entire home</h1>
      </span>
      <Imagegrid images={homeImages} />
      <Rightphoto
        heading="From tight squeezes to full walk-ins, we have a closet for you"
        description="We offer a wide variety of closet solutions to fit your needs. Whether you're looking for a simple reach-in closet or a full walk-in, we have the solution for you. Our designers will work with you to create a custom solution that fits your needs and your budget."
      />
      <CTA
        headlineone="Get started with a free consultation"
        headlinetwo="We'll help you find the right solution for your home"
        buttontext="Schedule a free consultation"
      />
      <Leftphoto heading="explore finishes" description="lorem" />
      <Twophotobutton />
      <Iconbar />
      <Footer />
    </div>
  );
}
