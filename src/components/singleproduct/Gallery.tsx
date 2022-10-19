import Image from "next/image";
import { useState } from "react";
import GallerySlider from "./LightGallery";

interface IProps {
  images: string[];
}
export default function HomeGallery({ images }: IProps) {

  const gridImages = images.slice(0, 5);


  return (
    <>
 
     
     <GallerySlider
     images={images}

      gridImages={gridImages}
       />

      
 
    </>
  );
}
