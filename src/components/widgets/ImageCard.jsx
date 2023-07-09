import React from "react";
import propsTypes, { string } from "prop-types";

const ImageCard = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

ImageCard.propsTypes = {
  src: propsTypes.string.isRequired,
  alt: propsTypes.string.isRequired,
  width: propsTypes.number.isRequired,
  height: propsTypes.number.isRequired,
  className: propsTypes.string.isRequired,
};

export default ImageCard;
