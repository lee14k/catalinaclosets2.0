import Head from "@/Components/Head";
import Imagegrid from "@/Components/Imagegrid";
import Navbar from "../Components/Navbar";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import DesignIdeaSlider from '../components/DesignIdeaSlider';

export default function Closets() {
  const accImages = [
    { link: "/bedroom.jpg", header: "Bedroom" },
    { link: "/homeoffice.jpg", header: "Home Office" },
    { link: "/kitchenpantry.jpg", header: "Kitchen Pantry" },
    { link: "/laundryroom.jpg", header: "Laundry Room" },
    { link: "/living.jpg", header: "Living Room" },
    { link: "/mudroom.jpg", header: "Mudroom" },
    { link: "/library.jpg", header: "Library" },
    { link: "/library.jpg", header: "Garage" },
  ];
        const images = [
    { link: "/bedroom.jpg" },
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
      <Conbar />
      <Navbar />
      <Head
        head="Closets"
        caption="Uniboard© custom colors and finishes allow for whatever you can dream of, from solids of all colors to wood grains of all patterns"
        backgroundImageUrl="/finish.jpg"
      />
      <Imagegrid images={accImages} />
      <DesignIdeaSlider images={images} />

      <Footer />
    </div>
  );
}
