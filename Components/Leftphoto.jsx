import Image from 'next/image';
import Navbar from './Navbar';

export default function Leftphoto ({heading, description}) {
    return (
        <div className="flex flex-col above-xs:flex-row justify-between">
         
        <div className="mx-40 lefttextcontainer righttextcontainer">
            <h2 className="text-4xl">{heading}</h2>
            <p>{description} </p>
            <button className="mt-5 rounded-md bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm ">Learn More</button>
            
        </div>
           <div className='flex-shrink-0 mx-auto above-xs:mx-0 leftimgcontain'>
            <Image
                src="/finish.jpg"
                alt="Picture of the author"
                className='leftphotoimg'
                width={500}
                height={500}
                />
            </div>
        </div>
    )
}
