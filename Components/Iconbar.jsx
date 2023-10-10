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
      caption: "Wide variety of colors, finishes and details to make the space your ownn",
      icon: SwatchIcon,
    },
  ];
  return <div>
    <dl>
        {items.map((item, index) => (
            <div className="flex justify-center items-center gap-5">
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
