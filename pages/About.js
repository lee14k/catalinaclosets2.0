import Timeline from "@/Components/Timeline";
import NewNav from "@/Components/NewNav";
import Image from "next/image";
import HorizontalSlider from "@/Components/HorizontalSlider";
import Footer from "@/Components/Footer";
const About = () => {
    return (
        <div>
            <NewNav />
            <div></div>
            <HorizontalSlider/>

            <div className="mt-24">
                <div className="flex justify-center items-center aboutcontainer">
         
                    <p className="text-white text-xl mx-12">Catalina Closets is here to help with beautiful and functional custom closet and organization solutions for your home or office. We help customers find extra space in every room of the house, including closets, garages, laundry rooms, libraries, living rooms, mudrooms, pantries, wine rooms, cellars, attics, and wherever else you need some extra space. We make everything locally, here in Dane County, Wisconsin. Give us a call to see how we can transform the spaces where you live and work.

</p>
                </div>
                <div className="flex flex-col justify-center items-center">
        
                </div>
            </div>
            <h2 className="text-4xl my-12">Our Process</h2>
            <Timeline />
            <Footer/>
        </div>
    );
}
export default About