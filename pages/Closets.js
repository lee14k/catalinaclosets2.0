import Head from "@/Components/Head";
import Imagegrid from "@/Components/Imagegrid";
import Navbar from "../Components/Navbar";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import DesignIdeaSlider from '../components/DesignIdeaSlider';
import Form from "@/Components/Form";
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
'/library.jpg',
'/closets.jpg',
'living.jpg'
  ];

   const headers = [
  'Description for the library',
  'Description for the closets',
  'Description for the living room'
];

 const descriptions = [
  'Description for the library',
  'Description for the closets',
  'Description for the living room'
];
  return (
    <div>
      <Conbar />
      <Navbar />
      <div className="relative flex">
        <Head
          head="Closets"
          caption="Uniboard© custom colors and finishes allow for whatever you can dream of, from solids of all colors to wood grains of all patterns"
          backgroundImageUrl="/closets.jpg"
        />
        <Form className="absolute top-20 left-20" />
      </div>
      <DesignIdeaSlider images={images} header={headers} descriptions={descriptions}/>
      <Footer />
    </div>
  );
}
