import {
  WrenchScrewdriverIcon,
  TruckIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";

export default function Iconbar() {
  const items = [
    {
      caption: "Custom solutions tailored to your home",
      icon: WrenchScrewdriverIcon,
    },
     {
      caption: "Reliable installation directly to your door",
      icon: TruckIcon,
    },
     {
      caption: "Wide variety of finishes",
      icon: SwatchIcon,
    },
  ];
  return <div className="flex justify-center align-center bg-slate-100" >
    <dl className="grid grid-cols-3 mx-12 my-16 iconcontainer">
        {items.map((item) => (
            <div className="items-center mx-20 flex items-center justify-center flex-col ">
            <dt className="flex items-center justify-center ">
                <item.icon className="h-10 w-10 text-pink-800" />
            </dt>
            <dd className="text-sm my-2 ">{item.caption}</dd>
            <button className="mt-2 px-6 py-3 text-l font-semibold shadow-sm border-solid border-pink-800 border-2 bg-white">Learn More</button>
            </div>
        ))}
    </dl>
  </div>;
}
