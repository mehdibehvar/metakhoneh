
import ReactPlayer from "react-player";

const VideoCover = () => {
  return (
    <div className="video_wrapper h-100">
    <ReactPlayer
     controls={false}
   
      url={["/assets/videos/v1.mkv"]} />
  </div>
  )
}

export default VideoCover