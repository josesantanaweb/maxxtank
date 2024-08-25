const Video = ({ setOpenVideo }: any) => {
  return (
    <div className="fixed top-0 z-10 flex items-center justify-center w-full h-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35"
        onClick={() => setOpenVideo(false)}
      ></div>
      <div className="flex bg-white rounded-xl w-[700px] h-[600px] relative z-10">
        <iframe
          width="700"
          height="600"
          src="https://www.youtube.com/embed/ZswfHNxwZNU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Video
