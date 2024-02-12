import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import DesignIdeaSlider from '../Components/DesignIdeaSlider';
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
      
      
      <div className="mt-2 flex justify-center items-center aboutcontainer">
         
         <p>Catalina Closets is here to help with beautiful and functional custom closet and organization solutions for your home or office. We help customers find extra space in every room of the house, including closets, garages, laundry rooms, libraries, living rooms, mudrooms, pantries, wine rooms, cellars, attics, and wherever else you need some extra space. We make everything locally, here in Dane County, Wisconsin. Give us a call to see how we can transform the spaces where you live and work.

</p>

         </div>
        <h1 className="text-4xl py-16">Custom Closet Design Ideas</h1>
      <Footer />
    </div>
  );
}
