import Image from 'next/image';
import Navbar from './Navbar';

export default function Rightphoto ({heading, description}) {
    return (
        <div className="flex flex-col above-xs:flex-row justify-between">
            <div className='flex-shrink-0 mx-auto above-xs:mx-0'>
            <Image
                src="/homeoffice.jpg"
                alt="Picture of the author"
                width={600}
                height={900}
                />
            </div>
        <div className="mx-40">
            <h2 className="text-4xl">{heading}</h2>
            <p>{description} </p>
            <button className="mt-5 bg px-6 py-3 text-xl font-semibold shadow-sm border-solid border-pink-800 border-2">Learn More</button>
        </div>
        </div>
    )
}
