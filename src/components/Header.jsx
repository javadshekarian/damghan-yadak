import { useEffect, useState, useRef } from 'react';
import '../styles/fonts.css';
import '../styles/all-page.css';
import image_1 from '../images/1.jpg';
import image_2 from '../images/2.jpg';
import image_3 from '../images/3.jpg';

const Page_1 = () => {
    const main = useRef(null);
    const circles = [useRef(null), useRef(null), useRef(null)];
    const [currentImage, setCurrentImage] = useState(image_1); // Use state for current image
    const [pictureTime, setPictureTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPictureTime(prevTime => {
                const newTime = prevTime + 1;
                // Change background image
                switch (newTime % 3) {
                    case 0:
                        setCurrentImage(image_1);
                        break;
                    case 1:
                        setCurrentImage(image_2);
                        break;
                    case 2:
                        setCurrentImage(image_3);
                        break;
                    default:
                        break;
                }

                // Update circles (active circle)
                const prevIndex = (newTime % 3) - 1;
                const currentIndex = newTime % 3;

                if (circles[prevIndex < 0 ? 2 : prevIndex].current) {
                    circles[prevIndex < 0 ? 2 : prevIndex].current.classList.remove('bgb');
                }
                if (circles[currentIndex].current) {
                    circles[currentIndex].current.classList.add('bgb');
                }

                // Handle opacity fade effect for the main container
                if (main.current) {
                    main.current.style.opacity = "0";
                    setTimeout(() => {
                        if (main.current) main.current.style.opacity = "1";
                    }, 200);
                }

                return newTime; // Update pictureTime
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [circles]);

    return (
        <>
            <div 
                id="main" 
                className="fce" 
                style={{
                    backgroundImage: `url(${currentImage})` // Directly use currentImage in backgroundImage
                }}
                ref={main}
            >
                <div className="frc">
                    <div className="circle bgb" ref={circles[0]}></div>
                    <div className="circle" ref={circles[1]}></div>
                    <div className="circle" ref={circles[2]}></div>
                </div>
            </div>
            <div className="title-main">امداد خودرو هراسانیان</div>
            <div className="varzir-font">
                در صورت خرابی خودرو در جاده، با شماره امداد خودرو امداد یدک تماس بگیرید و از خدمات سریع تیم ما بهره‌مند شوید. ما در کنار شما هستیم 
                تا هر لحظه سفر شما را ایمن‌تر و بدون دغدغه کنیم.
                <br />
                <a href="tel:09906552092">
                    <div className="bold-font mt-5">09906552092</div>
                </a>
                <a href="tel:09331089470">
                    <div className="bold-font">09331089470</div>
                </a>
            </div>
        </>
    );
};

export default Page_1;
