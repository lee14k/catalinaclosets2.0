import Image from 'next/image';
import Navbar from './Navbar';

export default function Rightphoto () {
    return (
        <div className="flex ">
            <div>
            <Image
                src="/homeoffice.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
                />
            </div>
        <div>
            <h2>Explore finishes and details</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam, vero assumenda totam, quidem, pariatur commodi vitae earum maiores velit optio obcaecati facere alias veniam vel cumque harum quod facilis. </p>
            <button className="mt-5 rounded-md bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm ">Learn More</button>
        </div>
        </div>
    )
}
