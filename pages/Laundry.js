import Head from "@/Components/Head";
import Imagegrid from "@/Components/Imagegrid";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import DesignIdeaSlider from '../Components/DesignIdeaSlider';
import Form from "@/Components/Form";
import Spacecta from "@/Components/Spacecta";
import NewNav from "@/Components/NewNav";

export default function Laundry() {


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
      <div className="spacepageheadwrap  flex ">
        <Head
          head="Laundry"
          caption="Uniboard© custom colors and finishes allow for whatever you can dream of, from solids of all colors to wood grains of all patterns"
          backgroundImageUrl="/closets.jpg"
        />
        <div className="mx-10 my-20 width-3/4">
        <Form />
        </div>
      </div>
      
      <div   className="closetcall mx-10 my-10">
      <Spacecta headlineone="Get started with a free consultation"
        headlinetwo="We'll help you find the right solution for your home"
        buttontext="Schedule a free consultation" 
      />
        </div>
                <h1>Custom Laundry Design Ideas</h1>

      <DesignIdeaSlider images={images} header={headers} descriptions={descriptions}/>
      <Footer />
    </div>
  );
}
