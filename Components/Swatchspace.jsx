import Image from "next/image";

export default function Swatchspace({
  header,
  imageSrc,
  imageSrcSpace,
  imageAlt,
  imageAltSpace,
  imageHeight,
  imageHeightSpace,
  imageWidth,
  imageWidthSpace,
}) {
  return (
    <div>
      <h1>{header}</h1>

      <div className="grid grid-cols-2">
        <div className="flex">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <div className="col-span-2">
          <Image
            src={imageSrcSpace}
            alt={imageAltSpace}
            width={imageWidthSpace}
            height={imageHeightSpace}
          />
        </div>
      </div>
    </div>
  );
}
