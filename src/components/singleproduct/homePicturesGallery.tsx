import GallerySlider from "./galleryslider";

interface IProps {
    images: string[];
  }
export default function HomePicturesGallery({images}:IProps) {
  return (
    <div>
      <GallerySlider images={images}/>
    </div>
  )
}
