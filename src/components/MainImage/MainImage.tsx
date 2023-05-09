import React from 'react';
import { Element } from 'fictoan-react';

interface MainImageProps {
  alt: string;
  src: string;
}
const MainImage = ({ src, alt }: MainImageProps) => (
  <Element as="div" className="image-wrapper">
    <img src={src} alt={alt} />
  </Element>
);

export default MainImage;
