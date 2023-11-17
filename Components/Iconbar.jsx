import {
  WrenchScrewdriverIcon,
  TruckIcon,
  SwatchIcon,
} from "@heroicons/react/20/solid";

export default function Iconbar() {
  const items = [
    {
      caption: "Custom, durable solutions tailored to your home",
      icon: WrenchScrewdriverIcon,
    },
     {
      caption: "Delivery right to your door, fast and reliable installation",
      icon: TruckIcon,
    },
     {
      caption: "Wide variety of details to make the space your own",
      icon: SwatchIcon,
    },
  ];
  return <div >
    <dl className="grid grid-cols-3 mx-16 my-16">
        {items.map((item, index) => (
            <div className="items-center mx-16">
            <dt>
                <item.icon className="h-10 w-10 text-pink-800" />
            </dt>
            <dd className="text-xl text-pink-800">{item.caption}</dd>
            <button>Learn More</button>
            </div>
        ))}
    </dl>
  </div>;
}
