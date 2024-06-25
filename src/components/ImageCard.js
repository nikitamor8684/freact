import React from 'react';
import '../App.css';

const ImageCard = ({ image }) => {
    console.log(image);
  return (
    <div className="image-card">
      <img src={image.imgsrc}  />
      <div className="image-info">
      </div>
    </div>
  );
}

export default ImageCard;
