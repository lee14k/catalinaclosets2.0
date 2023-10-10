import Image from 'next/image';
import Navbar from './Navbar';

export default function Leftphoto ({heading, description}) {
    return (
        <div className="flex justify-between ">
         
        <div className="mx-10">
            <h2 className="text-4xl">{heading}</h2>
            <p>{description} </p>
            <button className="mt-5 rounded-md bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm ">Learn More</button>
            
        </div>
           <div>
            <Image
                src="/finish.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
                />
            </div>
        </div>
    )
}
