
import ReactPlayer from "react-player";

const VideoCover = () => {
  return (
    <div className="player-wrapper h-100">
    <ReactPlayer
     className='react-player'
     controls={false}
     muted
     width='100%'
     height='100%'
     playing={true}
      url={["/assets/videos/v1.mkv"]} />
  </div>
  )
}

export default VideoCover