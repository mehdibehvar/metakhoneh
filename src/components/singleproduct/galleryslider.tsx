import LightGallery from "lightgallery/react";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
interface IProps {
  images: string[];
}
function GallerySlider({ images }: IProps) {
  const [items, setItems] = useState(images);


  const getItems = useCallback(() => {
    return items.map((item, index) => {
      //i check a condition if index < the number of grids return elements with display=block else return elements with display=none or className=not_display//// 
      if (index <= 4) {
        return (
          <div
            key={index}
            className={`gallery-item item${index + 1}`}
            data-src={item}
          >
            <div className="image_wrapper">
              <Image
                className="img-responsive"
                alt={item}
                src={item}
                width={1200}
                height={550}
                layout="responsive"
              />
            </div>
          </div>
        );
      } else {
        return (
          <div
            key={index}
            className={`gallery-item not_display`}
            data-src={item}
          >
            <div className="image_wrapper">
              <Image
                className="img-responsive"
                alt={item}
                src={item}
                width={1200}
                height={550}
                layout="responsive"
              />
            </div>
          </div>
        );
      }
    });
  }, [items]);

  return (
    <LightGallery
      // onAfterOpen={()=>console.log("afteropen")}
      //  onBeforeClose={()=>console.log("beforclose")}
      // onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {getItems()}
    </LightGallery>
  );
}
export default GallerySlider;
