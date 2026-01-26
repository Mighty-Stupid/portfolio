const SvgCard = ({ src, text, imgClassName }) => {
  return (
    <div className="svgText">
      <img src={src} className={imgClassName} />
      <h2>{text}</h2>
    </div>
  );
};

export default SvgCard;
