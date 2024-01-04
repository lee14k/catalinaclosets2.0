import Image from 'next/image';
import Navbar from './Navbar';

export default function Rightphoto ({ heading, description, imageSrc, imageAlt, imageWidth, imageHeight }) {
    return (
        <div className="rightphotocontainer flex flex-col above-xs:flex-row justify-between my-12">
            
            <div className='flex-shrink-0 mx-auto above-xs:mx-0'>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                />
            </div>

            <div className="mx-16 righttextcontainer">
                <h2 className="text-4xl">{heading}</h2>
                <p>{description}</p>
                <button className="mt-5 bg px-6 py-3 text-xl font-semibold shadow-sm border-solid border-pink-800 border-2">Learn More</button>
            </div>

        </div>
    )
}
