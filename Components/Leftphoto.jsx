import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export default function Leftphoto({ heading, description, imageSrc, imageAlt, imageWidth, imageHeight }) {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <div className="flex flex-col above-xs:flex-row justify-center py-12 bg-white" >
            <motion.div style={{ scale }}>
                <div className='leftphotocontainer'>
                    <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
                    <motion.div
                        className="text-overlay"
                        style={{ opacity }}
                    >
                        <h2 className="text-white text-6xl homeheadhead">{heading}</h2>
                        <Link href="/Closets">
                        <button className="ml-12 mt-5 bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm border-solid border-white border-2 w-9/12">{description}</button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
