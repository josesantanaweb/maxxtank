const SocialMedia = () => {
    return (
        <div className="flex flex-row space-x-8 justify-center items-center">
            <div className="flex items-center space-x-4 mb-4">
                <img src="/public/icons/clickImage.png" alt="" className="w-13 h-13" />
                <div className="text-xl font-semibold">Siguenos</div>
            </div>
            <div className="flex space-x-4">
                <a href="#">
                    <img src="/public/icons/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
                </a>
                <a href="#">
                    <img src="/public/icons/twitter.png" alt="Twitter" className="w-10 h-10" />
                </a>
                <a href="#">
                    <img src="/public/icons/facebook.png" alt="Facebook" className="w-10 h-10" />
                </a>
                <a href="#">
                    <img src="/public/icons/instagram.png" alt="Instagram" className="w-10 h-10" />
                </a>
                <a href="#">
                    <img src="/public/icons/youtube.png" alt="YouTube" className="w-10 h-10" />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
