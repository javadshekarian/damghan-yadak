import '../styles/fonts.css';
import '../styles/all-page.css';

const Page_2 = () => {
    return (
        <>
            <div id="video-content">
                <video
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    src="/video/video.mp4"
                ></video>
                <div className="text-on-video">        
                    <p className="white">
                    مناطقی که امداد خودرو امداد یدک به شما امداد رسانی میکند
                    محور دامغان-شاهرود،در شرق
                    محور دامغان-سمنان،درغرب
                    در شمال شهرستان شامل های دامغان به چشمه علی 
                    چشمه علی به سه راهی فولاد محله
                    سه راهی فولاد محله به کیاسر
                    در جنوب شهرستان شامل محورهای
                    دامغان به معلمان
                    معلمان به جندق
                    </p>
                </div>
            </div>
        </>
    );
}

export default Page_2;