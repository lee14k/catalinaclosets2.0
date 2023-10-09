import Image from "next/image"
export default function Conbar () {
    return (
        <div className="flex justify-between mb-10">
                   <Image 
            src='/cclogo.png'
            height={200}
            width={200}
        />
        <div className="flex justify-end gap-10">
        
            <div>Phone Number</div>
            <div>Email</div>
            <div className="rounded-md font-semibold text-pink-800 shadow-sm ">Request Consultation</div>
        </div>
        </div>
    )
}