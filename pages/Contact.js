import Head from "@/Components/Head";
import Imagegrid from "@/Components/Imagegrid";
import Navbar from "../Components/Navbar";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import ContactForm from "@/Components/Contactform";
import Map from "@/Components/Map";

export default function Contact() {
  return (
    <div className="mainbodywrapper">
      <Conbar />
      <Navbar />
  <div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5831.001194101981!2d-89.305476!3d43.051938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806519f30065a7f%3A0x5dc78dadc418b012!2s3240%20Progress%20Rd%2C%20Madison%2C%20WI%2053716!5e0!3m2!1sen!2sus!4v1704855700419!5m2!1sen!2sus" width="2000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
      <ContactForm/>
       
      <Footer />
    </div>
  );
}
