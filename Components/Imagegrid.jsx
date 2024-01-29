import Link from 'next/link';

export default function Imagegrid({ images }) {
  return (
    <div className="bg-white">
    <div className="gallerycontainer flex justify-center pb-10 bg-white">
      <div className="container  bg-white">
        <div className="gallery bg-white">
          {images.map((item, index) => (
            <Link href={item.page} key={index}>
              <div className="gallery__item-wrapper">
                <div style={{ backgroundImage: `url(${item.link})` }} className={`gallery__item gallery__item--${index + 1}`}>
                  <figcaption className="gallery__caption text-4xl flex">
                    {item.header}
                  </figcaption>
                </div>
                <span className="mobile-caption text-4xl bg-white">{item.header}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
