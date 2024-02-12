import Head from "@/Components/Head";
import Imagegrid from "@/Components/Imagegrid";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import DesignIdeaSlider from '../Components/DesignIdeaSlider';
import Form from "@/Components/Form";
import Spacecta from "@/Components/Spacecta";
import NewNav from "@/Components/NewNav";
import HorizontalSlider from "@/Components/HorizontalSlider";
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
      <NewNav />
      <HorizontalSlider
                header="Closets"
            />
      
      
      <div   className="closetcall mx-10 my-10">
      <Spacecta headlineone="Get started with a free consultation"
        headlinetwo="We'll help you find the right solution for your home"
        buttontext="Schedule a free consultation" 
      />
       
        </div>
        <h1 className="text-4xl py-16">Custom Closet Design Ideas</h1>
      <DesignIdeaSlider images={images} header={headers} descriptions={descriptions}/>
      <Footer />
    </div>
  );
}
