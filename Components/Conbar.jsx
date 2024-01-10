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
        <div className="flex justify-between fixed bg-white w-full condrop z-10 border-solid border-b-4	">
          
            <div className="flex  gap-10 mb contextwrap mx-10 ">
                <div className='mt-12 py-2'>{phone}</div>
                <div className='mt-12 py-2'>{email}</div>
                <div >
                    <button className="rounded-md font-semibold bg-pink-800 shadow-sm mt-12 text-white px-4 py-2" onClick={formPop}>
                        Request Consultation
                    </button>
                    {view === "Dropdownconsult" && <Dropdownconsult />}
                </div>
            </div>
        </div>
    );
}
