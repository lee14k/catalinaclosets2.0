import Timeline from "@/Components/Timeline";
import NewNav from "@/Components/NewNav";
import Image from "next/image";
import HorizontalSlider from "@/Components/HorizontalSlider";
import Footer from "@/Components/Footer";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Conbar from "@/Components/Conbar";
const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.aboutcontainer');
            if (!element) return;

            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.7) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1 });
        } else {
            controls.start({ opacity: 0 });
        }
    }, [isVisible, controls]);
    return (
        <div>
            <Conbar phone="608-205-5000" email="info@catalinaclosets.com" />
            <NewNav />
            <div></div>
            <HorizontalSlider
                header="About Us"
            />

            <div className="mt-24">
                <div className="flex justify-center items-center aboutcontainer">

                    <motion.p
                        className="text-white text-xl mx-12"
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >Catalina Closets is here to help with beautiful and functional custom closet and organization solutions for your home or office. We help customers find extra space in every room of the house, including closets, garages, laundry rooms, libraries, living rooms, mudrooms, pantries, wine rooms, cellars, attics, and wherever else you need some extra space. We make everything locally, here in Dane County, Wisconsin. Give us a call to see how we can transform the spaces where you live and work.

                    </motion.p>

                </div>
                <div className="flex flex-col justify-center items-center">

                </div>
            </div>
            <h2 className="text-4xl my-12">Our Process</h2>
            <Timeline />
            <Footer />
        </div>
    );
}
export default About