import Head from "@/Components/Head";
import Imagegrid from "@/Components/Imagegrid";
import Navbar from "../Components/Navbar";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import DesignIdeaSlider from '../Components/DesignIdeaSlider';
import Form from "@/Components/Form";
import Spacecta from "@/Components/Spacecta";
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
    <div className="mainbodywrapper">
      <Conbar />
      <Navbar />
        <Head
          head="Closets"
          caption="Uniboard© custom colors and finishes allow for whatever you can dream of, from solids of all colors to wood grains of all patterns"
          backgroundImageUrl="/closets.jpg"
        />
      
      
      <div   className="closetcall mx-10 my-10">
      <Spacecta headlineone="Get started with a free consultation"
        headlinetwo="We'll help you find the right solution for your home"
        buttontext="Schedule a free consultation" 
      />
        <div className="mx-10 my-20 width-full">
        <Form />
        </div>
        </div>
        <h1 className="text-4xl py-16">Custom Closet Design Ideas</h1>
      <DesignIdeaSlider images={images} header={headers} descriptions={descriptions}/>
      <Footer />
    </div>
  );
}
