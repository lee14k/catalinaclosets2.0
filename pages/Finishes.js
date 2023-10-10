import Head from "@/Components/Head";
import Navbar from "@/Components/Navbar";
import Imagegrid from "@/Components/Imagegrid";
import Finishbox from "@/Components/Finishbox";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Conbar from "@/Components/Conbar";
import CTA from "@/Components/CTA";
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
        backgroundImageUrl="/finish.jpg" // Use this path instead of "./finish.jpg"
      />
      <Finishbox
        header="Solids"
        description="Classic solid colors in a variety of shades will give your space a timeless finish"
        images={matteImages}
      />
      <div className="grid grid-cols-2">
        <Image src="/closets.jpg" width={500} height={500} />
        <Image src="/closets.jpg" width={500} height={500} />
        <Image src="/closets.jpg" width={500} height={500} />
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
      <div>
        <div>
          <h1>Solid Matte White</h1>
          <p>
            Our most popular finish by far, solid matte white can be used
            throughout an entire organization system or integrated as a
            complement or accent.
          </p>
        </div>

        <div>
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
