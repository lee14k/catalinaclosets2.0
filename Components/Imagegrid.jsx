import Link from 'next/link';

export default function Imagegrid({ images }) {
  return (
    <div className="gallerycontainer flex justify-center mb-10">
      <div className="container ">
        <div className="gallery ">
          {images.map((item, index) => (
            <Link href={item.page} >
                <div style={{ backgroundImage: `url(${item.link})` }} className={`flex justify-center items-center gallery__item gallery__item--${index + 1}`}>
                  <figcaption className="gallery__caption text-4xl flex">
                    {item.header}
                  </figcaption>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
