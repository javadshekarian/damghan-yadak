import '../styles/all-page.css';
import videoFile from '../video/video.mp4';

const VideoContainer = () => {
    return (
        <div className="video-container">
            <video autoPlay={true} loop muted>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoContainer;
