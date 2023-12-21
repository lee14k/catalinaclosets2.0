import Head from "@/Components/Head";
import Navbar from "@/Components/Navbar";
import Imagegrid from "@/Components/Imagegrid";
import Finishbox from "@/Components/Finishbox";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Conbar from "@/Components/Conbar";
import CTA from "@/Components/CTA";

import Swatchspace from "@/Components/Swatchspace";
export default function Finishes() {
  const matteImages = [
    { link: "/matteone.png", header: "Matte 1" },
    { link: "/matteone.png", header: "Matte 1" },
    { link: "/matteone.png", header: "Matte 1" },
  ];
  return (
    <div>
      <Conbar />
      <Navbar />
      <Head
        head="Finishes"
        caption="Uniboard© custom colors and finishes allow for whatever you can dream of, from solids of all colors to wood grains of all patterns"
        backgroundImageUrl="/finish.jpg"
      />
    
      <Finishbox
        header="Solids"
        description="Classic solid colors in a wide variety of shades will give your space a timeless finish and endless appeal."
        images={matteImages}
      />
      <div className="flex gap-10 justify-center items-center">

     <Swatchspace
     header='Super White'
      imageSrc="/closets.jpg"
    imageWidth={500}
    imageHeight={300}
     imageSrcSpace="/homeoffice.jpg"
    imageWidthSpace={720}
    imageHeightSpace={500}
      />
   <Swatchspace
   header="Baby Blue"
      imageSrc="/homeoffice.jpg"
    imageWidth={400}
    imageHeight={900}
    
      />
      </div>
      <Finishbox
        header="Woodgrains"
        description="lovely mattes"
        images={matteImages}
      />
      <Finishbox
        header="Linens and Specialities"
        description="lovely mattes"
        images={matteImages}
      />
      <div >
        <div className="grid grid-cols-2 my-48">
        <div className="mx-24 ">
 <h1 className="text-4xl">Solid Matte White</h1>
          <p className="text-xl">
            Our most popular finish by far, solid matte white can be used
            throughout an entire organization system or integrated as a
            complement or accent.
          </p>
        </div>
           <div>
           <Image
                src="/allwhite.jpg"
                alt="Picture of the author"
                width={600}
                height={900}
                />
        </div>
        </div>

        <div className="flex">
          <img src="/tfl.png" />
          <h1>Materials</h1>
          <p>
            We specialize in usage of TFL, perfect for homes of all shapes and
            sizes, durable, resistant, and reliable
          </p>
          <button>Learn More</button>
        </div>
        <CTA
          headlineone="Get started with a free consultation"
          headlinetwo="We'll help you find the right solution for your home"
          buttontext="Schedule a free consultation"
        />
        <div>
          <h1>Looking to customize further?</h1>
          <p>
            We offer custom accessories, hardware, doors, and drawers to fit
            your needs
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
