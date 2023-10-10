export default function Imagegrid({ images }) {
  return (
    <div className="gallerycontainer flex justify-center mb-10">
      <div className="container">
        <div className="gallery">
          {images.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center gallery__item gallery__item--${index + 1}`}
              onClick={() => handleOpenModal(item.link)}
              style={{ backgroundImage: `url(${item.link})` }}
            >
              <figcaption className="gallery__caption text-4xl flex">
                {item.header}
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}