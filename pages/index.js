import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Homehead from "@/Components/Homehead";
import Imagegrid from "@/Components/Imagegrid";
import CTA from "@/Components/CTA";
import Footer from "@/Components/Footer";
import Conbar from "@/Components/Conbar";
import Leftphoto from "@/Components/Leftphoto";
import { Oooh_Baby } from "next/font/google";
import Twophotobutton from "@/Components/Twophotobutton";
import Iconbar from "@/Components/Iconbar";
import NewNav from "@/Components/Newnav";
const Oooh = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const homeImages = [
    { link: "/bedroom.jpg", header: "Closets", page: "/Bedrooms" },
    { link: "/homeoffice.jpg", header: "Cabinetry", page: "/Office" },
  ];
  return (
    <div className="mainbodywrapper ">
      <Conbar phone="608-205-5000" email="info@catalinaclosets.com" />
      <NewNav />
      <Homehead />
      <span className="text-6xl flex justify-center my-10">
        <h1>Custom solutions for your entire home</h1>
      </span>
      <Imagegrid images={homeImages} />
     

     
      <Leftphoto
        heading="Your Heading Here"
        description="Your description here."
        imageSrc="/finish.jpg"
        imageAlt="Description of the image"
        imageWidth={'full'}
        imageHeight={500}
      />
      <Twophotobutton header="Customize your Space" />
      <Iconbar />
      <Footer />
    </div>
  );
}
