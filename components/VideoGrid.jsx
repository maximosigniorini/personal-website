import ReactPlayer from 'react-player';


const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {videos.map((video, index) => (
      <div key={index} className="w-full h-64">
        <ReactPlayer url={video.url} width="100%" height="100%" controls />
      </div>
    ))}
  </div>
  )
}

export default VideoGrid