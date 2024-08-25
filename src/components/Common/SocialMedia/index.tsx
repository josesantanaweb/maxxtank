const SocialMedia = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-8">
      <div className="flex items-center mb-4 space-x-4">
        <img src="/icons/clickImage.png" alt="" className="w-13 h-13" />
        <div className="text-xl font-semibold">Siguenos</div>
      </div>
      <div className="flex space-x-4">
        <a href="#">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
        </a>
        <a href="#">
          <img src="/icons/twitter.png" alt="Twitter" className="w-10 h-10" />
        </a>
        <a href="#">
          <img src="/icons/facebook.png" alt="Facebook" className="w-10 h-10" />
        </a>
        <a href="#">
          <img src="/icons/instagram.png" alt="Instagram" className="w-10 h-10" />
        </a>
        <a href="#">
          <img src="/icons/youtube.png" alt="YouTube" className="w-10 h-10" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
