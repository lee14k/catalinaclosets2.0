import Image from "next/image";
import { useState, useEffect } from "react";
import Form from "./Form";
import Dropdownconsult from "./Dropdownconsult";
import Link from "next/link";

export default function Conbar({ phone, email }) {
    const [view, setView] = useState("");
  const formPop = () => {
    if (view === "Dropdownconsult") {
        setView("");  // hide the Dropdownconsult if it's currently visible
    } else {
        setView("Dropdownconsult");  // show the Dropdownconsult if it's currently hidden
    }
};

    return (
        <div className="conwrap flex justify-between fixed bg-white w-full condrop">
            <div className="flex-shrink-0 flex-grow-0 mt-8 mb-0">
                <Link href="/">
                <Image
                    className="mx-10"
                    src='/cclogo.png'
                    height={300}
                    width={300}
                />
                </Link>
            </div>
            <div className="flex justify-end gap-10 mb-10 contextwrap">
                <div className='mt-12'>{phone}</div>
                <div className='mt-12'>{email}</div>
                <div className="rounded-md font-semibold text-pink-800 shadow-sm mt-12">
                    <button onClick={formPop}>
                        Request Consultation
                    </button>
                    {view === "Dropdownconsult" && <Dropdownconsult />}
                </div>
            </div>
        </div>
    );
}
