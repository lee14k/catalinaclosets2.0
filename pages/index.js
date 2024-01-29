import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Homehead from "@/Components/Homehead";
import Imagegrid from "@/Components/Imagegrid";
import Footer from "@/Components/Footer";
import Conbar from "@/Components/Conbar";
import Leftphoto from "@/Components/Leftphoto";
import { Oooh_Baby } from "next/font/google";
import Twophotobutton from "@/Components/Twophotobutton";
import NewNav from "@/Components/NewNav";
import Parallax from "@/Components/Parallax";
import Parafill from "@/Components/Parafill";
const Oooh = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const homeImages = [
    { link: "/allwhite.jpg", header: "Closets", page: "/Closets" },
    { link: "/babyblueone.jpg", header: "Cabinetry", page: "/Cabinetry" },
  ];
  return (
    <div className="mainbodywrapper ">
            <Parallax imageUrl="/darkwoodfinish.jpg">
      <Conbar phone="608-205-5000" email="info@catalinaclosets.com" />
      <NewNav />
      <Homehead />
     
      <div className="bg-white">
      
      
      <span className="text-6xl flex justify-center py-10 bg-white">
        <h1>Custom solutions for your entire home</h1>
        
      </span>
      
      <div className="bg-white">
      <Imagegrid images={homeImages} />
</div>
</div>


     
      <Leftphoto
        heading="Simplify your Life"
        description="Learn more about our custom solutions"
        imageSrc="/allwhite.jpg"
        imageAlt="Description of the image"
        imageWidth={1000}
        imageHeight={500}
        className="bg-white"
      />
            <Parafill />

      <Twophotobutton header="Customize your Space" />
      <Footer />

      </Parallax>

    </div>
  );
}
