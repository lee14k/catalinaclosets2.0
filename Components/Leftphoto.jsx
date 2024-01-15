import Image from 'next/image';
import Navbar from './Navbar';
import { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Leftphoto({ heading, description, imageSrc, imageAlt, imageWidth, imageHeight }) {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <div className="flex flex-col above-xs:flex-row justify-between my-12" >
            <motion.div style={{ scale }}>
                <div className='leftphotocontainer'>
                    <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
                    <motion.div
                        className="text-overlay"
                        style={{ opacity }}
                    >
                        <h2>{heading}</h2>
                        <p>{description}</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
