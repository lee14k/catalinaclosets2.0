import Image from "next/image";
import { useState, useEffect } from "react";
import Form from "./Form";
import Dropdownconsult from "./Dropdownconsult";

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
        <div className="flex justify-between mb-10">
            <div className="flex-shrink-0 flex-grow-0">
                <a href="/">
                <Image
                    src='/cclogo.png'
                    height={200}
                    width={200}
                />
                </a>
            </div>
            <div className="flex justify-end gap-10">
                <div>{phone}</div>
                <div>{email}</div>
                <div className="rounded-md font-semibold text-pink-800 shadow-sm">
                    <button onClick={formPop}>
                        Request Consultation
                    </button>
                    {view === "Dropdownconsult" && <Dropdownconsult />}
                </div>
            </div>
        </div>
    );
}
