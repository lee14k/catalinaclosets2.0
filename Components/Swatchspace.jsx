export default function Swatchspace({
  header,
  topImage1Src,
  topImage2Src,
  bottomImageSrc,
}) {
  return (
    <div>
      <h1>{header}</h1>
      <div className="swatchspace-container">
        {/* Top Images */}
        <div 
          className="top-image" 
          style={{ backgroundImage: `url(${topImage1Src})` }}
        />
        <div 
          className="top-image" 
          style={{ backgroundImage: `url(${topImage2Src})` }}
        />

        {/* Bottom Image */}
        <div 
          className="bottom-image" 
          style={{ backgroundImage: `url(${bottomImageSrc})` }}
        />
      </div>
    </div>
  );
}
