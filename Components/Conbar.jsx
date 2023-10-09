import Image from "next/image"
export default function Conbar ({phone, email}) {
    return (
        <div className="flex justify-between mb-10">
                   <Image 
            src='/cclogo.png'
            height={200}
            width={200}
        />
        <div className="flex justify-end gap-10">
        
            <div>{phone}</div>
            <div>{email}</div>
            <div className="rounded-md font-semibold text-pink-800 shadow-sm ">Request Consultation</div>
        </div>
        </div>
    )
}