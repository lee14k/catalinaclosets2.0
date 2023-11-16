import { Oooh_Baby } from "next/font/google";
import { Zoom } from 'react-reveal';

const Oooh = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});

export default function Twophotobutton({ header }) {
  

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-20">
      <div className="text-6xl">
        <h1 className={Oooh.className}>{header}</h1>
      </div>
      <div className="grid grid-cols-1 gap-10">
       
        <div >
          <Zoom>
          <img src="library.jpg" alt="Image" />
</Zoom>
          <div >
            Text Overlay
          </div>
        </div>
      </div>
      <button>Learn More</button>
    </div>
  );
}
