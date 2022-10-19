import LightGallery from "lightgallery/react";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { AfterSlideDetail } from "lightgallery/lg-events";
interface IProps {
  images: string[],
  gridImages:string[],
}
function GallerySlider({ images,gridImages }: IProps) {
    const restItems=images.slice(5);
  const lightGallery = useRef<any>(null);
  const [items, setItems] = useState(images);
  const onInit = useCallback((detail:any) => {
    if (detail) {
        lightGallery.current = detail.instance;   
    }
}, []);
  useEffect(() => {
    console.log("gallery rendered");
    lightGallery.current.refresh();
  }, [items]);


  const getItems = useCallback(() => {
    return items.map((item,index) => {
        return (
            <div
                key={index}
                // data-lg-size={1000}
                className={`gallery-item item${index + 1}`}
                data-src={item}
            >
               <div className="image_wrapper">
               <Image className="img-responsive"
                alt="ee"
                 src={item} 
                 width={1200}
                 height={550}
                 layout="responsive"
                 />
               </div>
            </div>
        );
    });
}, [items]);
// const addItem = useCallback(() => {
//     setItems([
//         ...items,"dddddddd"    
//     ]);
// }, [items]);
// const openGallery=()=>{
//     console.log("opppppppppppppppppp");
//     addItem()
// }
// const closeGallery=()=>{
//     console.log("closssssssssssssssss");
    
//     setItems(gridImages)
// }
  return (

<LightGallery
    
    // onAfterOpen={openGallery}
    //  onBeforeClose={closeGallery}
      onInit={onInit}
      speed={2000}
      plugins={[lgThumbnail, lgZoom]}
    >
      {getItems()}
    </LightGallery>

  

  );
}
export default GallerySlider;
