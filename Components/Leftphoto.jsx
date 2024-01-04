import Image from 'next/image';
import Navbar from './Navbar';

export default function Leftphoto ({ heading, description, imageSrc, imageAlt, imageWidth, imageHeight }) {
    return (
        <div className="flex flex-col above-xs:flex-row justify-between my-12">
         
            <div className="mx-24 righttextcontainer">
                <h2 className="text-4xl">{heading}</h2>
                <p>{description}</p>
                <button className="mt-5 rounded-md bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm">Learn More</button>
            </div>

            <div className='rightphotocontainer flex flex-col above-xs:flex-row justify-between'>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className='leftphotoimg'
                    width={imageWidth}
                    height={imageHeight}
                />
            </div>

        </div>
    )
}
