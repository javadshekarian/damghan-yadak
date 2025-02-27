import '../styles/all-page.css';

const VideoContainer = () => {
    return (
        <div className="video-container">
            <video 
                src="/video/video.mp4"
                autoPlay={true}
                loop
                muted
            ></video>
        </div>
    )
};

export default VideoContainer;