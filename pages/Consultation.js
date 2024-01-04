import Head from "@/Components/Head";
import Imagegrid from "@/Components/Imagegrid";
import Navbar from "../Components/Navbar";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contactform";

export default function Consultation() {
  return (
    <div className="mainbodywrapper">
      <Conbar />
      <Navbar />
      <Contact/>

      <Footer />
    </div>
  );
}
