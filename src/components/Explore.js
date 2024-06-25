import React, { useState, useEffect } from 'react';
import Expl from '../Explore.json';
import ImageCard from './ImageCard';
import '../App.css';

const Explore = () => {

  return (
    <div className="explore-grid">
      {Expl.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </div>
  );
}

export default Explore;
